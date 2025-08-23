"use client"
import { animate } from "animejs";
import { useEffect, useRef } from "react";
import '@/app/album/vanmemory/album.css';

const ITEM_DISTANCE = 10;

const PhotoCard = (props:{imageData:string[]}) => {
  
  const el = useRef<HTMLDivElement>(null);
  let endPosition:number, startPosition:number;

  useEffect(() => {

    const cards = el.current!.children;

    // Initial cards position
    for (let i = 0; i < cards.length; i++) {

      const c = cards[i] as HTMLDivElement;
      const angle = Math.random() * 20 - 10;
      animate(
        c,
        {
        rotateZ:angle,
        translateZ:-i * ITEM_DISTANCE,
        duration:1200
      })
      c.dataset.z = (-i * ITEM_DISTANCE).toString();
    }

    // Reset card stack position
    animate(
      el.current!,
      {
      rotateX:-20,
      translateZ:-10,
      duration:0
    });
    endPosition = -cards.length * ITEM_DISTANCE;
    startPosition = -10 + ITEM_DISTANCE;
  }, [props.imageData]);

  // Swap next item in the stack
  function swapNext(index:number) {

    const cards = el.current!.children;
    const c = cards[index] as HTMLDivElement;
    const cardZ = parseFloat(c.dataset.z!);

    // Move card behind
    animate(
    c,      
    {
      translateX:[0, 600, 0],
      rotateY:[0, -45, 0],
      translateZ:[cardZ, cardZ, endPosition],
      easing:'easeOutQuad',
      duration:900
    });
    c.dataset.z = endPosition.toString();

    // Move stack closer
    animate(
      el.current!,
      {
      rotateX:-20,
      translateZ:startPosition,
      duration:600
    });
    endPosition -= ITEM_DISTANCE;
    startPosition += ITEM_DISTANCE;
  }
  
  return (
    <div className="container my-4">
      <div className="photocard" ref={el}>
        {props.imageData.map((it, index) => 
          <div 
              onClick={() => swapNext(index)}
              key={index} 
              style={{backgroundImage:`url(${it})`}}
              className='photocard-item'>
          </div>)
        }
      </div>
    </div>
  )
}

export default PhotoCard;
