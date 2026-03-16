import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Link2, MessageSquare } from 'lucide-react';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 px-4">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-flex p-4 rounded-3xl bg-indigo-500/10 border border-indigo-400/20 mb-8 shadow-2xl backdrop-blur-sm">
          <Shield className="w-20 h-20 text-indigo-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-purple-200 mb-6 tracking-tight">
          PhishGuard AI
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl px-4">
          Detect phishing attacks instantly. Protect yourself and your organization with AI-powered threat intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center mt-4">
          <Link to="/scan-url" className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1">
            <Link2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>Scan URL</span>
          </Link>
          
          <Link to="/scan-message" className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <MessageSquare className="w-5 h-5 transition-transform group-hover:-rotate-12 text-slate-400 group-hover:text-white" />
            <span>Scan Message</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
