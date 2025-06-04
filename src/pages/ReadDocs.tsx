import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import { ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const ReadDocs = () => {
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
          snips.dev &lt;docs&gt;
        </div>
        
        <div className="w-full max-w-3xl border border-snips-border rounded-lg shadow-lg mb-8">
          <BrowserHeader />
          <div className="flex flex-col items-center justify-start py-12 px-6 bg-snips-dark">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-mono mb-6">
              Documentation
            </h1>
            
            <div className="text-left w-full space-y-6 text-snips-muted">
              <p>
                Welcome to the snips.dev documentation. Here you'll find everything you need to know about using our platform, from creating your first snip to advanced integrations.
              </p>
              
              <div className="bg-snips-card p-6 rounded-lg border border-snips-border mt-6">
                <h2 className="text-xl font-mono text-white mb-4">Coming Soon!</h2>
                <p className="text-sm">
                  Our comprehensive documentation is being developed and will be available when snips.dev officially launches. Join the waitlist to stay updated!
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Documentation Sections</h2>
              <ul className="space-y-2">
                <li>Getting Started</li>
                <li>Account Management</li>
                <li>Creating Snips</li>
                <li>Sharing & Collaboration</li>
                <li>Integration with Tools</li>
                <li>API Documentation</li>
                <li>Best Practices</li>
                <li>Troubleshooting</li>
              </ul>

              <div className="flex justify-center mt-10">
                <Link to="/waitlist" className="bg-snips-border hover:bg-snips-border/80 px-6 py-3 rounded-md text-white transition-all duration-200">
                  Join the Waitlist
                </Link>
              </div>
            </div>
            
            <Link to="/" className="flex items-center gap-2 text-snips-muted hover:text-white mt-12 transition-colors duration-200">
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

export default ReadDocs;
