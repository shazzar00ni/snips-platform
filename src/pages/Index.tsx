
import React from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import CardButton from '@/components/CardButton';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="text-xl md:text-2xl text-white mb-10 font-mono">
        snips.dev &lt;docs&gt;
      </div>

      {/* Browser window with logo */}
      <div className="w-full max-w-2xl border border-snips-border rounded-lg shadow-lg mb-16">
        <BrowserHeader />
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-snips-dark">
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
      
      <SocialLinks className="mt-16" />
    </div>
  );
};

export default Index;
