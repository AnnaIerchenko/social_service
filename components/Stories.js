import React from 'react'
import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";
import Image from "next/image";

const Stories = () => {

  const stories = [
   {profile: mikeprofile, background: mike},
   {profile: mrbeast, background: mrbeastbackground},
   {profile: kobe, background: kobebackground},
   {profile: arnold, background: arnoldbackground},
   {profile: therock , background: therock20},
  
  ]

  return (
    <div className='flex items-center w-screen h-36 sm:w-full sm:h-44 px-2 mt-4 sm:mt-6'>
    <div className='w-full flex justify-between space-x-1 p-1 mx-auto max-w-[25rem] bg-white rounded-[1rem]'>
      {stories.map((story) => (
        <div className='relative flex w-[4.5rem] h-32 sm:w-30 sm:h-36'>
          <div className='flex '>
            <Image src={story.background} className="flex object-cover rounded-[1rem]"/>
          </div>
          <div className='flex absolute top-1 left-1 w-9 h-9 p-1 bg-blue-500 rounded-full'>
            <Image src={story.profile} className="rounded-full object-cover border-red-400" />
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Stories