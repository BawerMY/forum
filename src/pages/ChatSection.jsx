import { useEffect, useState } from "react"
import axiosInstance from "../axios"
import Answer from "../components/Answer"
import { Link } from "react-router-dom"
import Button from "../components/Button"
export default function ChatSection(props) {
    const [chats, setChats] = useState(null)
    const [user, setUser] = useState(null)
    const [create, setCreate] = useState(false)
    useEffect(() => {
        axiosInstance
            .get("chats/")
            .then(function(request) {setChats(request.data)})
        axiosInstance
            .get(
                "me/",
            ).then(function(request) {setUser(request.data)})
    }, [])
    const [desc, setDesc] = useState(null)
    const [name, setName] = useState(null)
    return (
        <div className="flex flex-col-reverse items-center pt-4 gap-1">
            {chats&&chats.map((chat) => <div className="flex flex-col" key={chat.id}>
                <Link to={'/chats/'+chat.id+'#last-msg'}><Answer username={chat.name} message={chat.description} answer={user&&user===user.username} /></Link>
            </div>)}

            {user&&(create?<div className={`flex flex-col gap-1 bg-[#ffffff] w-[610px] max-w-[90vw] justify-start rounded-[10px] p-2 pl-3 border-2 border-[#CCCCCC50]`}>
                <div className={`flex justify-between`}>
                    <input type="text" onChange={() => setName(document.getElementById('name').value)} name="name" id="name" className="text-2xl w-full" placeholder="new chat's name" />
                </div>
                <textarea id="desc" onChange={() => setDesc(document.getElementById('desc').value)} placeholder="new chat's description" ></textarea>
                <div className="flex justify-end gap-1">
                    <Button text="Cancel" color="#cccccc" type="button" onClick={() => setCreate(false)} />
                    <Button text='Create' color='#367FFF' type='button' onClick={() => {
                        // if(name.replace(' ', '')==='') return alert("Can't create a chat without name")
                        var d = [document.getElementById('name').value, document.getElementById('desc').value]
                        document.getElementById('name').value='';
                        document.getElementById('desc').value='';
                        axiosInstance
                        .post(
                          "chats/", {
                            name: d[0],
                            description: d[1],
                            type: "chat"
                        }
                        ).then(
                            axiosInstance
                            .get("chats/")
                            .then(function(request) {setChats(request.data)})
                        ).catch(
                            axiosInstance
                        .post(
                          "chats/", {
                            name: d[0],
                            description: d[1],
                            type: "chat"
                        }
                        ).then(
                            axiosInstance
                            .get("chats/")
                            .then(function(request) {setChats(request.data)})
                        ))
                    }} />
                </div>
            </div>
            :
            <button onClick={() => setCreate(true)} className={`flex justify-center bg-[#ffffff] w-[610px] max-w-[90vw] rounded-[10px] p-2 pl-3 border-2 border-[#CCCCCC50]`}>
                <h3 className="text-2xl">Create new chat</h3>
            </button>
            )}
        </div>
    )
}