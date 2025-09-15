import React from "react"

export const SectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <section className="px-0 md:px-6 overflow-hidden md:rounded-2xl">
    {children}
  </section>
}