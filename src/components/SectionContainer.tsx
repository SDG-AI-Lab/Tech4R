import React from "react"

export const SectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return  <section className="container sm:rounded-3xl overflow-hidden">
    {children}
  </section>
}