import Link from 'next/link';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import { NavigationMobileMenu } from './NavigationMobileMenu';
import { config } from './config';

export const Navigation = () => {
  return (
    <nav className="bg-color-02 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4 xl:space-x-8">
              {config.items.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-white px-3 py-2 text-base font-normal"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Action Buttons + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Action Buttons - Always Visible */}
            <Link 
              href="/contact" 
              className="text-white px-3 py-2 text-base font-normal"
            >
              Contact<span className="hidden md:inline"> Us</span>
            </Link>
            <Button href="/volunteer">            
              <span className="hidden md:inline">Become a&nbsp;</span>Volunteer
            </Button>

            {/* Mobile Menu */}
            <NavigationMobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 