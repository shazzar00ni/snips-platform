
import React from 'react';
import BrowserHeader from '@/components/BrowserHeader';
import CardButton from '@/components/CardButton';

const Index = () => {
  const handleCardClick = (cardName: string) => {
    console.log(`${cardName} card clicked`);
    // Navigation or other actions would go here
  };

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
        </div>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardButton onClick={() => handleCardClick('About')}>
            About snips.dev
          </CardButton>
        </div>
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardButton onClick={() => handleCardClick('CreateSnip')}>
            Create your first snip
          </CardButton>
        </div>
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardButton onClick={() => handleCardClick('ReadDocs')}>
            Read the Docs
          </CardButton>
        </div>
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardButton onClick={() => handleCardClick('ForDevelopers')}>
            For Developers
          </CardButton>
        </div>
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardButton onClick={() => handleCardClick('ForDesigners')}>
            For Designers
          </CardButton>
        </div>
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardButton onClick={() => handleCardClick('Contact')}>
            Contact Us
          </CardButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
