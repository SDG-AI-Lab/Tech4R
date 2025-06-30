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
        <div className="flex items-center justify-center w-full">
            <div className="relative h-[480px] w-[95%] xl:max-w-[2104px] bg-[url('/images/phone.jpg')] bg-cover bg-right rounded-lg p-6 lg:px-24 gap-8">

                <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 items-center bg-color-01 opacity-90 rounded-lg p-6 lg:px-24 gap-8">
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