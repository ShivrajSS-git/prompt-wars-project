import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="container py-20 text-center relative">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-saffron-500/10 border border-saffron-500/20 px-4 py-2 rounded-full text-saffron-500 text-sm font-medium mb-8">
          <ShieldCheck size={16} />
          <span>Guide to the World's Largest Democracy</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Master the Indian <br /> Election Process
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Navigate the complexities of voter registration, EVMs, and polling day with our 
          interactive assistant. Empowering every citizen to exercise their franchise.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setCurrentPage('process')}
            className="primary flex items-center gap-2 text-lg px-8 py-3"
          >
            Start Your Journey
            <ChevronRight size={20} />
          </button>
          <button 
            onClick={() => setCurrentPage('checklist')}
            className="secondary text-lg px-8 py-3"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        section {
          padding: 6rem 2rem;
          text-align: center;
        }
        h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(to bottom right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 40rem;
          margin: 0 auto 3rem;
        }
        .cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 9999px;
          color: var(--accent-indigo);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Hero;
