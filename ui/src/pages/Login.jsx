import React from 'react'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="">Welcome Back!</h1>
        <LoginForm />
    </div>
  )
}

export default Login