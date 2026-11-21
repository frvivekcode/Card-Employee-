import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className='h-80 w-70 rounded-2xl p-2 px-4 bg-[#e9e9e9]'>
        <div className='flex items-center mt-5 justify-between'>
            <img className='h-15 w-15 p-1 border-1 border-black object-cover rounded-full' src={props.Cimage} alt="" />
             <div className='flex gap-2'> Save <Bookmark /> </div>
        </div>
        <div>
          <h1>{props.Cname} <span className='text-[11px] text-[#5b5b59]'>{props.PostedAgo}</span></h1>
          <div className='leading-1'><h1 className='text-2xl font-bold'>{props.Post}</h1></div>
        </div>
        <div className='flex mt-3 gap-2 text-[13px]'>
          <button className='px-1 py-1 rounded bg-[#b0b0b0]'>{props.workingHours}</button>
          <button className='px-2 py-1 rounded bg-[#b0b0b0]'>{props.level}</button>
        </div>
        <div className='border-t-2 flex leading-4 items-center justify-between pt-2 border-[#393939] mt-10'>
          <h1 ><span className=' font-bold'>{props.payout}</span > <br /><span className='text-[13px]'>{props.location}</span></h1>
          <button className='bg-black  text-white px-2 py-2 rounded'>Apply Now</button>
        </div>
    </div>
    
    
  )
}

export default Card
