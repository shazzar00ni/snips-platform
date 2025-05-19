
import React from 'react';
import { cn } from '@/lib/utils';

interface CardButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({ children, className, onClick }) => {
  return (
    <div 
      className={cn("card-button", className)}
      onClick={onClick}
    >
      <div className="text-2xl italic font-medium">{children}</div>
    </div>
  );
};

export default CardButton;
