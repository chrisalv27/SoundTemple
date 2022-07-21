import SignupForm from "../components/SignupForm";
import Logo from "../components/logo.png";
import Footer from "../components/Footer";

function Signup() {
  return (
    <>
      <h1 className="flex justify-center text-6xl p-5 bg-green-800 text-white font-bold animate-pulse shadow-lg shadow-green-300 font-body">
        Sound Temple
      </h1>
      <div className="flex flex-col h-screen bg-black items-center">
        <h2 className="flex justify-center p-5 text-3xl text-white mt-10 shadow-lg shadow-green-300 rounded-lg mb-5 font-bangers">
          Signup! 😁
        </h2>
        <SignupForm />
        <img className="object-contain w-40 h-40 pt-3 " src={Logo}></img>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
