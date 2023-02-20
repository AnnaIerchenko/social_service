import React from 'react'
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

import bluelike from "../assets/25like.png";
import blacklike from "../assets/2unlike.png";
import nouser from "../assets/nouser.png";
import Image from 'next/image';

const Post = () => {
  return (
    <div className='bg-white rounded-[1rem] px-5 py-4 mt-4'>
     {/* header */}
     <div className='flex items-center justify-between'>
     <div className='flex items-center'>
     <div className='w-12 h-12'>
      <Image src={guy} className="rounded-full" />
     </div>
     <div className='ml-3'> 
      <p className='font-bold'>Joe Doe</p>
      <div className='flex items-center'>
       <p className='font-xs'>3 hours ago &#8226;</p>
        <BiWorld className='ml-1 shrink-0'/>
      </div>
      </div>
      </div>

      <div className='w-10 h-10'>
        <Image src={dots}/>
        </div>
      </div>

     {/* input */}
     <div className='my-3'>
      <p>My brand new car</p>
     </div>
     {/* image */}
     <div className='-mx-5'>
      <Image src={car}/>
     </div>
     {/* numberof likes + Buttons */}
     <div>
     <div className='flex justify-between text-[#8e8d8d] mt-1'>
     <div className='flex items-center text-xs'>
      <div className='w-4 h-4'>
        <Image src={like} />
      </div>
      <div className='ml-[2px] w-4 h-4'>
        <Image src={hearth} />
      </div>
      <p className='pl-2 whitespace-nowrap '>Emily Doe and another 21,372</p>
     </div>
     <p>372 Comments</p>
     </div>

     <div className='border-b my-2'></div>
     <div className='flex justify-between mx-6'>
      <div className='flex items-center'>
      <BiLike className='w-5 h-5'/>
      <p className='pl-2 text-[14px]'>Like</p>
      </div>
      <div className='flex items-center'>
      <FaRegCommentAlt className='w-4 h-4'/>
      <p className='pl-2 text-[14px]'>Comment</p>
      </div>
      <div className='flex items-center'>
        <div className='w-5 h-5'>
          <Image src={share} />
        </div>
      <p className='pl-2 text-[14px]'>Share</p>
      </div>
     </div>
     <div className='border-b my-2'></div>
     </div>
     {/* Comments */}
     <div className='max-h-40 overflow-y-auto'>
      <div className='flex justify-between text-[#8e8d8d]'>
        <p>See 371 previos comments</p>
        <div className='flex items-center'>
          <p>Most relevant</p>
          <RiArrowDownSLine />
        </div>
      </div>
      {/* first comment */}
      <div>
      <div className='flex items-center mt-3'>
        <div className='w-10 h-10'>
          <Image src={guy} className="rounded-full" />
        </div>
        <p className='ml-2 font-bold'>Joe Doe</p>
        <p className='ml-2'>I love the car</p>
      </div>
      <div className='ml-[3rem] flex -mt-2'>
        <p className='mr-2'>Like</p>
        <p>Replay</p>
      </div>
      </div>
    {/* second comment */}
      <div>
      <div className='flex items-center mt-3'>
        <div className='w-10 h-10'>
          <Image src={guy} className="rounded-full" />
        </div>
        <p className='ml-2 font-bold'>Joe Doe</p>
        <p className='ml-2'>Second comment</p>
      </div>
      <div className='ml-[3rem] flex -mt-2'>
        <p className='mr-2'>Like</p>
        <p>Replay</p>
      </div>
      </div>
     </div>
     {/* Input */}
     <div className='flex items-center mt-4'>
      <div className='w-10 h-10 shrink-0'>
        <Image src={guy} className="rounded-full"/>
      </div>
      <div className='ml-2 w-full flex items-center relative'>
        <input 
          type="text" 
          placeholder="Write a comment..."
          className='outline-none cursor-pointer bg-[#f2f3f7] p-1 rounded-full w-full ' />

          <div className='flex absolute right-[4rem] space-x-2 mx-2 text-[#8e8d8d]'>
            <BiSmile className='cursor-pointer'/>
            <AiOutlineCamera className='cursor-pointer'/>
            <AiOutlineGif className='cursor-pointer'/>
          </div>
          <div className='mr-4 bg-blue-400 text-white rounded-full'>
            <button className='font-bold px-2'>Post</button>
          </div>
      </div>
     </div>
    </div>
  )
}

export default Post