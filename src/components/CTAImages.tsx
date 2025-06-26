import { Button } from '@/components/Button'
import Image from 'next/image';

type CTAContentItem = {
  icon?: React.ReactNode; // or a string if you're using image paths or class names
  text: string;
};

type CTAImagesProps = {
  title: string;
  text: string;
  content?: CTAContentItem[];
  btnHref?: string;
  btnLabel?: string;
  img1Src?: string;
  img2Src?: string;
  img3Src?: string;
};

export default function CTAImages({ title, text, content, btnHref, btnLabel, img1Src, img2Src, img3Src }: CTAImagesProps) {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="w-[95%] rounded-lg bg-color-02 text-white grid p-6 lg:px-24 lg:grid-cols-2 lg:px-24 gap-8">
                <div className="flex flex-col justify-center py-12 sm:pb-2">
                    <h2 className="text-4xl font-semibold">{title}</h2>
                    <p className="py-8 mb-2 text-lg text-neutral-01">{text}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                        {content?.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 mb-2">
                            {item.icon && <span className="text-xl text-color-01">{item.icon}</span>}
                            <p>{item.text}</p>
                        </div>
                        ))}
                    </div>
                    {btnLabel && btnHref && (
                    <Button className="self-start text-neutral-03" href={btnHref}>
                        {btnLabel}
                    </Button>
                    )}
                </div>

                <div className="overflow-hidden">
                    <div className="relative w-full max-w-[90vw] sm:max-w-[584px] sm:h-[550px] mx-auto">
                        {/* Image 1 — rotated -8° */}
                        <Image
                            src={img1Src || "/images/partnerships.png"}
                            alt=""
                            width={487}
                            height={422}
                            className="absolute left-[35.7px] top-[66.2px] w-[487.35] h-[422.14] rounded-2xl"
                            style={{ transform: 'rotate(-8deg)' }}
                        />

                        {/* Dark Box 1 — rotated +7.08° */}
                        <div
                            className="absolute left-[342.84px] top-[241.09px] w-[237.46] h-[237.46] rounded-2xl bg-color-02"
                            style={{ transform: 'rotate(7.08deg)' }}
                        ></div>

                        {/* Image 2 — rotated +10° */}
                        <Image
                            src={img2Src || "/images/laptop.png"}
                            alt=""
                            width={237}
                            height={237}
                            className="absolute left-[350.09] top-[244.13] w-[237.46] h-[237.46] rounded-2xl"
                            style={{ transform: 'rotate(10deg)' }}
                        />

                        {/* Dark Box 2 — rotated -6° */}
                        <div
                            className="absolute left-[16.19] top-[281.45] w-[237.46] h-[237.46] rounded-2xl bg-color-02"
                            style={{ transform: 'rotate(-6deg)' }}
                        ></div>

                        {/* Image 3 — rotated -10° */}
                        <Image
                            src={img3Src || "/images/laptop.jpg"}
                            alt=""
                            width={237}
                            height={237}
                            className="absolute left-[3.04px] top-[285.73px] w-[237.46] h-[237.46] rounded-2xl"
                            style={{ transform: 'rotate(-10deg)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}