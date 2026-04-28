import React from 'react';
import { Vote, Sun, Moon } from 'lucide-react';

const Navbar = ({ setCurrentPage, currentPage, darkMode, setDarkMode }) => {
  return (
    <nav 
      className="glass sticky top-4 z-50 mx-4 my-4 flex items-center justify-between px-8 py-4 backdrop-blur-md"
      aria-label="Main Navigation"
    >
      <button 
        onClick={() => setCurrentPage('home')} 
        className="flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer"
        aria-label="Home"
      >
        <div className="bg-saffron-500/10 p-2 rounded-lg" aria-hidden="true">
          <Vote className="text-saffron-600" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          India<span className="text-saffron-600">Elect</span>
        </span>
      </button>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600" role="menubar">
        <button 
          onClick={() => setCurrentPage('process')} 
          className={`transition-colors bg-transparent border-none p-0 font-bold ${currentPage === 'process' ? 'text-saffron-600' : 'hover:text-saffron-600'}`}
          aria-label="Election Process Guide"
          role="menuitem"
        >Process</button>
        <button 
          onClick={() => setCurrentPage('checklist')} 
          className={`transition-colors bg-transparent border-none p-0 font-bold ${currentPage === 'checklist' ? 'text-saffron-600' : 'hover:text-saffron-600'}`}
          aria-label="Voter Checklist"
          role="menuitem"
        >Checklist</button>
        <button 
          onClick={() => setCurrentPage('booth')} 
          className={`transition-colors bg-transparent border-none p-0 font-bold ${currentPage === 'booth' ? 'text-saffron-600' : 'hover:text-saffron-600'}`}
          aria-label="Find Polling Booth"
          role="menuitem"
        >Find Booth</button>
        <button 
          onClick={() => document.getElementById('assistant-chat-trigger').click()} 
          className="hover:text-saffron-600 transition-colors bg-transparent border-none p-0 font-bold"
          aria-label="Open Election Assistant"
          role="menuitem"
        >Assistant</button>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
          aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button 
          onClick={() => setCurrentPage('checklist')}
          className="primary px-6 py-2.5 text-sm"
          aria-label="Check Voter ID Status"
        >
          Check Voter ID
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
