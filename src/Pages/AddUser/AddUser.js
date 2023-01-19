import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const AddUser = () => {
    
    const [user,setUser]=useContext(UserContext)
    const navigate=useNavigate();
    const [newUser,setNewUser]=useState({
        name:"",
        userName:"",
        image:"",
        email:"",
        role:"Admin",
        password:"",
        status:"Activated"
    })
    const handleChange=(e)=>{
        setNewUser(prev=>(
            {...prev,[e.target.name]:e.target.value}
        ))
    }
    const handleSubmit=async e=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/users",newUser)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            
                                <div className="mb-6">
                                    <label
                                    className="form-control block w-full text-center px-4 py-2 text-4xl font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    >
                                        Add New User
                                    </label>
                                </div>    
                                <div className="mb-6">
                                    <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="enter the name"
                                    name="name"
                                    onChange={handleChange}
                                    />
                                    
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="enter the user name"
                                    name="userName"
                                    onChange={handleChange}
                                    />
                                    
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="enter the email"
                                    name="email"
                                    onChange={handleChange}
                                    />
                                    
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="enter the password"
                                    name="password"
                                    onChange={handleChange}
                                    />
                                    
                                </div>
                                
                                <div className="mb-6">
                                    <div className="flex justify-center">
                                        <div className="mb-3 w-full">
                                            <select className="form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                            aria-label="Default select example" name="role" onChange={handleChange}
                                            >
                                                <option value='Admin'>Admin </option>
                                                <option value='User'>User</option>    
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="mb-6">
                                    <input
                                    type="file"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Choose File"
                                    name="image"
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-center">
                                        <div className="mb-3 w-full">
                                            <select className="form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                            aria-label="Default select example" name="status" onChange={handleChange}
                                            >
                                                <option value='Activated'>Activated </option>
                                                <option value='Blocked'>Blocked</option>    
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            
                                <button
                                    type="button"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                              
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddUser;