import React, { useRef, useState } from 'react';
import Card from './Card'


function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc:"lorem ispum dolor sign amet adjustable hai",
      fileSize:".4mb", 
      close: true,
      tag:{isOpen: true, tagTitle: "Download Now", tagColor:"green"},
    },
    {
      desc:"lorem ispum dolor sign amet adjustable hai",
      fileSize:".9mb", 
      close: true,
      tag:{isOpen: true, tagTitle: "Download Now", tagColor:"blue"},
    },
    {
      desc:"lorem ispum dolor sign amet adjustable hai",
      fileSize:".6mb", 
      close: true,
      tag:{isOpen: true, tagTitle: "Upload", tagColor:"green"},
    },
    {
      desc:"lorem ispum dolor sign amet adjustable hai",
      fileSize:".1mb", 
      close: true,
      tag:{isOpen: true, tagTitle: "Upload", tagColor:"blue"},
    },
  ]
  useState()

  return (

       <div ref={ref} className='fixed z-[3] top-0 left-0 transpar w-full h-full flex gap-10 flex-wrap p-5'>
          {data.map((item, index)=>(
              <Card data={item} reference={ref}/>
          ))}
       </div>

  )
}

export default Foreground