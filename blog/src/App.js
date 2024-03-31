import React from 'react'
import Nav from './Nav'
import Home from './Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './404/NotFound'
import Update from './Update'

const App = () => {
  return (
    <BrowserRouter>  
    <Routes>
     <Route path='/' element={<><Nav/><Home/></>}/> 
     <Route path='/create' element={<><Nav/><Create/></>}/> 
     <Route path='/blog/:id' element={<><Nav/><BlogDetails/></>}/> 
     <Route path='/update/:id' element={<><Nav/><Update/></>}/> 
     <Route path='*'element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App