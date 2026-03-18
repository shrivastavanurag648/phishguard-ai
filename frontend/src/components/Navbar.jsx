import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
      <nav className="bg-[#0b1021]/60 backdrop-blur-xl backdrop-saturate-150 border border-white/5 text-slate-200 rounded-2xl shadow-2xl shadow-black/50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 group">
                <Shield className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
                <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-slate-200 transition-colors">
                  <span className="italic">PhishGuard</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AI</span>
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    location.pathname === '/' 
                      ? 'bg-slate-800 text-white' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/scan-url"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    location.pathname === '/scan-url' 
                      ? 'bg-slate-800 text-white' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  Scan URL
                </Link>
                <Link
                  to="/scan-message"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    location.pathname === '/scan-message' 
                      ? 'bg-slate-800 text-white' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  Scan Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
