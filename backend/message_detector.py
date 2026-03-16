class MessageDetector:
    def __init__(self, model):
        # Expects the msg_model pipeline
        self.model = model

    def scan(self, message: str):
        # Predict probability of class 1 (scam)
        proba = self.model.predict_proba([message])[0][1]
        risk_score = round(proba * 100, 2)
        
        if risk_score > 50:
            threat_type = "scam"
            reason = "Message contains language commonly associated with scams or phishing attempts."
        else:
            threat_type = "safe"
            reason = "Message does not exhibit clear signs of being a scam."
            
        return {
            "risk_score": risk_score,
            "threat_type": threat_type,
            "reason": reason
        }
