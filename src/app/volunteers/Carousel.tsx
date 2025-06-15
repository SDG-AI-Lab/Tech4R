'use client';
import styles from "@/app/volunteers/carousel.module.css"
import {Children, useState} from 'react';

function Carousel({children, pages, size, className}:{children: Array<React.ReactNode>/*React.ReactNode*/, pages:number, size:number, className:string}) {
  const [page, setPage] = useState(0);
  function setter (p: number) {
    setPage(p);
    console.log(page,(size*page),(size*(page+1)));
  }
  let dots;
  if (pages>1){
    dots = (<div className={`col-span-full ${styles.carnav}`}>
      {[...Array(pages).keys()].map(i => (<span key={i} onClick={()=>{setter(i)}} className={(page==i)?styles.focus:''}>●</span>))}
    </div>)
  }
  return (
  <ul className={`w-full ${styles.carousel} ${className}`}>
    {children.filter((_,i) => {return (i>=(size*page))&&(i<(size*(page+1)))})}
    {dots}
  </ul>
);
}

export default Carousel