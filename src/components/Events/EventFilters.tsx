import { EventCategory } from "@/app/events/page";
import { Button } from "../Button";

interface EventFiltersProps {
  options: EventCategory[];
  activeFilter: EventCategory;
  onFilterChange: (filter: EventCategory) => void;
}
const EventFilters = ({
  options,
  activeFilter,
  onFilterChange,
}: EventFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-10">
      <Button
        onClick={() =>
          onFilterChange({
            name: "All Events",
            description:
              "Explore our complete range of technology-focused events designed to build resilience and create innovative solutions for global challenges.",
          })
        }
        variant={activeFilter.name === "All Events" ? "primary" : "ghost"}
        className={`rounded-full px-6 py-2 text-base font-[400] cursor-pointer ${
          activeFilter.name === "All Events"
            ? ""
            : " !border-neutral-02 !text-neutral-04"
        }`}
        aria-pressed={activeFilter.name === "All Events"}
      >
        {"All Events"}
      </Button>
      {options.map((option) => (
        <Button
          key={option.name}
          onClick={() => onFilterChange(option)}
          variant={activeFilter.name === option.name ? "primary" : "ghost"}
          className={`rounded-full px-6 py-2 text-base font-[400] cursor-pointer ${
            activeFilter.name === option.name
              ? ""
              : " !border-neutral-02 !text-neutral-04"
          }`}
          aria-pressed={activeFilter.name === option.name}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
};

export default EventFilters;
