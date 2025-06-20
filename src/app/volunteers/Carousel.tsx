'use client';
import styles from "@/app/volunteers/carousel.module.css"
import {useState, createContext, useContext} from 'react';

const PageContext = createContext({page: 1,size:1});

function Carousel({children, pages, size, className}:{children: Array<React.ReactNode>, pages:number, size:number, className:string}) {
  const [page, setPage] = useState(0);
  function setter (p: number) {
    setPage(p);
  }
  let dots;
  if (pages>1){
    dots = (<div className={`col-span-full ${styles.carnav}`}>
      {[...Array(pages).keys()].map(i => (<span key={i} onClick={()=>{setter(i)}} className={(page==i)?styles.focus:''}>●</span>))}
    </div>)
  }
  return (
  <ul className={`w-full ${styles.carousel} ${className}`}>
    <PageContext value={{page:page,size:size}}>{children}</PageContext>
    {dots}
  </ul>
);
}

function CI ({children, className, index}:{children: Array<React.ReactNode>, className:string, index:number}) {
  const context = useContext(PageContext);
  const visible = (index>=(context.size*context.page))&&(index<(context.size*(context.page+1)));
  return (
    <li className={`${className} ${visible?'':'hidden'}`}>
      {children}
    </li>
  );
}

export {Carousel, CI}