export default function TrackRecord() {
  const recordCard = "group bg-neutral-01 p-8 sm:p-4 md:p-8 rounded-xl flex-1 min-w-[150px] hover:bg-color-01 hover:text-white transition";
  
  const records = [
    { value: "20+", label: "Projects" },
    { value: "15,000+", label: "Volunteers" },
    { value: "98%", label: "Project Success" }
  ];

  return ( 
    <div className="container my-8">
      <div className="lg:grid lg:grid-cols-4 xl:grid-cols-6 px-4 md:px-6 lg:px-10 xl:px-20 2xl:px-24 gap-6">

        <div className="lg:col-span-4 xl:col-span-2 py-4">
          <h2 className="text-5xl font-semibold leading-tight">
            Our Track Record Speaks for Itself
          </h2>            
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap lg:col-span-4 gap-6">
          {records.map((record, index) => (
            <div key={index} className={recordCard}>
              <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold pb-4">
                {record.value}
              </h2>
              <span className="text-neutral-03 group-hover:text-white transition">
                {record.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
