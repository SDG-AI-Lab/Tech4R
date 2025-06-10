export const Hero = ({ 
  title, 
  subtitle, 
  children 
}: { 
  title: string | React.ReactNode; 
  subtitle?: string | React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <section className={`relative px-4 text-center bg-color-02 w-full ${children ? 'pt-22 pb-0 mb-26' : 'h-80 flex items-center'}`}>
      <div className="container mx-auto flex flex-col gap-4 -mt-8">
        <h1 className="text-4xl md:text-7xl/20 font-semibold text-white mx-auto">
          {title}
        </h1>
        {subtitle && <p className={`text-lg/8 max-w-[31rem] mx-auto text-neutral-01 font-light ${children ? 'mb-26' : ''}`}>
          {subtitle}
        </p>}
      </div>
      
      {children && (
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white" />
          <div className="container mx-auto relative">
            {children}
          </div>
        </div>
      )}
    </section>
  );
};
