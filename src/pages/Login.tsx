import React, { useState ,useEffect } from 'react'
import FormInput from '../components/FormInput'
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import axios from 'axios';
import { createBucket } from '../apirequest/api';


export default function Login() {

 const [email,setEmail] = useState("");
 const [emailError,setEmailError] = useState("");
 const [passwordError,setPasswordError] = useState("");
 const [password,setPassword] = useState("");
 const [loading,setLoading] = useState(false);
 const navigate = useNavigate();
 const {authenticated,setAuthenticated} = useStore()

 useEffect(() => {
    if(authenticated)  navigate("/");
 },[navigate,authenticated])

 const login = async () => {
  
  try{
    setEmailError("");
    setPasswordError("");
    if(!email) return setEmailError("Email Empty");
    if(!password) return setPasswordError("Password Empty");
    setLoading(true);
    const res = await axios.post(`http://localhost:5050/user/login`,{email,password});
    let token = res.data.token;
    if(setAuthenticated) {
      localStorage.setItem("token",token);
      setAuthenticated(token);
    }
    setLoading(false); 
  }
  catch(e){
    setLoading(false); 
    console.log({e});
  }
 }

  return (
    <div className="w-80 h-max  shadow-lg rounded-md p-3 relative">
        <h3 className='text-center text-gray-600 font-bold text-2xl mb-2'>
            Login
        </h3>
        <FormInput id="" label="Email" setValue={setEmail} error={""} type="email"/>
        <FormInput id="" label="Password" setValue={setPassword} error={""} type="password"/>
        <div className='w-full flex justify-center items-center mt-4'>
            <Button disabled={loading} className='mr-0 ml-0 text-sm w-fit' simple text={loading?"Logging In...":"Login"} onClick={login}/>
        </div>
        <div className='mt-1 text-gray-600 font-bold text-center'>OR</div>
        <div className='mt-0;5 text-blue-600 font-bold text-center'><Link to="/register">Register</Link></div>

    </div>
  )
}
