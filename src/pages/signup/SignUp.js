import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: 'ganesh',
        email: 'ganesh@123gmail.com',
        password: 'ganesh@123'
      });

    const handleChange=(e)=> {
        setFormData({
          ...formData,
          [e.target.id]:e.target.value,
        });
    };

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
        const res=await fetch(`http://localhost:8080/api/signup` , 
        {
        method:'POST',
        headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
        })
        const data = await res.json();
        navigate("/");
        } catch (error) {
            console.log(error)
            navigate("/");
        }
    }

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-black">
        <h2 className="text-3xl text-black text-center font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input onChange={handleChange} type="text" id="username" className="w-full border rounded-md py-2 px-3 mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input onChange={handleChange} type="email" id="email" className="w-full border rounded-md py-2 px-3 mt-1" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input onChange={handleChange} type="password" id="password" className="w-full border rounded-md py-2 px-3 mt-1" />
        </div>
        <button type='submit' className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
