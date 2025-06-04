import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import WaitlistForm from '@/components/WaitlistForm';
import { ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Waitlist = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  // Placeholder for future background image
  useEffect(() => {
    // Uncomment and set image path to enable lazy background
    // const observer = new window.IntersectionObserver((entries) => {
    //   if (entries[0].isIntersecting) {
    //     const img = new window.Image();
    //     img.src = '/path/to/background.png';
    //     img.onload = () => setBgLoaded(true);
    //     observer.disconnect();
    //   }
    // }, { rootMargin: '200px' });
    // if (bgRef.current) observer.observe(bgRef.current);
    // return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div
        ref={bgRef}
        className="flex-grow flex flex-col items-center justify-center px-4 py-10 mt-12 mb-6 relative"
        style={{
          background: 'linear-gradient(120deg, #171717 60%, #23272f 100%)',
          // ...(bgLoaded && { backgroundImage: "url('/path/to/background.png')", ... })
        }}
      >
        <div className="text-xl md:text-2xl text-white mb-10 font-mono">
          snips.dev &lt;waitlist&gt;
        </div>
        
        <div className="w-full max-w-2xl border border-snips-border rounded-lg shadow-lg mb-8">
          <BrowserHeader />
          <div className="flex flex-col items-center justify-center py-12 px-6 bg-snips-dark">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              Join the waitlist
            </h1>
            <p className="text-snips-muted text-center mb-8 max-w-md">
              Be the first to know when snips.dev launches. Sign up for exclusive early access and updates.
            </p>
            
            <WaitlistForm />
            
            <Link to="/" className="flex items-center gap-2 text-snips-muted hover:text-white mt-8 transition-colors duration-200">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Waitlist;
