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
        <div className="flex flex-col items-center justify-center mx-4 sm:mx-6">
            <div className="relative bg-[url('/images/phone.jpg')] bg-cover bg-right h-120 w-full sm:px-6 lg:p-24 rounded-[20px]">
                <div className="absolute inset-0 bg-color-01 opacity-90 rounded-[20px] text-white px-4 lg:px-[120px] flex items-center">
                    <div className='w-full sm:w-1/3'>
                        <h2 className="text-4xl font-semibold text-white">
                            Have questions, ideas, or proposals?
                        </h2>
                        <p className="py-8 mb-2 text-lg font-light text-white">
                            We’d love to hear from changemakers, collaborators, and curious minds alike.
                        </p>
                        <Button variant="white" className="m-auto flex-none text-neutral-03" href={routes.contact}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}