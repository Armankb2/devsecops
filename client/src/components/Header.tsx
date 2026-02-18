import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, LogOut, Settings, User } from 'lucide-react';
import { useState } from 'react';
import { currentUser } from '@/lib/data';

interface HeaderProps {
  onMenuClick?: () => void;
  onProfileClick?: (section: string) => void;
}

/**
 * Header Component - Modern Minimalist Design
 * Features: Logo, navigation, and user profile dropdown
 * Design: Clean, spacious layout with subtle shadows
 */
export default function Header({ onMenuClick, onProfileClick }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = (section: string) => {
    setIsDropdownOpen(false);
    onProfileClick?.(section);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-subtle">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-primary" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">CC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-display font-bold text-primary">CollegeConnect</h1>
              <p className="text-xs text-muted-foreground">Junior-Senior Bridge</p>
            </div>
          </div>
        </div>

        {/* Right Section - User Profile */}
        <div className="flex items-center gap-4">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 p-2 hover:bg-secondary rounded-lg transition-smooth">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-foreground">{currentUser.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{currentUser.role}</p>
                </div>
                <Avatar className="w-9 h-9 border-2 border-accent">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback className="bg-primary text-white font-display font-bold">
                    {currentUser.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              {/* User Info */}
              <div className="px-4 py-3 border-b border-border">
                <p className="font-medium text-foreground">{currentUser.name}</p>
                <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                <p className="text-xs text-accent mt-1 font-medium capitalize">
                  {currentUser.role === 'senior' ? '✓ Verified Senior' : 'Junior - Class of ' + currentUser.year}
                </p>
              </div>

              {/* Menu Items */}
              <DropdownMenuItem onClick={() => handleProfileClick('profile')} className="cursor-pointer">
                <User className="w-4 h-4 mr-2 text-primary" />
                <span>View Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => handleProfileClick('settings')} className="cursor-pointer">
                <Settings className="w-4 h-4 mr-2 text-primary" />
                <span>Settings</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
