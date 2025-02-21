
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  const [readingTime, setreadTime]=useState(0)

  const handleAddbookmarks= blog =>{
   const newBookmarks=[...bookmarks, blog]
   setBookmarks(newBookmarks)
  }

  const handleReadingTime = (id ,time) =>{
   const newReadingTime= readingTime + time;
   setreadTime(newReadingTime)

   const remaningBookmarks =bookmarks.filter(bookmark => bookmark.id !==id)
   setBookmarks(remaningBookmarks)
  }
 

  return (
    <>
      <div className='md:flex max-w-6xl m-auto'>
      <Blogs handleAddbookmarks={handleAddbookmarks} 
      handleReadingTime={handleReadingTime} 
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>

      </div>
     
      
    </>
  )
}

export default App
