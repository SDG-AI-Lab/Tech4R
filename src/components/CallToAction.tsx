'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { routes } from '@/lib/routes';
// import { FaRegCommentDots } from 'react-icons/fa';



export default function CallToAction() {
    const pathname = usePathname();

    // Hide component on "/contact" page
    if (pathname === '/contact') {
        return null; // don’t render anything
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative bg-[url('/phone.jpg')] bg-cover bg-right h-120 w-[90%] sm:px-6 lg:p-24 rounded-lg">
                <div className="absolute inset-0 bg-color-01 opacity-90 rounded-lg text-white grid grid-cols-1 p-6 lg:grid lg:grid-cols-2 lg:px-24 lg:py-32 gap-8">
                    <div>
                        <span className="text-4xl">
                            Have questions, ideas, or proposals?
                        </span>
                        <p className="py-8 mb-2">
                            We’d love to hear from changemakers, collaborators, and curious minds alike.
                        </p>
                        <Link href={routes.contact} className="mt-8 px-6 py-2.5 rounded-3xl transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-neutral-03 hover:opacity-85">
                            Contact Us
                        </Link>
                    </div>
                    <div></div>
                </div>        
            </div>
        </div>
    );
}