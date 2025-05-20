
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const socialIcons = [
    { icon: <Facebook size={20} />, href: "https://facebook.com/snips.dev", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/snips_dev", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/snips.dev", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/snips-dev", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:hello@snips.dev", label: "Email" },
  ];

  return (
    <div className={cn("flex items-center justify-center gap-6 mt-8", className)}>
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-snips-muted hover:text-white transition-colors duration-200"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
