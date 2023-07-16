import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Starred from './pages/Starred';
import Bin from './pages/Bin';
import Recent from './pages/Recent';
import Shared from './pages/Shared';
import { useStore } from './context/StoreContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Preview from './pages/Preview';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  const {dark,setAuthenticated,header,setFolders} = useStore();

  useEffect(() => {
    if(localStorage.getItem("token")){
      if(setAuthenticated) setAuthenticated(localStorage.getItem("token"));
    }
  },[])

  

  return (
      <div className={`h-screen w-screen overflow-hidden ${dark?"dark":""}`}>
        <BrowserRouter>
          <NavBar/>
          <Layout>
            <Routes>
                <Route element={<ProtectedRoute><Main/></ProtectedRoute>} path="/" />  
                <Route element={<ProtectedRoute><Main/></ProtectedRoute>} path="/folders/Home/*" />  
                <Route element={<ProtectedRoute><Preview/></ProtectedRoute>} path="/preview" />  
                <Route element={<ProtectedRoute><Starred/></ProtectedRoute>} path="/starred" />  
                <Route element={<ProtectedRoute><Bin/></ProtectedRoute>} path="/bin" />  
                <Route element={<ProtectedRoute><Recent/></ProtectedRoute>} path="/recent" />  
                <Route element={<ProtectedRoute><Shared/></ProtectedRoute>} path="/shared" />  
                <Route element={<Login/>} path="/login" />
                <Route element={<Register/>} path="/register" />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
  )
}

export default App
