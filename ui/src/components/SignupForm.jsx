import { useState, useGlobal } from "reactn"
import { Navigate, Link} from "react-router-dom"
import axios from "axios"

const SignupForm = () => {

    const [token, setToken] = useGlobal("token")
    const [user, setUser] = useGlobal("user")
    const [error, setError] = useState("")
    const [signedUp, setSignedUp] = useState(false)
    const [ formState, setFormState ] = useState({
        username: "",
        email: "",
        password: "", 
        confirmPassword: ""
    })
    
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

const handleSubmit = async (e) => {
    
    e.preventDefault()
    try{
        await axios.post("http://localhost:1337/auth/signup", formState)
        const {data} = await axios.post("http://localhost:1337/auth/login", {
            username: formState.username,
            password: formState.password
        })
        setUser(data.user)
        setToken(data.token)
        setSignedUp(true)

    }
    catch (error) {
        console.log(error)
        setError("Ivalid form data")

    }
    
    

}

    return (
        <>
        {error && <div>{error}</div>}
        {signedUp && <Navigate replace to="/home" />}
        <form className="flex flex-col jus" onSubmit={handleSubmit}>
            <input className="" type="text" name="username" placeholder="Username" onChange={handleChange} value={formState.username} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formState.email} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formState.password} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={formState.confirmPassword} />
            <button className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 border border-black rounded mt-3">Sign Up 😎</button>
            <Link className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 border border-black rounded mt-3" to="/login">or login</Link>
        </form>
        </>
    )
}

export default SignupForm