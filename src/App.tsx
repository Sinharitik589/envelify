import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Folder from './components/Folder';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Starred from './pages/Starred';
import Bin from './pages/Bin';
import Recent from './pages/Recent';
import Shared from './pages/Shared';

function App() {

  return (
    <div className="h-screen w-screen bg-black">
      <BrowserRouter>
        <NavBar/>
        <Layout>
          <Routes>
              <Route element={<Main/>} path="/" />  
              <Route element={<Starred/>} path="/starred" />  
              <Route element={<Bin/>} path="/bin" />  
              <Route element={<Recent/>} path="/recent" />  
              <Route element={<Shared/>} path="/shared" />  
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
