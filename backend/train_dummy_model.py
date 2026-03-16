import pickle
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline

def train_and_save():
    print("Training basic ML models for PhishGuard AI...")
    
    # Model 1: URL Rule-based logical weights simulated as a linear model
    # Features: [length, num_dots, has_at, has_suspicious_keywords]
    X_url = [
        [20, 1, 0, 0],   # Safe
        [80, 5, 1, 1],   # Phishing
        [30, 2, 0, 0],   # Safe
        [100, 4, 1, 1]   # Phishing
    ]
    y_url = [0, 1, 0, 1] # 0: safe, 1: phishing
    
    url_model = LogisticRegression()
    url_model.fit(X_url, y_url)

    # Model 2: Message text model
    messages = [
        "Hey, how are you?",
        "URGENT: Your account has been compromised. Verify your details here immediately.",
        "Meeting at 5 pm.",
        "You have won a $1000 gift card! Click here to claim your prize."
    ]
    y_msg = [0, 1, 0, 1] # 0: safe, 1: scam

    msg_pipeline = Pipeline([
        ('tfidf', TfidfVectorizer()),
        ('clf', LogisticRegression())
    ])
    msg_pipeline.fit(messages, y_msg)

    # Save both in a single dictionary to model.pkl
    models = {
        'url_model': url_model,
        'msg_model': msg_pipeline
    }

    with open('model.pkl', 'wb') as f:
        pickle.dump(models, f)
    print("model.pkl has been created successfully!")

if __name__ == "__main__":
    train_and_save()
