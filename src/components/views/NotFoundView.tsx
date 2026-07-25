import React from 'react';
import { AlertCircle, Home } from 'lucide-react';

export const NotFoundView: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#060B26] text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto shadow-2xl animate-pulse">
          <AlertCircle className="w-10 h-10 text-amber-400" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
            ERROR 404 • ROUTE UNRESOLVED
          </span>
          <h1 className="text-4xl font-extrabold font-heading text-white">
            Lost in <span className="gradient-text-gold-luxury">Digital Space?</span>
          </h1>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            The endpoint or resource you requested could not be located on the BalajiOne server node.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/20 text-xs font-mono text-slate-400 text-left space-y-1">
          <div><strong className="text-white">Status:</strong> 404 Not Found</div>
          <div><strong className="text-white">Gateway:</strong> balajione-node-in-east</div>
          <div><strong className="text-white">Action:</strong> Return to primary mission control</div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Home className="w-4 h-4 fill-slate-950" />
          <span>Return to BalajiOne Homepage</span>
        </button>
      </div>
    </div>
  );
};
