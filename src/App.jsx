import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  const [displayHash, setDisplayHash] = useState(window.location.hash || '#home');
  const pageRef = useRef(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      gsap.killTweensOf(pageRef.current);

      gsap.to(pageRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setDisplayHash(newHash);
          window.scrollTo(0, 0);
          gsap.set(pageRef.current, { opacity: 0, y: 12 });
          gsap.to(pageRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.28,
            ease: 'power3.out',
            onComplete: () => { isTransitioning.current = false; }
          });
        }
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (displayHash) {
      case '#products':
        return <Products />;
      case '#about':
        return <About />;
      case '#contacts':
        return <Contacts />;
      case '#home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-0 md:p-4 lg:p-8 w-full relative">
      <div className="w-full max-w-[1600px] bg-white rounded-none md:rounded-[32px] lg:rounded-[48px] shadow-none md:shadow-2xl flex flex-col flex-grow overflow-hidden relative border-0 md:border md:border-black/5">
        <div className="md:px-12 md:pt-10 z-50">
          <Navbar activeHash={displayHash} />
        </div>
        <main ref={pageRef} className="flex-grow w-full px-3 sm:px-4 md:px-12 pb-0 z-10 pt-20 md:pt-0">
          {renderPage()}
        </main>
        <Footer activeHash={displayHash} />
      </div>
    </div>
  );
}

export default App;
