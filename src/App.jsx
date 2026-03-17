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
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  const [displayHash, setDisplayHash] = useState(window.location.hash || '#home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      if (newHash !== currentHash && !isTransitioning) {
        setIsTransitioning(true);
        setCurrentHash(newHash);

        // Outgoing Animation
        gsap.to(pageRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.25,
          ease: 'power2.inOut',
          onComplete: () => {
            setDisplayHash(newHash);
            window.scrollTo(0, 0);

            // Setup Incoming Animation state
            gsap.set(pageRef.current, { opacity: 0, y: 20 });

            // Play Incoming Animation
            gsap.to(pageRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: 'power3.out',
              onComplete: () => setIsTransitioning(false)
            });
          }
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial hash if not #home
    if (window.location.hash && window.location.hash !== '#home' && displayHash === '#home') {
      setDisplayHash(window.location.hash);
      setCurrentHash(window.location.hash);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentHash, isTransitioning, displayHash]);

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
    <div className="flex flex-col min-h-screen items-center justify-center p-4 md:p-8 w-full relative">
      <div className="w-full max-w-[1600px] bg-white rounded-[32px] md:rounded-[48px] shadow-2xl flex flex-col flex-grow overflow-hidden relative border border-black/5">
        <div className="px-6 md:px-12 pt-6 md:pt-10 z-50">
          <Navbar activeHash={displayHash} />
        </div>
        <main ref={pageRef} className="flex-grow w-full px-4 md:px-12 pb-12 z-10">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
