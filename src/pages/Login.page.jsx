import React from 'react'
import LoginImage from "../assets/images/login.png";
import Logo from "../assets/images/logo.png";



function LoginPage() {
    return (
        <div className='flex'>
            <div className='w-5/12 h-screen bg-gray-100 flex items-center justify-center flex-col  '>
                <img src={Logo} width="180" alt="" className='absolute top-10 left-10' />
                <img src={LoginImage} width='250' alt="" />
            </div>


        </div>
    )
}

export default LoginPage