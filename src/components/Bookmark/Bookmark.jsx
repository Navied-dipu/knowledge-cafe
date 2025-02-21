import React from 'react'

export default function Bookmark({bookmark}) {
    const {title}=bookmark;
  return (
    <div className='bg-amber-300 p-4 m-4 rounded-2xl'>
      <h2 className='text-2xl'>{title}</h2>
    </div>
  )
}

