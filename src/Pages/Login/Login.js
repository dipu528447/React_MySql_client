import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const [user,setUser]=useContext(UserContext)
    const [email,setEmail]=useState('');
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname||'/login';
    useEffect(()=>{
        if(user.email){
            navigate(from,{replace:true})
        }
    },[user])
    
    function validation(){
        if(!email){
            alert("please enter your email");
            return false
        }
        

        if(!userName)
        {
            alert("please enter your username");
            return false
        }
        // else{
        //     var userformat= /^([&$%-]+).{4,20}$/;
        //     if(userName.match(userformat)) 
        //     { 
        //         console.log(userName.match(userformat))
        //         return false
        //     }
        //     else
        //     { 
        //         return true;
        //     }          
        // }

        if(!password)
        {
            alert("please enter your password");
            return false
        }
        // else{
        //     var passformat= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
        //     if(password.match(passformat)) 
        //     { 
        //         alert('Correct, try another...')
        //         return true;
        //     }
        //     else
        //     { 
        //         alert('password should be contains of uppercase lowercase and special character combination!')
        //         return false;
        //     }          
        // }
        return true;
    }
    function emailLogin(event){
        event.preventDefault();
        console.log(email,password)
        if(validation()){
            alert('ok')
            setUser({email:email})
            navigate("/")
        }
    }
    
    return (
        <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="w-full"
                        alt="Sample image"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={emailLogin}>
                        
                        <div className="mb-6">
                            <input
                            type="email"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email address"
                            onChange={(event)=>setEmail(event.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Enter the username"
                            onChange={(event)=>setUserName(event.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                            onChange={(event)=>setPassword(event.target.value)}
                            />
                        </div>

                        
                        <div className="text-center lg:text-left">
                            <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                            Login
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;