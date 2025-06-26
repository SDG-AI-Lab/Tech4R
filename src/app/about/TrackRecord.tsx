export default function TrackRecord() {
  return ( 
    <div className="container my-8">
        <div className="lg:grid lg:grid-cols-4 xl:grid-cols-6 px-4 md:px-6 lg:px-10 xl:px-20 2xl:px-24 gap-6">

            <div className="lg:col-span-4 xl:col-span-2 py-4">
            <h2 className="text-5xl font-semibold leading-tight">Our Track Record Speaks for Itself</h2>            
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap lg:col-span-4 gap-6">
            <div className="bg-neutral-01 p-8 sm:p-4 md:p-8 rounded-xl flex-1 min-w-[150px]">
                <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold pb-4">20+</h2>
                <span className="text-neutral-03">Projects</span>
            </div>
            
            <div className="bg-color-01 text-white p-8 sm:p-4 md:p-8 rounded-xl flex-1 min-w-[150px]">
                <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold pb-4">15,000+</h2>
                <span className="">Volunteers</span>
            </div>
            
            <div className="bg-neutral-01 p-8 sm:p-4 md:p-8 rounded-xl flex-1 min-w-[150px]">
                <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold pb-4">98%</h2>
                <span className="text-neutral-03">Project Success</span>
            </div>
            </div>
            
        </div>
    </div>
  );
}