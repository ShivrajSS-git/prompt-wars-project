import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const initialItems = [
  { id: 1, text: "Check name in the Electoral Roll (voters.eci.gov.in)", completed: false },
  { id: 2, text: "Submit Form 6 if not registered", completed: false },
  { id: 3, text: "Keep EPIC (Voter ID) or Aadhar card ready", completed: false },
  { id: 4, text: "Locate your assigned Polling Booth", completed: false },
  { id: 5, text: "Read candidate manifestos and backgrounds", completed: false },
  { id: 6, text: "Understand how EVM and VVPAT work", completed: false },
  { id: 7, text: "Cast your vote on Polling Day", completed: false },
];

const VoterChecklist = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('indianVoterChecklist');
    return saved ? JSON.parse(saved) : initialItems;
  });

  useEffect(() => {
    localStorage.setItem('indianVoterChecklist', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const progress = Math.round((items.filter(i => i.completed).length / items.length) * 100);

  return (
    <section id="checklist" className="container py-20 relative">
      <div className="glass p-8 md:p-12 max-w-3xl mx-auto border-indigo-500/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Voter Readiness Checklist</h2>
            <p className="text-slate-400">Track your preparation for the upcoming election.</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-saffron-400">{progress}%</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-800 rounded-full mb-10 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-green-500 to-saffron-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left card-hover ${
                item.completed 
                  ? 'bg-saffron-500/10 border-saffron-500/30 text-slate-400' 
                  : 'bg-slate-800/40 border-slate-700/50 hover:border-saffron-500/50 text-white'
              }`}
            >
              {item.completed ? (
                <CheckCircle2 className="text-saffron-500 shrink-0" size={24} />
              ) : (
                <Circle className="text-slate-600 shrink-0" size={24} />
              )}
              <span className={item.completed ? 'line-through' : ''}>
                {item.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        section {
          padding: 5rem 0;
        }
        .progress-bar {
          height: 0.5rem;
          background: var(--secondary-bg);
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-indigo), #818cf8);
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default VoterChecklist;
