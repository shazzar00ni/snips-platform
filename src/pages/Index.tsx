
import React from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import CardButton from '@/components/CardButton';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div 
        className="flex-grow flex flex-col items-center justify-center px-4 py-10 mt-12 mb-6 relative"
        style={{
          backgroundImage: "url('/lovable-uploads/60c63afe-0785-46d9-8dda-8a0347bd8836.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-snips-dark/90 backdrop-blur-sm"></div>
        
        {/* Content on top of background */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <div className="text-xl md:text-2xl text-white mb-10 font-mono">
            snips.dev &lt;home&gt;
          </div>

          {/* Browser window with logo */}
          <div className="w-full max-w-2xl border border-snips-border rounded-lg shadow-lg mb-16 bg-snips-dark/70 backdrop-blur-md">
            <BrowserHeader />
            <div className="flex flex-col items-center justify-center py-16 px-4 bg-snips-dark/90">
              <div className="text-4xl md:text-6xl font-bold text-white font-mono mb-2 animate-float">
                &lt;snips.dev/&gt;
              </div>
              <div className="text-lg text-snips-muted font-mono">
                snip. share. build. showcase.
              </div>
              <Link 
                to="/waitlist" 
                className="mt-8 px-6 py-3 bg-snips-border text-white rounded-md hover:bg-snips-border/80 transition-colors duration-200"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            <Link to="/about" className="transform hover:-translate-y-1 transition-transform duration-300">
              <CardButton>
                About snips.dev
              </CardButton>
            </Link>
            <Link to="/create-snip" className="transform hover:-translate-y-1 transition-transform duration-300">
              <CardButton>
                Create your first snip
              </CardButton>
            </Link>
            <Link to="/docs" className="transform hover:-translate-y-1 transition-transform duration-300">
              <CardButton>
                Read the Docs
              </CardButton>
            </Link>
            <Link to="/for-developers" className="transform hover:-translate-y-1 transition-transform duration-300">
              <CardButton>
                For Developers
              </CardButton>
            </Link>
            <Link to="/for-designers" className="transform hover:-translate-y-1 transition-transform duration-300">
              <CardButton>
                For Designers
              </CardButton>
            </Link>
            <Link to="/contact" className="transform hover:-translate-y-1 transition-transform duration-300">
              <CardButton>
                Contact Us
              </CardButton>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
