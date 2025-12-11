
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MinistriesSection from './components/MinistriesSection';
import MinistriesPage from './components/MinistriesPage';
import PartnerPage from './components/PartnerPage';
import DevotionalsPage from './components/DevotionalsPage';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ConnectSection from './components/ConnectSection';
import PartnerSection from './components/PartnerSection';
import ContactSection from './components/ContactSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import DevotionalModal from './components/DevotionalModal';
import { Heart } from 'lucide-react';

export type Page = 'home' | 'about' | 'ministries' | 'partner' | 'devotionals';

const App: React.FC = () => {
  const [showDevotionalModal, setShowDevotionalModal] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Force dark mode as it's the ministry's primary aesthetic
    document.documentElement.classList.add('dark');
    
    const hasSeenDevotional = sessionStorage.getItem('hasSeenDevotionalModal');
    if (!hasSeenDevotional) {
      const timer = setTimeout(() => {
        setShowDevotionalModal(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseDevotional = () => {
    setShowDevotionalModal(false);
    sessionStorage.setItem('hasSeenDevotionalModal', 'true');
  };

  const handleNavigate = (page: Page, sectionId?: string) => {
    setCurrentPage(page);
    setShowDevotionalModal(false); // Close modal if navigating from it
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
            <AboutSection isSimple={true} onNavigate={handleNavigate} />
            <VideoSection />
            <MinistriesSection onNavigate={handleNavigate} />
            <GallerySection />
            <TestimonialsSection />
            <ConnectSection />
            <PartnerSection onNavigate={handleNavigate} />
            <ContactSection />
          </>
        );
      case 'about':
        return <AboutSection isSimple={false} />;
      case 'ministries':
        return <MinistriesPage />;
      case 'partner':
        return <PartnerPage onNavigate={handleNavigate} />;
      case 'devotionals':
        return <DevotionalsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 flex flex-col bg-black text-white">
      <Navbar 
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <main className="relative z-10 flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {showDevotionalModal && <DevotionalModal onClose={handleCloseDevotional} onNavigate={handleNavigate} />}

      <button 
        onClick={() => handleNavigate('partner')}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-[#fae78e] text-[#280c2d] font-bold rounded-full shadow-lg hover:scale-110 transition-all duration-300 transform group focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label="Support Us"
      >
        <Heart className="w-5 h-5 fill-current text-[#280c2d] group-hover:scale-110 transition-transform" />
        <span className="text-sm">Support Us</span>
      </button>
    </div>
  );
};

export default App;
