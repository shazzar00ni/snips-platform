
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const NavBar = () => {
  return (
    <div className="w-full border-b border-snips-border px-4 py-3 fixed top-0 z-50 bg-snips-dark/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-mono text-white hover:text-snips-muted transition-colors">
          snips.dev
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle() + " text-white bg-transparent hover:bg-snips-border/30"}>
                About
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-snips-border/30">Developer Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-1 gap-2 p-3 w-[200px] bg-snips-dark border border-snips-border">
                  <Link to="/create-snip" className="text-white hover:bg-snips-border/30 rounded-md p-2 transition-colors">
                    Create Snip
                  </Link>
                  <Link to="/for-developers" className="text-white hover:bg-snips-border/30 rounded-md p-2 transition-colors">
                    For Developers
                  </Link>
                  <Link to="/for-designers" className="text-white hover:bg-snips-border/30 rounded-md p-2 transition-colors">
                    For Designers
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/docs" className={navigationMenuTriggerStyle() + " text-white bg-transparent hover:bg-snips-border/30"}>
                Docs
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle() + " text-white bg-transparent hover:bg-snips-border/30"}>
                Contact
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/waitlist" className={navigationMenuTriggerStyle() + " bg-snips-border text-white hover:bg-snips-border/80"}>
                Join Waitlist
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
