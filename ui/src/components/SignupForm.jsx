import { useState, useGlobal } from "reactn";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [token, setToken] = useGlobal("token");
  const [user, setUser] = useGlobal("user");
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1337/auth/signup", formState);
      const { data } = await axios.post("http://localhost:1337/auth/login", {
        username: formState.username,
        password: formState.password,
      });
      setUser(data.user);
      setToken(data.token);
      setSignedUp(true);
    } catch (error) {
      console.log(error);
      setError("Ivalid form data");
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      {signedUp && <Navigate replace to="/home" />}
      <form className="flex flex-col jus" onSubmit={handleSubmit}>
        <input
          className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring mb-2"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formState.username}
        />
        <input
          className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring mb-2"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formState.email}
        />
        <input
          className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring mb-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formState.password}
        />
        <input
          className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring mb-2"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formState.confirmPassword}
        />
        <button className="bg-green-800 hover:bg-green-500 text-white font-bangers font-xl py-2 px-4 border border-black rounded mt-3 shadow-md shadow-green-300">
          Sign Up 😎
        </button>
        <Link
          className="bg-green-800 hover:bg-green-500 text-white text-center font-bangers font-xl py-2 px-4 border border-black rounded mt-3 shadow-md shadow-green-300"
          to="/login"
        >
          or login
        </Link>
      </form>
    </>
  );
};

export default SignupForm;
