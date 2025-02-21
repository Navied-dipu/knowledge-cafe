import React from 'react'
import Bookmark from '../Bookmark/Bookmark'


export default function Bookmarks({bookmarks, readingTime}) {
  return (
    <div className='md: w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>

      
     <div>
       <h3 className='text-4xl bg-amber-200 p-4 m-4 rounded-2xl'>Reading Time : {readingTime}</h3>
     </div>

      <h2 className='text-4xl p-4 m-4 rounded-2xl'>Booked  Blogs : {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
      }
     
      
    </div>
  )
}
