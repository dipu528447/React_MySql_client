import axios from 'axios';
import React, { useEffect, useState } from 'react';


const UserList = () => {
    const [userlist,setUserList]=useState([]);
    const [id,setID]=useState('')
    const [newUser,setNewUser]=useState({
        name:"",
        userName:"",
        image:"",
        email:"",
        role:"",
        password:"",
        status:""
    })
    
    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const res=await axios.get("http://localhost:8800/users")
                setUserList(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchUsers()
    },[])
    const handleDelete=async (id)=>{
        try{
            await axios.delete("http://localhost:8800/users/"+id)
            setUserList(userlist.filter(usr=>usr.id!==id))
        }
        catch(err){
            console.log(err)
        }
    }
    const handleChange=(e)=>{
        setNewUser(prev=>(
            {...prev,[e.target.name]:e.target.value}
        ))
    }
    const handleSubmit=async e=>{
        e.preventDefault();
        try{
            console.log(id,newUser)
            await axios.put("http://localhost:8800/users/"+id,newUser)            
        }
        catch(err){
            console.log(err)
        }
        const fetchUsers=async()=>{
            try{
                const res=await axios.get("http://localhost:8800/users")
                setUserList(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchUsers()
    }
    return (
        <div>
            <div className="flex flex-col justify-end">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-1/2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-1/2">
                                <thead className="border-b">
                                    <tr>
                                    
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Username
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        email
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        profile picture
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        role
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        status
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Action
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userlist.map((usr,index)=>{
                                        return (
                                            <tr className="border-b" key={index}>
                                            
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {usr.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {usr.userName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {usr.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="shrink-0">
                                                    <img src={usr.image} className="rounded-full w-10" alt="Profile Picture"/>
                                                </div>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {usr.role}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {usr.status}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="flex space-x-2 justify-center">
                                                    <button type="button" onClick={()=>setID(usr.id)}className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Edit</button>                                                                                                        
                                                    <button type="button" onClick={()=>handleDelete(usr.id)} className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>

                                
                            
                            <div className="modal fade fixed top-10 left-96 border rounded hidden w-1/2 h-full outline-none overflow-x-hidden overflow-y-auto"
                            id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
                                    <div
                                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                        <div
                                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalFullscreenLabel">
                                            User Update
                                            </h5>
                                            <button type="button"
                                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    <div className="modal-body relative p-4">
                                        <div className="mb-6">
                                            <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Please enter the name"
                                            name="name"
                                            onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="please enter the user name"
                                            name="userName"
                                            onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                            type="email"
                                            className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="please enter the email"
                                            name="email"
                                            onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="plaease enter the password"
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
                                                    aria-label="Default select example" name="role"  onChange={handleChange}
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
                                                    aria-label="Default select example" name="status"  onChange={handleChange}
                                                    >
                                                        <option value='Activated'>Activated </option>
                                                        <option value='Blocked'>Blocked</option>    
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div
                                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                            <button type="button"
                                            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                            data-bs-dismiss="modal"
                                            onClick={handleSubmit}>
                                            Submit
                                            </button>
                                            
                                            <button type="button"
                                            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                            data-bs-dismiss="modal">
                                            Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>    
    );
};

export default UserList;