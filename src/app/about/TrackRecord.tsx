export default function TrackRecord() {
  return ( 
    <div className="container my-8">
        <div className="xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-4 p-4 gap-6">

            <div className="xl:col-span-2 py-4">
            <h2 className="text-5xl font-semibold">Our Track Record Speaks for Itself</h2>            
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap lg:col-span-3 gap-6">
            <div className="bg-neutral-01 p-4 rounded-xl flex-1 min-w-[150px]">
                <h2 className="text-5xl font-semibold pt-4 pb-1">20+</h2>
                <span className="text-neutral-03">Projects</span>
            </div>
            
            <div className="bg-color-01 text-white p-4 rounded-xl flex-1 min-w-[150px]">
                <h2 className="text-5xl font-semibold pt-4 pb-1">15,000+</h2>
                <span className="">Volunteers</span>
            </div>
            
            <div className="bg-neutral-01 p-4 rounded-xl flex-1 min-w-[150px]">
                <h2 className="text-5xl font-semibold pt-4 pb-1">98%</h2>
                <span className="text-neutral-03">Project Success</span>
            </div>
            </div>
            
        </div>
    </div>
  );
}