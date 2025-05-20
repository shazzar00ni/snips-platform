
import React from 'react';
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("w-full border-t border-snips-border px-4 py-3", className)}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <SocialLinks />
        <div className="text-xs text-snips-muted">
          made with ❤️ by snips.dev
        </div>
      </div>
    </div>
  );
};

export default Footer;
