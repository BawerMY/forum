import Message from "../components/Message"
import Answer from '../components/Answer'
import Question from "../components/Question"
import SearchInput from "../components/SearchInput"
import UserCard from '../components/UserCard'

import axiosInstance from "../axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
export default function Home(props) {
    const [me, setMe] = useState(null)
    useEffect(() => {
        axiosInstance
            .get("me/")
            .then(function(request) {setMe(request.data)})
    }, [])
    return (
        <div>
            {me&&<Navigate to='/chats' />}
            <Link to='/register' className="text-[128px] fixed top-[50vh] left-[50vw] -translate-x-[50%] -translate-y-[50%]">Welcome</Link>
        </div>
    )
}
