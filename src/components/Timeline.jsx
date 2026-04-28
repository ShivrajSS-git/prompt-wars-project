import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { electionStages } from '../data/electionData';

const Timeline = () => {
  const [activeStage, setActiveStage] = useState(electionStages[0]);

  return (
    <section id="timeline" className="container py-20" aria-labelledby="timeline-heading">
      <div className="text-center mb-16">
        <h2 id="timeline-heading" className="text-3xl font-bold mb-4">Election Process Timeline</h2>
        <p className="text-slate-400">Step-by-step through the democratic process</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Timeline Navigation */}
        <div className="lg:col-span-4 flex flex-col gap-4 relative" role="tablist" aria-label="Election Stages">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-800 -z-10" aria-hidden="true" />
          
          {electionStages.map((stage) => {
            const Icon = Icons[stage.icon];
            const isActive = activeStage.id === stage.id;
            
            return (
              <button
                key={stage.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`stage-panel-${stage.id}`}
                id={`stage-tab-${stage.id}`}
                onClick={() => setActiveStage(stage)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all text-left ${
                  isActive 
                    ? 'glass' 
                    : 'hover:bg-slate-800/50'
                }`}
                style={isActive ? { borderColor: `${stage.color}80`, backgroundColor: `${stage.color}15` } : {}}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                  isActive 
                    ? 'text-white' 
                    : 'border-slate-700 bg-slate-900 text-slate-500'
                }`}
                style={isActive ? { borderColor: stage.color, backgroundColor: stage.color } : {}}
                aria-hidden="true"
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {stage.title}
                  </h3>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Stage {stage.id}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Detail Card */}
        <div className="lg:col-span-8 sticky top-24">
          <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                id={`stage-panel-${activeStage.id}`}
                role="tabpanel"
                aria-labelledby={`stage-tab-${activeStage.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 md:p-12 min-h-[400px]"
                style={{ borderColor: `${activeStage.color}40`, boxShadow: `0 0 50px -12px ${activeStage.color}40` }}
              >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                style={{ backgroundColor: `${activeStage.color}20`, border: `1px solid ${activeStage.color}40` }}
                aria-hidden="true"
              >
                {(() => {
                  const Icon = Icons[activeStage.icon];
                  return <Icon size={32} style={{ color: activeStage.color }} />;
                })()}
              </div>

              <h3 className="text-3xl font-bold mb-4">{activeStage.title}</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {activeStage.description}
              </p>

              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Icons.Lightbulb className="text-amber-400" size={18} aria-hidden="true" />
                  Key Tips & Best Practices
                </h4>
                <ul className="space-y-3">
                  {activeStage.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeStage.color }} aria-hidden="true" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
    </section>
  );
};

export default Timeline;
