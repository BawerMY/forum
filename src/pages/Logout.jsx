import { useEffect } from "react"
import { Link } from "react-router-dom"
export default function Logout() {
    useEffect(() => {
        localStorage.clear()
    }, [])
    return (
        <div>
            logged out <Link className="text-blue-600" to='/login'>Login</Link> <Link to='/register'>Register</Link>
        </div>
    )
}
