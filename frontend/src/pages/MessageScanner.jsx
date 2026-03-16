import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scanMessage } from '../api';
import ResultCard from '../components/ResultCard';
import { MessageSquare, ArrowLeft, Loader2 } from 'lucide-react';

const MessageScanner = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async (e) => {
    e.preventDefault();
    if (!message) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await scanMessage(message);
      setResult(data);
    } catch (err) {
      setError('Failed to scan message. Please ensure the backend is running and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-100/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 mb-8 border border-slate-100 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Message Scanner</h1>
              <p className="text-slate-500 mt-1">Analyze emails, texts, or DMs for phishing content.</p>
            </div>
          </div>

          <form onSubmit={handleScan} className="space-y-6">
            <div>
              <label htmlFor="message-input" className="block text-sm font-semibold text-slate-700 mb-2">
                Paste the message content
              </label>
              <textarea
                id="message-input"
                rows="6"
                placeholder="Paste the suspicious email, text message, or social media DM here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all outline-none text-lg resize-y"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading || !message}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center text-lg h-14"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin mr-3" />
                  Analyzing...
                </>
              ) : (
                'Scan Message'
              )}
            </button>
          </form>
          
          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-800 rounded-xl border border-red-100 text-center font-medium animate-in fade-in">
              {error}
            </div>
          )}
        </div>

        {result && (
          <ResultCard 
            score={result.score || result.risk_score} 
            threatType={result.threatType || result.threat_type} 
            explanation={result.explanation} 
          />
        )}
      </div>
    </div>
  );
};

export default MessageScanner;
