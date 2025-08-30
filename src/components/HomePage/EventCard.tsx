import { Button } from "../Button";
import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  onSeeAll?: () => void;
}

const EventCard = ({ title, description, imageSrc, imageAlt, onSeeAll }: EventCardProps) => {
  return (
    <article className="bg-color-02 rounded-2xl text-white overflow-hidden p-8 space-y-10">
      <div className="w-full min-h-[300px] bg-color-01 rounded-lg relative overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={false}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[32px] font-medium text-white leading-[140%] tracking-[-1px]">
          {title}
        </h3>
        <p className="text-neutral-01 text-lg leading-[170%] tracking-normal font-light">
          {description}
        </p>
      </div>
      <div className="pt-0">
        <Button
          variant="white"
          className="text-neutral-04 font-[400] cursor-pointer"
          onClick={onSeeAll}
        >
          See all
        </Button>
      </div>
    </article>
  );
};

export default EventCard;
