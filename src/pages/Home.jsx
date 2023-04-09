import Message from "../components/Message"
import Answer from '../components/Answer'
import Question from "../components/Question"
import SearchInput from "../components/SearchInput"
import UserCard from '../components/UserCard'

import axiosInstance from "../axios"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { redirect } from "react-router-dom"
import Button from "../components/Button"
import ChatSection from "./ChatSection"
export default function Home(props) {
    useEffect(() => {
        axiosInstance
            .get("me/")
            .then(function(request) {console.log(request.data)})
    }, [])
    return (
        <div>
            <Link to='/chats'><button>Chats(click)</button></Link>
        </div>
    )
}
