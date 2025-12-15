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

  // SEO Dynamics
  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      home: 'Kachi Emmanuel Ministries | Ministering Through Creativity',
      about: 'Our Story | Kachi Emmanuel Ministries',
      ministries: 'Our Ministries | Kachi Emmanuel Ministries',
      partner: 'Support the Mission | Kachi Emmanuel Ministries',
      devotionals: 'Daily Devotionals | Kachi Emmanuel Ministries',
    };

    const pageDescriptions: Record<Page, string> = {
      home: 'Spreading the Gospel through innovative media, powerful teachings, and transformative outreach programs.',
      about: 'Learn about Kachi Emmanuel and the vision behind the ministry that is transforming lives worldwide.',
      ministries: 'Explore our various ministry arms including Believers Perspective, Spirit and Stature, and more.',
      partner: 'Join our mission. Partner with Kachi Emmanuel Ministries to reach souls and impact communities.',
      devotionals: 'Start your day with spiritual nourishment. Read our latest faith-filled daily devotionals.',
    };

    document.title = pageTitles[currentPage];
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescriptions[currentPage]);
    }
  }, [currentPage]);

  const handleCloseDevotional = () => {
    setShowDevotionalModal(false);
    sessionStorage.setItem('hasSeenDevotionalModal', 'true');
  };

  const handleNavigate = (page: Page, sectionId?: string) => {
    const isReturningToDevotionals = page === 'devotionals' && currentPage !== 'devotionals';
    
    // Smooth scroll to top when changing actual pages
    if (page !== currentPage && !sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
      } else if (!isReturningToDevotionals && page !== currentPage) {
        // Fallback for immediate scroll if needed
        window.scrollTo({ top: 0, behavior: 'auto' });
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
    <div className="min-h-screen transition-colors duration-300 flex flex-col bg-black text-white selection:bg-[#fae78e] selection:text-[#280c2d]">
      <Navbar 
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      {/* 
        Keying the container with currentPage forces a re-mount on navigation,
        triggering the CSS 'animate-page-enter' transition.
      */}
      <main className="relative z-10 flex-grow overflow-hidden">
        <div key={currentPage} className="animate-page-enter">
          {renderContent()}
        </div>
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