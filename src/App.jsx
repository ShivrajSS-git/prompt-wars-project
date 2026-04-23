import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import VoterChecklist from './components/VoterChecklist';
import AssistantChat from './components/AssistantChat';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="bg-blur top-[-10%] left-[-10%]" />
      <div className="bg-blur bottom-[-10%] right-[-10%] opacity-50" />
      
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      <main className="min-h-[80vh]">
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
