import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

export default function Blogs() {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs)
  return (
    <div className='md:w-2/3 m-auto'>
        <h1>knowledge Cafe</h1>
      {
        blogs.map(blog =><Blog blog={blog} key={blog.id}></Blog>)
      }
     
    </div>
  )
  Blogs.PropTypes={

  }
}
