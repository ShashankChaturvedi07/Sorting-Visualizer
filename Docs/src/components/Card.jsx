import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative flex-shrink-0 text-white px-8 py-10 w-50 h-62 bg-zinc-900/90 rounded-[40px] overflow-hidden'>

        <FaRegFileAlt />

        <p className='text-sm leading-tight mt-5 font-semibold'> {data.desc} </p>
        <motion.div className='footer absolute bottom-0 w-full left-0  '>
            <div className='flex items-center justify-between  px-6 py-[1.5] mb-5'>
                <h5> {data.fileSize} </h5>
                <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center '>  
                    {data.close ? <IoClose/> : <LuDownload size=".8em" color='#fff' />}
                </span>
            </div>
            {
              data.tag.isOpen ? (
                <div className={`tag w-full py-3 flex items-center justify-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" }`}>
                  <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
              ) : null
            }
            
        </motion.div>

    </motion.div>
  )
}

export default Card