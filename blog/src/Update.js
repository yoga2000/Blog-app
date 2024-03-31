import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const{id}=useParams();
  const navigate=useNavigate()

  const [value, setValue] = useState({
    id: '',
    title: '',
    body: '',
    author: '',
  });

  useEffect(() => {
    fetch("http://localhost:8000/blogs/" + id)
      .then((res) => {
        if (!res.ok) {
          throw Error("res not ok in update");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setValue((prevValue) => ({
          ...prevValue,
          id: data.id,
          title: data.title,
          body: data.body,
          author: data.author,
        }));
      });
  }, [id]);

   const submitHandler=(e)=>{
    e.preventDefault()
    fetch('http://localhost:8000/blogs/'+id,{
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(value)
    }).then(()=>setValue((prev)=>({
      ...prev,
      id:'',
      title: '',
      body: '',
      author: '',
    })))
    navigate('/')
   }
  
   
      return (
        <div className='h-dvh flex flex-col justify-center gap-y-5 items-center w-full '>
        <h1 className='text-pink-500 font-bold '>Update a  Blog</h1>
        <form onSubmit={submitHandler}  className='grid  w-[80%] md:w-1/2 p-4 '>
          <label className='py-2'>Blog Title:</label>
          <input value={value.title} onChange={(e)=>setValue((prev)=>({...prev,title:e.target.value,}))} required type="text"
            className='border-black border-2 p-2  '
            
            />
          <label className='py-2'>Blog Body:</label>
          <textarea  value={value.body} required 
          onChange={(e)=>setValue((prev)=>({...prev,body:e.target.value,}))}
          className='border-black border-2 p-4'
          ></textarea>
          <label className='py-2'>Blog Author:</label>
          <select value={value.author}
          onChange={(e)=>setValue((prev)=>({...prev,author:e.target.value,}))}
          className='border-black border-2 p-1'
          >
            <option>yoga</option>
            <option>arun</option>
          </select>
   <button className='bg-pink-500 w-fit p-3 rounded-lg my-4 mx-auto hover:bg-pink-800 hover:text-white duration-150 transition '>Update Blog</button>
     
  
   </form>
      </div>
  )
}

export default Update