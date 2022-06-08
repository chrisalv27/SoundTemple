import SignupForm from "../components/SignupForm"




function Signup() {
  return (
    <>
    <h1 className="flex justify-center text-6xl p-5 bg-green-800 text-white font-bold">Sound Temple</h1>
    <div className="flex flex-col h-screen bg-black items-center">
        <h2 className="flex justify-center p-5 text-3xl text-white font-bold mt-3">Signup! 😁</h2>
        <SignupForm />
    </div>
    </>
  )
}

export default Signup