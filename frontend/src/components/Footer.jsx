import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b1021] border-t border-slate-800 py-6 text-slate-400 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="w-6 h-6 text-indigo-500" />
            <span className="font-bold text-slate-300">
              <span className="italic text-white">PhishGuard</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AI</span>
            </span>
          </div>
          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="italic text-white">PhishGuard</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 font-bold">AI</span>. Created by <span className="text-indigo-400 font-semibold">SlixCrew</span>. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="font-semibold text-slate-400">Connect with us:</span>
            <a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
