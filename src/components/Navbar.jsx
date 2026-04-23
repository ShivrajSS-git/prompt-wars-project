import React from 'react';
import { Vote } from 'lucide-react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  return (
    <nav className="glass sticky top-4 z-50 mx-4 my-4 flex items-center justify-between px-8 py-4 backdrop-blur-md">
      <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer">
        <div className="bg-saffron-500/20 p-2 rounded-lg">
          <Vote className="text-saffron-400" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          India<span className="text-saffron-400">Elect</span>
        </span>
      </button>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <button 
          onClick={() => setCurrentPage('process')} 
          className={`transition-colors bg-transparent border-none p-0 font-medium ${currentPage === 'process' ? 'text-saffron-400' : 'hover:text-saffron-400'}`}
        >Process</button>
        <button 
          onClick={() => setCurrentPage('checklist')} 
          className={`transition-colors bg-transparent border-none p-0 font-medium ${currentPage === 'checklist' ? 'text-saffron-400' : 'hover:text-saffron-400'}`}
        >Checklist</button>
        <button onClick={() => document.getElementById('assistant-chat-trigger').click()} className="hover:text-saffron-400 transition-colors bg-transparent border-none p-0 font-medium">Assistant</button>
      </div>

      <button 
        onClick={() => setCurrentPage('checklist')}
        className="primary px-5 py-2 text-sm"
      >
        Check Voter ID
      </button>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1rem 2rem;
          padding: 1rem 2rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--accent-indigo);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
