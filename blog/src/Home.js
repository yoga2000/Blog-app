import React, { useEffect, useState } from 'react'
import BlogList from './BlogList/BlogList'
import useFetch from './useFetch'
import './App.css'

const Home = () => {
  const title = 'All Blogs!' 
 const{ data,isLoading,error}=useFetch(("http://localhost:8000/blogs"))
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading&&<div className=" spinner flex justify-center items-center h-screen"></div>}
      {data && <BlogList blogs={data} title={title}/>}
      {console.log(data)}
    </div>
  )
}

export default Home