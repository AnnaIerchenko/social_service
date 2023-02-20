import React from 'react'
import CreatePost from './CreatePost'
import LeftSidebar from './LeftSidebar'
import Posts from './Posts'
import Stories from './Stories'

const Feed = () => {
  return (
    <div className='flex bg-[#f2f3f7]'>
      {/* Leftsidebar */}
      <LeftSidebar />
      <div className='mx-auto'>
      {/* stories */}
      <Stories />
      {/* create post */}
      <CreatePost />
      {/* posts */}
      <Posts />
      </div>
      {/* rightSide */}
    </div>
  )
}

export default Feed