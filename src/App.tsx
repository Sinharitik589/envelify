import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import Layout from './components/Layout';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="h-screen w-screen">
      <NavBar/>
      <Layout>
        <Button text={"Click"} onClick={() =>{console.log("Hello")}}/>
      </Layout>
    </div>
  )
}

export default App
