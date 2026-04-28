import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Vote, Users, Target, CheckCircle2 } from 'lucide-react';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="container py-24 min-h-[80vh] flex flex-col justify-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-left"
        >
          <div 
            className="inline-flex items-center gap-2 bg-saffron-500/10 border border-saffron-500/20 px-6 py-2 rounded-full text-saffron-600 dark:text-saffron-400 text-xs font-black uppercase tracking-widest mb-10"
            role="status"
          >
            <ShieldCheck size={14} aria-hidden="true" />
            <span>2024 General Elections Portal</span>
          </div>
          
          <h1 id="hero-heading" className="text-7xl md:text-[7rem] font-black mb-10 tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
            Democracy <br /> <span className="text-saffron-600">Reimagined.</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-12 font-medium leading-relaxed">
            Your digital gateway to the world's largest democratic exercise. 
            Navigating the Indian electoral process has never been this elegant.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={() => setCurrentPage('process')}
              className="primary w-full sm:w-auto"
              aria-label="Begin Guide"
            >
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </button>
            <button 
              onClick={() => setCurrentPage('checklist')}
              className="secondary w-full sm:w-auto"
              aria-label="View Voter Checklist"
            >
              Verify Voter Status
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Card */}
          <div className="glass p-12 relative z-10 border border-white/20 dark:border-white/5 animate-float shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-saffron-600 flex items-center justify-center text-white shadow-xl shadow-saffron-600/20">
                <Vote size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Electoral Command</h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Phase: Preparation</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Voter Turnout Target', val: '70%+', color: 'bg-blue-600', icon: Target },
                { label: 'New Registrations', val: '1.2M+', color: 'bg-green-600', icon: Users },
                { label: 'Booth Verification', val: '98%', color: 'bg-saffron-600', icon: CheckCircle2 }
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex justify-between items-center group hover:border-saffron-500/50 transition-all cursor-default">
                  <div className="flex items-center gap-3">
                    <stat.icon size={18} className="text-slate-400 group-hover:text-saffron-600" />
                    <span className="font-bold text-slate-600 dark:text-slate-400">{stat.label}</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black text-white ${stat.color} shadow-lg`}>{stat.val}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-black text-slate-600">
                    ID{i}
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Updates: On</p>
            </div>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-saffron-600/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
