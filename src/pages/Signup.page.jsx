import React from 'react'
import signUpImage from "../assets/images/signup.png";
import Logo from "../assets/images/logo.png";




function SignUp() {
    return (

        <div className='flex'>


            <div className=' w-full flex flex-col justify-center items-start md:h-screen h-full px-10 py-20 md:px-40' >

                <h1 className='font-bold text-3xl'>Welcome To Gentex</h1>
                <p className='text-gray-400 font-normal mt-1'>Welcome To Gentex! Please enter your details</p>


                <form method='' className='mt-11 w-full '>
                    <div>
                        <label className='block'>Name</label>
                        <input type={"text"} placeholder="Enter your name" className=' text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey' />
                    </div>
                    <div>
                        <label className='block mt-4'>Gender</label>
                        <input type={"text"} placeholder="Enter your gender" className=' text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey' />
                    </div>

                    <div>
                        <label className='block mt-4'>Date Of Birth</label>
                        <input type={"text"} placeholder="Enter your DOB" className=' text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey' />
                    </div>

                    <div>
                        <label className='block mt-4'>Aadhar Number</label>
                        <input type={"text"} placeholder="Enter your aadhar number" className=' text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey' />
                    </div>

                    <div>
                        <label className='block mt-4'>Email</label>
                        <input type={"text"} placeholder="Enter your Email" className=' text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey' />
                    </div>
                    <div>
                        <label className='block mt-4'>Password</label>
                        <input type={"password"} placeholder="Enter your password" className=' text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey' />
                    </div>

                    <div className='mt-5'>
                        <input type={"submit"} className="bg-lime-400 text-black w-full py-3 rounded-xl" value={"Sign up"} />
                    </div>
                    {/* 
                    <div className='flex w-full items-center justify-center'  >
                        <hr className='h-2 mt-9 w-full' />
                        <p>Or</p>
                    </div> */}

                </form>



            </div>




            {/* login right section  */}
            <div className='w-10/12 h-screen bg-gray-100 md:flex items-center justify-center flex-col  hidden md:visible  '>
                <img src={Logo} width="180" alt="" className='absolute top-10 right-14' />
                <img src={signUpImage} className="h-full w-full" style={{ objectFit: 'cover' }} alt="" />
            </div>
        </div>
    )
}

export default SignUp



// name
// aadhar
// phone
// gender
// dob
// email
// password