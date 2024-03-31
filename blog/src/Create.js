import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");
  const [author,setAuthor]=useState("arun");
  const [isPending,setIsPending]=useState(false)
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};
    setIsPending(true)
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log("blog added")
      setIsPending(false)
      })
      setTitle("")
      setBody("")
      setAuthor("arun")
      navigate('/')

    }
  return (
    <div className='h-dvh flex flex-col justify-center gap-y-5 items-center w-full '>
      <h1 className='text-pink-500 font-bold '>Add a New Blog</h1>
      <form  onSubmit={handleSubmit} className='grid  w-[80%] md:w-1/2 p-4 '>
        <label className='py-2'>Blog Title:</label>
        <input required type="text "
          className='border-black border-2 p-2 '
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        <label className='py-2'>Blog Body:</label>
        <textarea value={body} required className='border-black border-2 p-4'
                onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        <label className='py-2'>Blog Author:</label>
        <select className='border-black border-2 p-1'
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        >
          <option>yoga</option>
          <option>arun</option>
        </select>
{     !isPending  &&  <button className='bg-pink-500 w-fit p-3 rounded-lg my-4 mx-auto hover:bg-pink-800 hover:text-white duration-150 transition '>Add Blog</button>
}     
{     isPending  &&  <button disabled className='bg-pink-500 w-fit p-3 rounded-lg my-4 mx-auto hover:bg-pink-800 hover:text-white duration-150 transition '>Adding...</button>
}
 </form>
    </div>
  )
}

export default Create