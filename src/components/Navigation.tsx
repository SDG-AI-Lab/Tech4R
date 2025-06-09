import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

export default function Navigation() {
  return (
    <nav className="bg-color-02">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Centered Navigation Items */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link href="/about" className="text-white px-3 py-2">
                About
              </Link>
              <Link href="/projects" className="text-white px-3 py-2">
                Projects
              </Link>
              <Link href="/volunteers" className="text-white px-3 py-2">
                Volunteers
              </Link>
              <Link href="/events" className="text-white px-3 py-2">
                Events
              </Link>
              <Link href="/partner-with-us" className="text-white px-3 py-2">
                Partner with Us
              </Link>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/contact" 
              className="text-white px-3 py-2 text-base font-normal"
            >
              Contact us
            </Link>
            <Button href="/volunteer">            
              Become a Volunteer
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 