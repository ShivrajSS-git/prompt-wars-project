import React from 'react';
import { MapPin, Search, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const BoothFinder = () => {
  return (
    <section id="booth-finder" className="container py-24" aria-labelledby="maps-heading">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <MapPin size={12} />
            <span>Google Maps Integration</span>
          </div>
          <h2 id="maps-heading" className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8">
            Find Your <br /> <span className="text-blue-600">Polling Booth.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10">
            Locate your designated polling station with precision using Google Maps. 
            Simply enter your EPIC number or area code on the official portal to see your location.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              "Real-time GPS navigation",
              "Accessible booth information",
              "Official ECI verified locations"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                {feature}
              </div>
            ))}
          </div>

          <a 
            href="https://electorallookup.eci.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20"
          >
            Open Official Locator <ExternalLink size={16} />
          </a>
        </div>

        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass p-4 md:p-8 relative overflow-hidden"
          >
            <div className="aspect-video w-full rounded-[24px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner bg-slate-100 dark:bg-slate-900">
              <iframe
                title="Election Commission of India - Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=DUMMY_MAPS_KEY&q=Election+Commission+of+India,New+Delhi"
                allowFullScreen
                aria-label="Google Maps showing Election Commission of India"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 pointer-events-none">
                 <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-6 py-3 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3">
                    <Search className="text-blue-600" size={20} />
                    <span className="text-sm font-black uppercase tracking-widest">Interactive Map Ready</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoothFinder;
