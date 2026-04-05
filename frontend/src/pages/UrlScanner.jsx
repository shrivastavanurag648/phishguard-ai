import React, { useState } from 'react';
import { scanUrl } from '../api';
import ResultCard from '../components/ResultCard';
import { Loader2, ShieldCheck, Lock } from 'lucide-react';

const UrlScanner = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await scanUrl(url);
      setResult(data);
    } catch (err) {
      setError(err?.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow bg-transparent text-slate-200">
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-block bg-[#0b1021]/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 mb-2 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
              URL Scanner
            </h1>
            <p className="text-lg text-slate-300">
              Analyze any link for potential phishing threats.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleScan} className="flex flex-col md:flex-row shadow-2xl bg-[#0b1021]/40 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl md:rounded-full p-2 border border-white/10">
            <input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-grow px-6 py-4 bg-white text-slate-900 border-none outline-none text-lg rounded-xl md:rounded-l-full placeholder:text-slate-500 focus:ring-4 focus:ring-indigo-500/30 transition-all shadow-inner font-medium"
              required
            />
            <button
              type="submit"
              disabled={loading || !url}
              className="px-8 py-4 mt-2 md:mt-0 md:ml-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl md:rounded-r-full transition-all flex items-center justify-center min-w-[140px] shadow-lg"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                'Scan'
              )}
            </button>
          </form>

          <div className="mt-8 flex justify-center items-center gap-8 text-sm font-medium text-slate-300">
            <div className="flex items-center gap-1.5 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Secure Scan
            </div>
            <div className="flex items-center gap-1.5 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <Lock className="w-4 h-4 text-slate-300" />
              No Logs Stored
            </div>
          </div>

          {error && (
            <div className="mt-8 p-6 bg-red-900/50 text-red-100 border border-red-800 text-center font-bold text-lg rounded-sm animate-in fade-in">
              {error}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <ResultCard 
              score={result.risk_score} 
              threatType={result.prediction}
              explanation={result.reason} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlScanner;
