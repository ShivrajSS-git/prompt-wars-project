import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import VoterChecklist from './components/VoterChecklist';
import AssistantChat from './components/AssistantChat';
import BoothFinder from './components/BoothFinder';

/**
 * Main Application Component
 * Handles navigation between home, process, and checklist pages.
 * @returns {JSX.Element} The rendered application
 */
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  /**
   * Renders the current page based on state
   * @returns {JSX.Element} The page component
   */
  const renderPage = () => {
    switch(currentPage) {
      case 'process':
        return (
          <div className="pt-24 animate-fade-in">
            <Timeline />
          </div>
        );
      case 'checklist':
        return (
          <div className="pt-24 animate-fade-in">
            <VoterChecklist />
          </div>
        );
      case 'booth':
        return (
          <div className="pt-24 animate-fade-in">
            <BoothFinder />
          </div>
        );
      case 'home':
      default:
        return (
          <div className="animate-fade-in">
            <Hero setCurrentPage={setCurrentPage} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-body">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:bg-saffron-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-black focus:uppercase focus:tracking-widest"
      >
        Skip to Content
      </a>
      
      <Navbar 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      
      <main id="main-content" className="min-h-[80vh]">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="container py-12 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Election Assistant. Empowering Democracy through Education.
        </p>
      </footer>

      {/* Floating Assistant */}
      <AssistantChat />
    </div>
  );
}

export default App;
