"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/Button";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { supabase } from "@/lib/supabaseClient";

interface Category {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
}

export default function ProjectsSolutionsSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  // Remove dynamic height calculation to fix image size variability
  // const [leftHeight, setLeftHeight] = useState<number | undefined>(undefined);
  // const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from("categories")
        .select("id, name, description, image_url");
      if (data) {
        setCategories(data);
        setSelectedIndex(0);
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);

  // Remove dynamic height calculation useEffect
  // useEffect(() => {
  //   if (!leftRef.current) return;
  //   const updateHeight = () => setLeftHeight(leftRef.current?.offsetHeight);
  //   updateHeight();
  //   const observer = new window.ResizeObserver(updateHeight);
  //   observer.observe(leftRef.current);
  //   window.addEventListener("resize", updateHeight);
  //   return () => {
  //     observer.disconnect();
  //     window.removeEventListener("resize", updateHeight);
  //   };
  // }, [categories, selectedIndex, loading]);

  if (loading) {
    return (
      <section className="py-20"><div className="text-center">Loading...</div></section>
    );
  }

  const selected = categories[selectedIndex];

  return (
    <div className="flex items-center justify-center my-8">
      <div className="w-full max-w-full rounded-[20px] bg-white px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8">
        <div className="w-full lg:grid lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          
          {/* Left side - Categories - Fixed width */}
          <div className="lg:col-span-4 xl:col-span-3 py-2 sm:py-4 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6 md:mb-8">Projects & Solutions</h2>
            
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              {categories.map((cat, idx) => (
                <div key={cat.id} className="flex flex-col">
                  <button
                    className={`relative text-left rounded-2xl px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 border transition-all flex shadow-sm w-full ${
                      idx === selectedIndex
                        ? "bg-[#2487CE] text-white border-[#2487CE] flex-col gap-1 min-h-[80px] sm:min-h-[100px] md:min-h-[120px]"
                        : "bg-[#F6F5F5] text-neutral-04 border-transparent hover:bg-[#ECECEC] items-center min-h-[60px] sm:min-h-[80px] md:min-h-[100px]"
                    }`}
                    onClick={() => setSelectedIndex(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={`flex items-center justify-between w-full ${idx === selectedIndex ? "" : "flex-1"}`}>
                      <div className="flex items-center">
                        {(() => {
                          if (cat.name === "Predictive Analytics") {
                            return (
                              <span className={`mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 inline-block align-middle ${idx === selectedIndex ? "text-white" : "text-neutral-04"}`}>
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3 13.1296C3 12.5083 3.50368 12.0046 4.125 12.0046H6.375C6.99632 12.0046 7.5 12.5083 7.5 13.1296V19.8796C7.5 20.501 6.99632 21.0046 6.375 21.0046H4.125C3.50368 21.0046 3 20.501 3 19.8796V13.1296Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M9.75 8.62964C9.75 8.00832 10.2537 7.50464 10.875 7.50464H13.125C13.7463 7.50464 14.25 8.00832 14.25 8.62964V19.8796C14.25 20.501 13.7463 21.0046 13.125 21.0046H10.875C10.2537 21.0046 9.75 20.501 9.75 19.8796V8.62964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M16.5 4.12964C16.5 3.50832 17.0037 3.00464 17.625 3.00464H19.875C20.4963 3.00464 21 3.50832 21 4.12964V19.8796C21 20.501 20.4963 21.0046 19.875 21.0046H17.625C17.0037 21.0046 16.5 20.501 16.5 19.8796V4.12964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                            );
                          } else if (cat.name === "Data Dashboards & Monitoring") {
                            return (
                              <span className={`mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 inline-block align-middle ${idx === selectedIndex ? "text-white" : "text-neutral-04"}`}>
                                <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15 1.78516V3.11849M3 15.1185H1.66666M6.33333 6.45182L5.5332 5.65169M23.6667 6.45182L24.467 5.65169M28.3333 15.1185H27M12.3333 17.1185H17.6667M15 17.1185V23.7852M19.6667 21.6171C21.6854 20.1649 23 17.7952 23 15.1185C23 10.7002 19.4183 7.11849 15 7.11849C10.5817 7.11849 7 10.7002 7 15.1185C7 17.7952 8.31457 20.1649 10.3333 21.6171V24.1852C10.3333 25.6786 10.3333 26.4254 10.624 26.9958C10.8796 27.4976 11.2876 27.9055 11.7894 28.1612C12.3598 28.4518 13.1065 28.4518 14.6 28.4518H15.4C16.8935 28.4518 17.6402 28.4518 18.2106 28.1612C18.7124 27.9055 19.1204 27.4976 19.376 26.9958C19.6667 26.4254 19.6667 25.6786 19.6667 24.1852V21.6171Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                            );
                          } else if (cat.name === "Geospatial Intelligence") {
                            return (
                              <span className={`mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 inline-block align-middle ${idx === selectedIndex ? "text-white" : "text-neutral-04"}`}>
                                <svg width="100%" height="100%" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.08008 25.0015C8.69341 25.7348 10.7467 25.7348 12.3601 25.0015C13.9734 24.2682 16.0267 24.2682 17.6401 25.0015C19.2534 25.7348 21.3067 25.7348 22.9201 25.0015M15 1.11816V3.78483M4.33333 14.4515H1.66666M7.41882 6.87032L5.5332 4.9847M22.5807 6.87032L24.4663 4.9847M28.3333 14.4515H25.6667M8.33333 14.4515C8.33333 10.7696 11.3181 7.78483 15 7.78483C18.6819 7.78483 21.6667 10.7696 21.6667 14.4515M1.80013 20.3348C3.41346 19.6015 5.46679 19.6015 7.08013 20.3348C8.69346 21.0682 10.7468 21.0682 12.3601 20.3348C13.9735 19.6015 16.0268 19.6015 17.6401 20.3348C19.2535 21.0682 21.3068 21.0682 22.9201 20.3348C24.5335 19.6015 26.5868 19.6015 28.2001 20.3348" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                            );
                          } else if (cat.name === "Crisis Communication Tools") {
                            return (
                              <span className={`mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 inline-block align-middle ${idx === selectedIndex ? "text-white" : "text-neutral-04"}`}>
                                <svg width="100%" height="100%" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15 22.7845H5.93333C4.43986 22.7845 3.69312 22.7845 3.12269 22.4939C2.62092 22.2382 2.21298 21.8302 1.95731 21.3285C1.66666 20.758 1.66666 20.0113 1.66666 18.5178V5.71784C1.66666 4.22436 1.66666 3.47763 1.95731 2.9072C2.21298 2.40543 2.62092 1.99748 3.12269 1.74182C3.69312 1.45117 4.43986 1.45117 5.93333 1.45117H6.46666C9.45361 1.45117 10.9471 1.45117 12.0879 2.03247C13.0915 2.5438 13.9074 3.35969 14.4187 4.36322C15 5.50408 15 6.99756 15 9.9845M15 22.7845V9.9845M15 22.7845H24.0667C25.5601 22.7845 26.3069 22.7845 26.8773 22.4939C27.3791 22.2382 27.787 21.8302 28.0427 21.3285C28.3333 20.758 28.3333 20.0113 28.3333 18.5178V5.71784C28.3333 4.22436 28.3333 3.47763 28.0427 2.9072C27.787 2.40543 27.3791 1.99748 26.8773 1.74182C26.3069 1.45117 25.5601 1.45117 24.0667 1.45117H23.5333C20.5464 1.45117 19.0529 1.45117 17.912 2.03247C16.9085 2.5438 16.0926 3.35969 15.5813 4.36322C15 5.50408 15 6.99756 15 9.9845" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                            );
                          } else {
                            return null;
                          }
                        })()}
                        <span className={`font-bold text-sm sm:text-base md:text-lg whitespace-nowrap overflow-hidden text-ellipsis ${idx === selectedIndex ? "text-white" : "text-neutral-04"}`}>{cat.name}</span>
                      </div>
                      <span className={`${idx === selectedIndex ? "text-white" : "text-neutral-04"} absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-4 h-4 sm:w-5 sm:h-5`} aria-hidden>
                        <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 10.1184C13.44 10.1184 13 9.66844 13 9.11844V3.52844L2.12001 14.4184C1.73001 14.8084 1.10001 14.8084 0.710011 14.4184C0.320011 14.0284 0.320011 13.3984 0.710011 13.0084L11.59 2.11844H6.00001C5.45001 2.11844 5.00001 1.66844 5.00001 1.11844C5.45001 0.568438 5.00001 0.118438 6.00001 0.118438H14C14.55 0.118438 15 0.568438 15 1.11844V9.11844C15 9.66844 14.55 10.1184 14 10.1184Z" fill="currentColor"/>
                        </svg>
                      </span>
                    </div>
                    {/* Description - Only show when selected */}
                    {idx === selectedIndex && (
                      <span className="block mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base ml-6 sm:ml-8 md:ml-10 text-white/90">
                        {cat.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                      </span>
                    )}
                  </button>
                  
                  {/* Mobile Image Display - Show image below selected category on mobile */}
                  {idx === selectedIndex && (
                    <div className="block lg:hidden mt-2 sm:mt-3 md:mt-4 mb-3 sm:mb-4 md:mb-6">
                      <div className="bg-[#c2e0fa] rounded-2xl p-2 sm:p-3 md:p-4 w-full">
                        {selected?.image_url ? (
                          <div className="w-full flex justify-center items-center">
                            <img
                              src={selected.image_url}
                              alt={selected.name}
                              className="rounded-xl object-cover w-full h-auto max-h-[120px] sm:max-h-[150px] md:max-h-[180px] lg:max-h-[200px] xl:max-h-[250px]"
                              style={{ background: "#fff" }}
                            />
                          </div>
                        ) : (
                          <div className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] xl:h-[250px] flex items-center justify-center text-neutral-03 text-xs sm:text-sm">No image</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <Link href={routes.projects} className="mt-auto">
              <Button className="text-sm sm:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                See all projects
              </Button>
            </Link>
          </div>
          
          {/* Desktop Image Display - Show on lg screens and above with dynamic height matching left section */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 justify-center items-start">
            <div 
              className="bg-[#c2e0fa] rounded-2xl p-6 w-full flex justify-center items-center"
              style={{ 
                height: "calc(100vh - 200px)", // Dynamic height that matches the left section
                minHeight: "500px", // Minimum height to ensure good appearance
                maxHeight: "800px"  // Maximum height to prevent excessive stretching
              }}
            >
              {selected?.image_url ? (
                <div className="w-full h-full flex justify-center items-center p-4">
                  <img
                    src={selected.image_url}
                    alt={selected.name}
                    className="rounded-xl object-cover w-full h-full"
                    style={{ background: "#fff" }}
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-03">No image</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 