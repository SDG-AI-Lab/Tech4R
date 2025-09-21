'use client';
import {useState, createContext, useRef, useEffect} from 'react';

const PageContext = createContext({page: 1,size:1});

function Carousel({children, pages, size, className}:{children: Array<React.ReactNode>, pages:number, size:number, className?:string}) {
  const [page, setPage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  function setter (p: number) {
    setPage(p);
    // Scroll to the corresponding page
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const pageWidth = scrollContainer.offsetWidth;
      scrollContainer.scrollTo({
        left: pageWidth * p,
        behavior: 'smooth'
      });
    }
  }

  // Handle scroll events to update active dot
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || pages <= 1) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const pageWidth = scrollContainer.offsetWidth;
      const currentPage = Math.round(scrollLeft / pageWidth);
      if (currentPage !== page && currentPage >= 0 && currentPage < pages) {
        setPage(currentPage);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [pages, page]);

  // Create pages with items
  const createPages = () => {
    const pageElements = [];
    for (let i = 0; i < pages; i++) {
      const pageItems = [];
      for (let j = i * size; j < Math.min((i + 1) * size, children.length); j++) {
        const childElement = children[j] as React.ReactElement<{className?: string, children: React.ReactNode}>;
        pageItems.push(
          <CI key={j} className={childElement.props.className || ''}>
            {childElement.props.children}
          </CI>
        );
      }
      
      pageElements.push(
        <ul key={i} className={`w-full flex-shrink-0 snap-start contain-content ${className}`}>
          <PageContext value={{page: i, size: size}}>
            {pageItems}
          </PageContext>
        </ul>
      );
    }
    return pageElements;
  };

  let dots;
  if (pages > 1) {
    dots = (
      <div className="col-span-full m-0 text-center w-full mt-4">
        <div className="flex justify-center items-center gap-2">
          {[...Array(pages).keys()].map(i => (
            <button 
              key={i} 
              onClick={() => setter(i)} 
              className={`
                ${(page === i) ? 'opacity-100' : 'opacity-50'} 
                select-none hover:opacity-70 transition-opacity duration-200
                w-6 h-6 flex items-center justify-center
                rounded-full cursor-pointer
              `}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="w-2 h-2 rounded-full bg-current"></span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {createPages()}
      </div>
      {dots}
    </div>
  );
}

function CI ({children, className}:{children: React.ReactNode, className:string}) {
  return (
    <li className={className}>
      {children}
    </li>
  );
}

export {Carousel, CI}