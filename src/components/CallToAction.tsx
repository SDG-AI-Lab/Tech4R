'use client';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/Button'
import { routes } from '@/lib/routes';

export default function CallToAction() {
    const pathname = usePathname();

    // Hide component on "/contact" page
    if (pathname === '/contact') {
        return null; // don’t render anything
    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-center mx-6 mt-30">
            <div className="relative bg-[url('/images/phone.jpg')] bg-cover bg-right h-150 w-full sm:px-6 lg:p-24 sm:rounded-[20px]">
                <div
                    className="absolute inset-0 sm:rounded-[20px] text-white px-4 lg:px-[120px] flex items-center"
                    style={{
                        background: 'linear-gradient(to right, #2487CE 0%, rgba(36,135,206,0.6) 100%)'
                    }}
                >
                    <div className='w-full lg:w-1/2 xl:w-1/3'>
                        <h2 className="text-center tracking-[-1px] lg:text-left text-4xl lg:text-5xl font-semibold text-white lg:tracking-[-1.5px] leading-[1.3]">
                            Have questions, ideas, or proposals?
                        </h2>
                        <p className="text-center lg:text-left py-8 mb-2 text-lg font-light text-white">
                            We’d love to hear from changemakers, collaborators, and curious minds alike.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Button
                                variant="white"
                                className="flex-none text-neutral-03"
                                href={routes.contact}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}