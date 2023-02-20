import React from 'react'
import guy from "../assets/guy7.jpg"
import Image from 'next/image'
import camera from '../assets/camera.png'
import photos from '../assets/photos.png'
import smile from '../assets/smile.png'


const CreatePost = () => {
  return (
    <div className='w-screen sm:w-full bg-white flex-col rounded-lg'>
      <div className='mt-4 max-w-[25rem] flex items-center w-full p-3 mx-auto pt-4'>
        <div className='w-14 h-14 shrink-0'>
          <Image src={guy} className="rounded-full items-center"/>
        </div>
        <div className='flex items-center ml-5 w-full'>
          <input 
            type="text" 
            placeholder='whats on your mind' className=' bg-[#f2f3f7] outline-none p-1 pl-3 w-full h-12 rounded-full'
          />
        </div>
        <div className='flex items-center bg-blue-500 rounded-full px-3 h-10 ml-2'>
          <button className='font-bold text-white'>post</button>
        </div>
      </div>
        <div className='border-b mb-4 mt-2'></div>
        <div className='flex justify-between sm:mx-7 pb-3'>
          <div className='flex'>
            <div className='w-7 h-7'>
              <Image src={camera}/>
            </div>
            <p className='sm:pl-2 whitespace-nowrap text-[14px]'>
              Live video
            </p>
          </div>

          <div className='flex'>
            <div className='w-7 h-7'>
              <Image src={photos}/>
            </div>
            <p className='sm:pl-2 text-[14px]'>Photo/Video</p>
          </div>
          <div className='flex'>
            <div className='w-7 h-7'>
              <Image src={smile} />
            </div>
            <p className='sm:pl-2 text-[14px]'>Activity</p>
          </div>
        </div>

    </div>
  )
}

export default CreatePost