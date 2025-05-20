
import React from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import SocialLinks from '@/components/SocialLinks';
import { ArrowLeft } from 'lucide-react';

const ForDevelopers = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="text-xl md:text-2xl text-white mb-10 font-mono">
        snips.dev &lt;for-developers&gt;
      </div>
      
      <div className="w-full max-w-3xl border border-snips-border rounded-lg shadow-lg mb-8">
        <BrowserHeader />
        <div className="flex flex-col items-center justify-start py-12 px-6 bg-snips-dark">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mono mb-6">
            For Developers
          </h1>
          
          <div className="text-left w-full space-y-6 text-snips-muted">
            <p>
              As a developer, snips.dev offers you a powerful platform to showcase your code snippets, connect with other developers, and build a professional portfolio that highlights your expertise.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Features for Developers</h2>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Code Snippet Sharing</span>
                <span className="text-sm">Share snippets with syntax highlighting for all major programming languages</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Version Control Integration</span>
                <span className="text-sm">Connect with GitHub repositories and gists</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Live Collaboration</span>
                <span className="text-sm">Real-time collaboration with other developers</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">IDE Extensions</span>
                <span className="text-sm">Share directly from your favorite code editor</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">AI-Powered Recommendations</span>
                <span className="text-sm">Get suggestions for optimizing your code</span>
              </li>
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
      
      <SocialLinks />
    </div>
  );
};

export default ForDevelopers;
