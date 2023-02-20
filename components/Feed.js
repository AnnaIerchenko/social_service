import React from 'react'
import CreatePost from './CreatePost'
import LeftSidebar from './LeftSidebar'
import Stories from './Stories'

const Feed = () => {
  return (
    <div className='flex bg-[#f2f3f7] h-screen'>
      {/* Leftsidebar */}
      <LeftSidebar />
      <div className='mx-auto'>
      {/* stories */}
      <Stories />
      {/* create post */}
      <CreatePost />
      {/* posts */}
      </div>
      {/* rightSide */}
    </div>
  )
}

export default Feed