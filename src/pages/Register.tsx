import React, { useState ,useEffect } from 'react'
import FormInput from '../components/FormInput'
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import axios from 'axios';

export default function Register() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passError,setPassError] = useState("");
    const [cpassError,setCpassError] = useState("");
    const [firstNameError,setFirstNameError] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {authenticated} = useStore()
   
    useEffect(() => {
       if(authenticated)  navigate("/");
    },[navigate,authenticated])

    const register = async () => {
        
        setEmailError("");
        setPassError("");
        setCpassError("");
        setFirstNameError("");
        try{
          
          if(!email) return setEmailError("Email Empty");
          if(!password) return setPassError("Password Empty");
          if(!firstName) return setFirstNameError("First Name Empty");
          if(password!==cpassword) return setCpassError("Password Not Matching")
          setLoading(true);
          const res = await axios.post(`http://localhost:5050/user/register`,{email,password,firstname:firstName,lastname:lastName});
          setLoading(false);
          alert("User Registered Kindly Verify The Account!");
          navigate("/login");
        }
        catch(e){
          setLoading(false); 
          console.log({e});
        }
       }

  return (
    <div className="w-96 h-max  shadow-lg rounded-md p-3 relative">
        <h3 className='text-center text-gray-600 font-bold text-2xl mb-2'>
            Register
        </h3>
        <div className="flex">
            <div className="flex-1  pr-1"><FormInput id="" label="First Name"  error={firstNameError} setValue={setFirstName} /></div>
            <div className="flex-1 pl-1 "><FormInput id="" label="Last Name" setValue={setLastName} error={""} /></div>
        </div>
        <FormInput id="" label="Email" setValue={setEmail} error={emailError} type="email"/>
        <FormInput id="" label="Password" setValue={setPassword} error={passError} type="password" />
        <FormInput id="" label="Confirm Password" setValue={setCPassword} error={cpassError} type="password" />
        <div className='w-full flex justify-center items-center mt-4'>
            <Button disabled={loading} className='mr-0 ml-0 text-sm' simple text={!loading?"Register":"Registering ...."} onClick={register}/>
        </div>
        <div className='mt-0.5 text-gray-600 font-bold text-center'>OR</div>
        <Link to="/login"><div className='mt-0.5 text-blue-600 font-bold text-center'>Login</div></Link>

    </div>
  )
}
