import React from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../components/logo.png";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <h1 className="flex justify-center text-6xl p-5 bg-green-800 text-white font-bold shadow-lg shadow-green-300 font-body">
        Welcome Back! 👀
      </h1>
      <div className="flex flex-col h-screen bg-black items-center">
        <LoginForm />

        <img className="object-contain w-40 h-40 pt-3" src={Logo}></img>
      </div>
      <Footer />
    </>
  );
}

export default Login;
