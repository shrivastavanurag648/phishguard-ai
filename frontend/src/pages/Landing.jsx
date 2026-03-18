import React from 'react';
import { Link } from 'react-router-dom';
import { Link2, MessageSquare, ShieldCheck, Lock, Zap } from 'lucide-react';

const Landing = () => {
  return (
    <div className="flex-grow bg-transparent text-white flex flex-col w-full relative z-0">
      {/* Static Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[24rem] h-[24rem] bg-indigo-500/30 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-3/4 right-1/4 w-[24rem] h-[24rem] bg-purple-500/30 rounded-full blur-[90px] translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex flex-col items-center bg-[#0b1021]/50 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 mb-10 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
              <span className="italic">PhishGuard</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AI</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 mb-8">
              Intelligent Defense Against Digital Deception
            </p>

            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
            
            <p className="text-slate-400 font-semibold tracking-wide text-base md:text-lg">
              Check if a link or message is a phishing threat
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              to="/scan-url" 
              className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-indigo-500/20 hover:bg-indigo-500/30 backdrop-blur-xl backdrop-saturate-150 border border-indigo-500/30 text-white text-lg font-bold rounded-full transition-all shadow-xl hover:shadow-indigo-500/20"
            >
              <Link2 className="w-5 h-5 text-indigo-300" />
              Scan URL
            </Link>
            
            <Link 
              to="/scan-message" 
              className="group flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-purple-500/20 hover:bg-purple-500/30 backdrop-blur-xl backdrop-saturate-150 border border-purple-500/30 text-white text-lg font-bold rounded-full transition-all shadow-xl hover:shadow-purple-500/20"
            >
              <MessageSquare className="w-5 h-5 text-purple-300" />
              Scan Message
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-semibold text-slate-300/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span>Real-time AI Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-400" />
              <span>Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-400" />
              <span>Instant Threat Detection</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Using PhishGuard AI is subject to the <Link to="/terms" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">terms of use</Link>.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24 px-4 bg-transparent flex flex-col items-center justify-center relative z-10 mt-12 md:mt-24">
        <div className="w-full max-w-5xl mx-auto z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle glowing accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            <div className="text-center mb-10">
              <div className="inline-block bg-[#0b1021]/50 backdrop-blur-xl rounded-[2.5rem] px-8 py-6 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">Global Phishing Landscape</h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Over 3.4 billion malicious emails and countless malicious links are sent daily worldwide. Let's break down the threat vectors.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Divider line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent transform -translate-x-1/2"></div>
              
              <div className="flex flex-col items-center justify-center p-8 bg-black/20 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors shadow-inner">
                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-indigo-600 mb-6 drop-shadow-lg tracking-tighter">68%</span>
                <h3 className="text-xl font-bold text-white mb-2">URL Phishing</h3>
                <p className="text-slate-400 text-center text-sm leading-relaxed">
                  Fraudulent links disguised as legitimate websites, aimed at tricking victims into handing over credentials.
                </p>
              </div>
              
              <div className="flex flex-col items-center justify-center p-8 bg-black/20 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors shadow-inner">
                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-600 mb-6 drop-shadow-lg tracking-tighter">32%</span>
                <h3 className="text-xl font-bold text-white mb-2">Message Phishing</h3>
                <p className="text-slate-400 text-center text-sm leading-relaxed">
                  SMS, direct messages, and text-based spear phishing containing deceptive language to manipulate intent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
