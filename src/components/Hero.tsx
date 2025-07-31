"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./Button";

export const Hero = ({
  title,
  subtitle,
  children,
  buttonUrl,
  buttonText,
}: {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children?: React.ReactNode;
  buttonText?: string;
  buttonUrl?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const path = pathname.split("/")[1];

  return (
    <section
      className={`relative text-center bg-color-02 w-full ${children ? "pt-22 pb-0 mb-26" : "h-80 flex items-center"
        }`}
    >
      <div className="container mx-auto flex flex-col gap-4 -mt-8">
        {path === "event" ? (
          <h2 className="text-3xl md:text-5xl leading-[130%] tracking-[-1.5px] font-semibold text-white mx-auto">
            {title}
          </h2>
        ) : (
          <h1 className="text-4xl md:text-7xl/20 font-semibold text-white mx-auto">
            {title}
          </h1>
        )}
        {subtitle && (
          <p
            className={`text-lg/8 max-w-[31rem] mx-auto text-neutral-01 font-light ${children ? "mb-26" : ""
              }`}
          >
            {subtitle}
          </p>
        )}
        {buttonText && buttonText !== "" && buttonUrl && buttonUrl !== "" && (
          <div className="w-full flex items-center justify-center">
            <Button
              className="w-fit cursor-pointer text-white border-white"
              variant="ghost"
              onClick={() => router.push(buttonUrl)}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>

      {children && (
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white" />
          <div className="container mx-auto relative  px-4 md:px-8 lg:px-16 xl:px-20">{children}</div>
        </div>
      )}
    </section>
  );
};
