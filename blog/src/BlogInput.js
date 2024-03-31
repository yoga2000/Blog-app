import React from 'react'

const BlogInput = () => {
  return (
    <div>
         <form className='grid  w-[80%] md:w-1/2 p-4 '>
        <label className='py-2'>Blog Title:</label>
        <input required type="text "
          className='border-black border-2 p-2 '
          />
        <label className='py-2'>Blog Body:</label>
        <textarea  required className='border-black border-2 p-4'
        ></textarea>
        <label className='py-2'>Blog Author:</label>
        <select className='border-black border-2 p-1'
        >
          <option>yoga</option>
          <option>arun</option>
        </select>

 </form>
    </div>
  )
}

export default BlogInput