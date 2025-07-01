import React from "react"

export const SectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <section className="px-6 overflow-hidden">
    {children}
  </section>
}