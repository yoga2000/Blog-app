import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs,title}) => {

  
  return (
    <>
{ blogs.length !== 0 && <h1 className='text-center text-2xl font-semibold my-4 tracking-widest'>{title}</h1>}
   {blogs.length === 0 && <p className='leading-loose text-2xl text-center mt-20'>Blogs are empty! <br />Create a New Blog </p>}
    <div> 
         {blogs.map((blog)=>(
           <div className=' max-w-sm my-4 hover:shadow-2xl  p-6 md:max-w-4xl mx-auto ' key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
            <h1 className='text-pink-500 text capitalize '>{blog.title}</h1>
            <p className='text-slate-500 text capitalize'>{blog.author}</p>        
            </Link>
            
        </div>
    ))}</div>
    </>
  )
}

export default BlogList