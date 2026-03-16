import re

SUSPICIOUS_KEYWORDS = ['login', 'verify', 'update', 'secure', 'account', 'banking', 'free', 'bonus']

def extract_features(url: str):
    length = len(url)
    num_dots = url.count('.') # Number of dots
    has_at = 1 if '@' in url else 0 # Presence of @
    
    # Check suspicious keywords
    has_keyword = 0
    url_lower = url.lower()
    for kw in SUSPICIOUS_KEYWORDS:
        if kw in url_lower:
            has_keyword = 1
            break
            
    return [length, num_dots, has_at, has_keyword]

class URLDetector:
    def __init__(self, model):
        # Expects the url_model trained in our script
        self.model = model

    def scan(self, url: str):
        features = extract_features(url)
        # Predict probability of class 1 (phishing)
        proba = self.model.predict_proba([features])[0][1]
        risk_score = round(proba * 100, 2)
        
        # Determine threat
        if risk_score > 50:
            threat_type = "phishing"
            reason = "Suspicious URL characteristics detected (e.g., unusual length, numerous subdomains, or phishing keywords)."
        else:
            threat_type = "safe"
            reason = "URL appears normal based on structural features."
            
        return {
            "risk_score": risk_score,
            "threat_type": threat_type,
            "reason": reason
        }
