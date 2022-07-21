import { useState, useGlobal } from "reactn";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [token, setToken] = useGlobal("token");
  const [user, setUser] = useGlobal("user");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
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
      const { data } = await axios.post(
        "http://localhost:1337/auth/login",
        formState
      );
      setUser(data.user);
      setToken(data.token);
      setLoggedIn(true);
      console.log("logged in");
    } catch (error) {
      setError("Invalid Login");
    }
  };

  return (
    <>
      {loggedIn && <Navigate replace to="/home" />}
      <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
        <input
          className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring mb-2"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formState.username}
        />
        <input
          className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formState.password}
        />
        <button className="bg-green-800 hover:bg-green-500 text-white font-bangers font-xl py-2 px-4 border border-black rounded mt-3 shadow-md shadow-green-300">
          Login
        </button>
        <Link
          className="bg-green-800 hover:bg-green-500 text-white font-bangers font-xl px-4 border border-black rounded mt-3 shadow-md shadow-green-300"
          to="/signup"
        >
          or signup
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
