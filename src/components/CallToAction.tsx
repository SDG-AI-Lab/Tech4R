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
        <div className="flex items-center justify-center">
            <div className="relative bg-[url('/images/phone.jpg')] bg-cover bg-right h-[480px] w-[95%] lg:p-24 rounded-lg">
                <div className="absolute inset-0 grid grid-cols-1 items-center bg-color-01 opacity-90 rounded-lg p-6 lg:grid-cols-2 lg:px-24 gap-8">
                    <div>
                        <h2 className="text-4xl font-semibold text-white">
                            Have questions, ideas, or proposals?
                        </h2>
                        <p className="py-8 mb-2 text-lg text-white">
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