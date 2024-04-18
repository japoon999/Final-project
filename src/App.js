import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Homes/Home';
import CAKES from './CAKESS/CAKES';
import About from './Abouts/About';
import Blog from './Blogs/Blog';
import Contact from './Contacts/Contact';
import BlogDetails from './Blogs/BlogDetails';










let App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Cakes' element={<CAKES/>}></Route>
            <Route path='/about' element ={<About />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/BlogDetails' element={<BlogDetails />}></Route>
            <Route path='/contact' element={<Contact />} ></Route>

        </Routes>

    )
}

export default App;