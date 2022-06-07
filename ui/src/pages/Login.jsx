import React from 'react'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border pi8 m-10 flex flex-col">
        <h1 className="">Welcome Back!</h1>
        <LoginForm />
    </div>
  )
}

export default Login