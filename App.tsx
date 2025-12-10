
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import MinistriesSection from './components/MinistriesSection';
import MinistriesPage from './components/MinistriesPage';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ConnectSection from './components/ConnectSection';
import PartnerSection from './components/PartnerSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DevotionalModal from './components/DevotionalModal';

export type Page = 'home' | 'about' | 'ministries';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showDevotionalModal, setShowDevotionalModal] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

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

  const handleNavigate = (page: Page, sectionId?: string) => {
    setCurrentPage(page);
    // Allow time for render before scrolling
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <VideoSection />
            <MinistriesSection onNavigate={handleNavigate} />
            <GallerySection />
            <TestimonialsSection />
            <ConnectSection />
            <PartnerSection />
            <ContactSection />
          </>
        );
      case 'about':
        return (
          <>
            <AboutSection />
            <VideoSection />
            <PartnerSection />
            <ContactSection />
          </>
        );
      case 'ministries':
        return (
          <>
            <MinistriesPage />
            <ConnectSection />
            <PartnerSection />
            <ContactSection />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300 flex flex-col">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <main className="relative z-10 flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {showDevotionalModal && <DevotionalModal onClose={handleCloseDevotional} />}
    </div>
  );
};

export default App;