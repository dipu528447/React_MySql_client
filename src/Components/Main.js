import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'tw-elements';

const Main = () => {
    return (
        <div className='mt-20'>
            
            <Link to={"/addUser"}>
                <div className="flex space-x-2 justify-center">
                    <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add User</button>
                </div>
            </Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;