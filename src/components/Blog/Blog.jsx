import React from 'react'
import PropTypes from 'prop-types';

export default function Blog({blog}) {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags}=blog;
  return (
    
        <div className='mb-4  '>
         <img className='mb-3' src={cover} alt={`cover picture of the title {title}`} />
          <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 mr-2' src={author_img} alt={`author image {author_img}`} />
                    <div>
                      <p className='text-2xl font-bold'>{author}</p>
                      <p>{posted_date}</p>
                    </div>
              </div>
                   <div>
                        <p>{reading_time} min read</p>
                   </div>
            </div>

                 <h3 className="text-4xl mb-4 font-bold">{title}</h3>
                    <p>
                    {
                        hashtags.map((hash)=> <span><a href="">#{ hash}</a> </span>)
                    }
                    </p>
        </div>
                 
  )
}
