/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MinistriesSection from './components/MinistriesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ConnectSection from './components/ConnectSection';
import PartnerSection from './components/PartnerSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DevotionalModal from './components/DevotionalModal';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showDevotionalModal, setShowDevotionalModal] = useState(false);

  useEffect(() => {
    // Apply dark mode class to documentElement
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Show devotional modal on first visit in session
    const hasSeenDevotional = sessionStorage.getItem('hasSeenDevotionalModal');
    if (!hasSeenDevotional) {
      const timer = setTimeout(() => {
        setShowDevotionalModal(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseDevotional = () => {
    setShowDevotionalModal(false);
    sessionStorage.setItem('hasSeenDevotionalModal', 'true');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <MinistriesSection />
        <GallerySection />
        <TestimonialsSection />
        <ConnectSection />
        <PartnerSection />
        <ContactSection />
      </main>

      <Footer />

      {showDevotionalModal && <DevotionalModal onClose={handleCloseDevotional} />}
    </div>
  );
};

export default App;