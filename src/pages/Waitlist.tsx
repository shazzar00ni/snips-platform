
import React from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import WaitlistForm from '@/components/WaitlistForm';
import SocialLinks from '@/components/SocialLinks';
import { ArrowLeft } from 'lucide-react';

const Waitlist = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
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
      
      <SocialLinks />
    </div>
  );
};

export default Waitlist;
