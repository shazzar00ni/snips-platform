
import React from 'react';
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("w-full max-w-4xl mx-auto mt-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4", className)}>
      <SocialLinks />
      <div className="text-xs text-snips-muted">
        made with ❤️ by snips.dev
      </div>
    </div>
  );
};

export default Footer;
