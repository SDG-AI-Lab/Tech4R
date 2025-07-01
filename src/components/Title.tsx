import React from "react";

export default function Title({ children }: React.PropsWithChildren) {
  return (<h2 className="font-semibold text-5xl leading-snug tracking-tight text-center w-full sm:w-1/2 mx-auto my-6">{children}</h2>);
}