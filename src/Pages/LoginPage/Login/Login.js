import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="h-screen bg-gray-200 flex justify-content-center items-center">
            <div className='bg-white rounded w-3/4 md:w-1/2 mx-auto p-4'>
                <h1 className='mb-4'>Login</h1>
                <form className=''>
                    <input type='text' className='border w-full block my-2 p-2 rounded focus:outline-gray-400' placeholder='Email' />
                    <input type='password' className='border w-full block my-2 p-2 rounded focus:outline-gray-400' placeholder='Password' />
                    <Link to="/admin">
                        <button className='bg-sky-600 text-sm text-gray-100 px-4 py-1 rounded mt-4'>Sign in</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;