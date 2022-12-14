import React, { useState } from "react";
import LoginImage from "../assets/images/left.jpg";
import Logo from "../assets/images/logo.png";
import GoogleIcon from "../assets/images/Google.png";
import authController from "../controllers/user/authController";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitForm = (e) => {
    e.preventDefault();
    authController.doLogin({ email, password }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="flex">
      {/* login right section  */}
      <div className="w-9/12 h-screen bg-lime-100 md:flex items-center justify-center flex-col  hidden md:visible  ">
        <img
          src={Logo}
          width="180"
          alt=""
          className="absolute top-10 left-14"
        />
        <img
          src={LoginImage}
          className="h-full w-full"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>

      <div className=" w-full flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold text-3xl">Welcome back</h1>
        <p className="text-gray-400 font-normal mt-1">
          Welcome back! Please enter your details
        </p>

        <form onSubmit={submitForm} className="mt-11">
          <div>
            <label className="block">Email</label>
            <input
              type={"text"}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey"
            />
          </div>

          <div>
            <label className="block mt-4">Password</label>
            <input
              type={"password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" text-slate-600 focus:border-red-400-500  w-full px-3 placeholder:text-slate-400 rounded-xl py-3 mt-2 border border-grey"
            />
          </div>
          <div className="mt-5">
            <input
              type={"submit"}
              className="bg-lime-400 text-black px-36 py-3 rounded-xl"
              value={"Login"}
            />
          </div>
          {/* 
                    <div className='flex w-full items-center justify-center'  >
                        <hr className='h-2 mt-9 w-full' />
                        <p>Or</p>
                    </div> */}
          <button
            type="submit"
            className="mt-4 bg-white border  py-3 px-20 items-center justify-center text-gray-600 font-medium rounded-xl flex  gap-3"
          >
            <img src={GoogleIcon} width="30" alt="" />
            <p>Sign in with google</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
;
