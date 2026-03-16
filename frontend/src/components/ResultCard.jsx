import React from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';

const ResultCard = ({ score, threatType, explanation }) => {
  let bgColor = 'bg-gray-100';
  let borderColor = 'border-gray-200';
  let textColor = 'text-gray-900';
  let Icon = ShieldCheck;
  let iconColor = 'text-gray-500';
  let headerText = 'Scan Result';

  // Score logic (Assumption: 0-100, >66 equals high risk, >33 equals medium)
  const isHighRisk = score >= 66 || threatType?.toLowerCase().includes('phishing') || threatType?.toLowerCase().includes('malicious');
  const isMediumRisk = (score >= 33 && score < 66) || threatType?.toLowerCase().includes('suspicious');

  if (isHighRisk) {
    bgColor = 'bg-red-50';
    borderColor = 'border-red-200';
    textColor = 'text-red-900';
    Icon = ShieldAlert;
    iconColor = 'text-red-600';
    headerText = 'High Risk Detected';
  } else if (isMediumRisk) {
    bgColor = 'bg-yellow-50';
    borderColor = 'border-yellow-200';
    textColor = 'text-yellow-900';
    Icon = AlertTriangle;
    iconColor = 'text-yellow-600';
    headerText = 'Suspicious Activity';
  } else {
    bgColor = 'bg-green-50';
    borderColor = 'border-green-200';
    textColor = 'text-green-900';
    iconColor = 'text-green-500';
    headerText = 'Safe to Proceed';
  }

  return (
    <div className={`mt-8 p-6 md:p-8 rounded-2xl border backdrop-blur-sm ${bgColor} ${borderColor} transition-all duration-500 shadow-lg hover:shadow-xl max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4`}>
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        <div className={`p-4 rounded-full bg-white shadow-md flex-shrink-0 mx-auto md:mx-0 ${iconColor}`}>
          <Icon className="w-10 h-10" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className={`text-2xl font-black tracking-tight mb-2 ${textColor}`}>
            {headerText}
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white/50 rounded-xl p-3 border border-white/40">
              <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Risk Score</span>
              <span className={`text-2xl font-bold ${textColor}`}>{score}<span className="text-sm text-gray-500">/100</span></span>
            </div>
            <div className="bg-white/50 rounded-xl p-3 border border-white/40">
              <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Threat Type</span>
              <span className={`text-lg font-bold ${textColor} truncate block`} title={threatType}>{threatType || 'Safe'}</span>
            </div>
          </div>
          {explanation && (
            <div className="text-gray-700 text-sm leading-relaxed text-left bg-white/70 p-5 rounded-xl border border-white/50 shadow-inner">
              <span className="block font-semibold mb-1 text-gray-900">Analysis:</span>
              {explanation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
