import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Folder from './components/Folder';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Main from './pages/Main';

function App() {

  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <NavBar/>
        <Layout>
          <Routes>
              <Route element={<Main/>} path="/" />  
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
