
import React from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import { ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CreateSnip = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-10 mt-12 mb-6">
        <div className="text-xl md:text-2xl text-white mb-10 font-mono">
          snips.dev &lt;create-snip&gt;
        </div>
        
        <div className="w-full max-w-3xl border border-snips-border rounded-lg shadow-lg mb-8">
          <BrowserHeader />
          <div className="flex flex-col items-center justify-start py-12 px-6 bg-snips-dark">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-mono mb-6">
              Create your first snip
            </h1>
            
            <div className="text-left w-full space-y-6 text-snips-muted">
              <p>
                Creating your first snip on snips.dev is easy and intuitive. Whether you're a developer sharing code or a designer showcasing a UI concept, our platform helps you present your work in the best light.
              </p>
              
              <div className="bg-snips-card p-6 rounded-lg border border-snips-border mt-6">
                <h2 className="text-xl font-mono text-white mb-4">Coming Soon!</h2>
                <p className="text-sm">
                  The ability to create and share snips will be available when snips.dev officially launches. Join the waitlist to be among the first to try this feature!
                </p>
              </div>
              
              <ol className="space-y-4 mt-8 list-decimal pl-5">
                <li>Sign up for an account (once we launch)</li>
                <li>Click on "Create New Snip" from your dashboard</li>
                <li>Choose between code or design snip</li>
                <li>Upload or create your content</li>
                <li>Add tags, description, and set visibility</li>
                <li>Publish and share with the community!</li>
              </ol>

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

export default CreateSnip;
