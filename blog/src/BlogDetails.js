import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import './App.css'

const BlogDetails = () => {
  const navigate=useNavigate()
    const {id}=useParams()
    const {data,isLoading,error}=useFetch("http://localhost:8000/blogs/"+ id)
    const handleDelete=()=>{
      fetch("http://localhost:8000/blogs/"+data.id,{
        method:"DELETE",
      }).then(()=>{
      navigate('/')
      })
    }
  return (
    <div>
      {isLoading && <div className=" spinner flex justify-center items-center h-screen"></div>}
      {error && <div className=" spinner flex justify-center items-center h-screen"></div>}
      {data && 
      <article className='flex flex-col  items-center my-8 max-w-sm md:max-w-6xl text  mx-auto'>
        <h1 className='my-4 text-xl font-semibold uppercase  '>{data.title}</h1>
        <p className='text-slate-700 text leading-loose'>{data.body}</p>
        <p className='my-4 text'> Written by <span className='pl-2 uppercase text text-pink-500'>{data.author}</span></p>
<div className='flex w-full gap-8  '>
        <Link to={`/update/${data.id}`} className='btn'>Edit</Link>
        <button className= 'btn' onClick={handleDelete}>Delete</button>
</div>
        </article>
        }

    </div>
  )
}

export default BlogDetails