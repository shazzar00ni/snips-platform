import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import { ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
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
          snips.dev &lt;about&gt;
        </div>
        
        <div className="w-full max-w-3xl border border-snips-border rounded-lg shadow-lg mb-8">
          <BrowserHeader />
          <div className="flex flex-col items-center justify-start py-12 px-6 bg-snips-dark">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-mono mb-6">
              About snips.dev
            </h1>
            
            <div className="text-left w-full space-y-6 text-snips-muted">
              <p>
                snips.dev is a social snippet sharing platform designed for developers, designers, tech enthusiasts, and students. It combines the professional networking aspects of LinkedIn with the snippet-sharing capabilities of platforms like CodePen and Dribbble, creating a unified space for both code and design snippets.
              </p>
              
              <p>
                Enhanced by AI-powered features and integrations with popular tools, snips.dev aims to foster collaboration, learning, and professional growth within the tech community.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to bridge the gap between developers and designers by providing a platform where they can share, collaborate, and learn together. With a focus on cross-disciplinary sharing, AI-driven tools, and educational resources, snips.dev is positioned to become the go-to hub for tech professionals and learners alike.
              </p>

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

export default About;
