import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

export default function Blogs({handleAddbookmarks,handleReadingTime}) {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
  return (
    <div className='md:w-2/3 m-auto'>
        <h1 className='mb-4 font-extrabold'>Knowledge Cafe</h1>
      {
        blogs.map(blog =><Blog
           blog={blog} key={blog.id}
           handleAddbookmarks={handleAddbookmarks}
           handleReadingTime={handleReadingTime}
           ></Blog>)
      }
     
    </div>
  )
  Blogs.PropTypes={

  }
}
