import { useEffect, useState } from "react"
import axiosInstance from "../axios"
import Answer from "../components/Answer"
import { Link } from "react-router-dom"
export default function ChatSection(props) {
    const [chats, setChats] = useState(null)
    useEffect(() => {
        axiosInstance
            .get("chats/")
            .then(function(request) {setChats(request.data)})
    }, [])
    
    return (
        <div className="flex flex-col items-center pt-4 gap-1">
            {chats&&chats.map((chat) => <div className="flex flex-col" key={chat.id}>
                <Link to={'/chats/'+chat.id+'#last-msg'}><Answer username={chat.name} message={chat.description} answer={props.user&&chat.user===props.user.username} /></Link>
            </div>)}
        </div>
    )
}