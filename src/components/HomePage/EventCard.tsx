import { Button } from "../Button";

interface EventCardProps {
  title: string;
  description: string;
  onSeeAll?: () => void;
}

const EventCard = ({ title, description, onSeeAll }: EventCardProps) => {
  return (
    <article className="bg-color-02 rounded-2xl text-white overflow-hidden p-8 space-y-10">
      <div className="w-full min-h-[300px] bg-color-01 rounded-lg" />
      <div className="flex flex-col gap-2">
        <h3 className="text-[32px] font-medium text-white leading-[140%] tracking-[-1px]">
          {title}
        </h3>
        <p className="text-neutral-01 text-lg leading-[170%] tracking-normal">
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
