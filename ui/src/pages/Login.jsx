import React from 'react'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <>
      <h1 className="flex flex-col text-3xl p-10 bg-green-800 items-center">Welcome Back! 👀</h1>
      <div className="flex flex-col h-screen bg-black items-center">
        <LoginForm />
      </div>

    </>
  )
}

export default Login



