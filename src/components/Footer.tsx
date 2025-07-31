import Link from 'next/link';
import { Logo } from './Logo';
import { navigationRoutes } from '@/lib/routes';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-4 gap-8 py-12">
          <div className="flex justify-start">
            <Logo className="h-12 w-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:contents gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navigationRoutes.footer.navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-neutral-03 font-light">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Our work</h3>
              <ul className="space-y-3">
                {navigationRoutes.footer.ourWork.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-neutral-03 font-light">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14714 0.410156C3.96404 0.410156 0.580811 3.79338 0.580811 7.97648C0.580811 12.4838 5.3584 18.699 7.32565 21.0662C7.75801 21.5851 8.54707 21.5851 8.97943 21.0662C10.9359 18.699 15.7135 12.4838 15.7135 7.97648C15.7135 3.79338 12.3302 0.410156 8.14714 0.410156ZM8.14714 10.6787C6.65549 10.6787 5.44488 9.46813 5.44488 7.97648C5.44488 6.48483 6.65549 5.27422 8.14714 5.27422C9.63878 5.27422 10.8494 6.48483 10.8494 7.97648C10.8494 9.46813 9.63878 10.6787 8.14714 10.6787Z" fill="#323232" />
                  </svg>
                  <span className="text-neutral-03 font-light">Worldwide</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_27048_2048)">
                      <path d="M21.7944 5.26367H4.49994C3.31095 5.26367 2.34894 6.23649 2.34894 7.42548L2.33813 20.3963C2.33813 21.5853 3.31095 22.5581 4.49994 22.5581H21.7944C22.9834 22.5581 23.9562 21.5853 23.9562 20.3963V7.42548C23.9562 6.23649 22.9834 5.26367 21.7944 5.26367ZM21.362 9.85751L13.72 14.6351C13.3742 14.8513 12.9202 14.8513 12.5743 14.6351L4.9323 9.85751C4.66208 9.68457 4.49994 9.39272 4.49994 9.07926C4.49994 8.35506 5.289 7.92269 5.90512 8.30101L13.1472 12.83L20.3892 8.30101C21.0053 7.92269 21.7944 8.35506 21.7944 9.07926C21.7944 9.39272 21.6323 9.68457 21.362 9.85751Z" fill="#323232" />
                    </g>
                    <defs>
                      <clipPath id="clip0_27048_2048">
                        <rect width="25.9417" height="25.9417" fill="white" transform="translate(0.17627 0.94043)" />
                      </clipPath>
                    </defs>
                  </svg>

                  <a href="mailto:contact@tech4r.com" className="text-neutral-03 font-light">
                    contact@tech4r.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-01">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
          <div className="flex space-x-6">
            <a
              href="https://github.com/SDG-AI-Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-03"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="text-neutral-03 font-light">
            © {new Date().getFullYear()} Tech4R. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 