import React from 'react'
import LoginImage from "../assets/images/login.jpg";


function LoginPage() {
    return (
        <div className='flex'>
            <div className='w-5/12 h-screen bg-violet-100 flex items-center justify-center '>

                <img src={LoginImage} alt="" />

            </div>


        </div>
    )
}

export default LoginPage