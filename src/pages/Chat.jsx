import { useEffect, useState } from "react";
import Message from "../components/Message";
import axiosInstance from "../axios";
import { Link, useParams } from "react-router-dom";
import Answer from "../components/Answer";
export default function Chat() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        setUser(null)
        axiosInstance
            .get(
                "me/",
            ).then(function(request) {setUser(request.data)}).then(
                axiosInstance
            .get(
                "me/",
            ).then(function(request) {setUser(request.data)})
            .catch(function() {setUser(null)}))
      }, [])
    const [title, setTitle] = useState(null)
    const [loadNr, setLoadNr] = useState(20)
    const { chatId } = useParams()
    const [msgs, setMsgs] = useState([])
    useEffect(() => {
        axiosInstance
        .get(
        "chats/"+chatId,
        ).then(function(request) {request.data[0].messages!==msgs&&setMsgs(request.data[0].messages); setTitle(request.data[0].name)})
        .catch(axiosInstance
            .get(
            "chats/"+chatId,
            ).then(function(request) {request.data[0].messages!==msgs&&setMsgs(request.data[0].messages); setTitle(request.data[0].name)})
            .catch(function(error) {console.log(error)}))
    },[])
    useEffect(() => {
        const interval = setInterval(() => {
            axiosInstance
            .get(
            "chats/"+chatId,
            ).then(function(request) {request.data[0].messages!==msgs&&setMsgs(request.data[0].messages)})
            .catch(function(error) {console.log(error)})
          }, 1000);
        return () => clearInterval(interval);
      }, []);
    useEffect(() => {
        window.location.href = '#last-msg'
        if(document.getElementById('msg')) document.getElementById('msg').focus()
    }, [msgs.length])
    return (
        <>
        <div className="text-[24px] text-center whitespace-nowrap">{title}</div>
        <div className="flex py-4 px-4 justify-center">
            <div className="border-2 border-[#CCCCCC50] rounded-[4px] w-[900px]">
                <ul className="flex flex-col px-[1vw] h-[calc(100vh-149px-56px-36px)] gap-1 overflow-auto">
                    <button onClick={() => {loadNr<msgs.length&&setLoadNr(loadNr+20)}} className="text-center border-b-2 border-[#CCCCCC50] py-2">{loadNr<msgs.length?'Load +20 (may decrase the fluency)':'beginning of this chat'}</button>
                    {msgs.slice(-loadNr).map((msg) => <li key={msg.id} className={user&&msg.user===user.username?"ml-auto":'mr-auto'}><Message username={msg.user} bg={user&&msg.user===user.username?'#E7EFFF':"#ffffff"} message={msg.message} /></li>)}
                    <li id="last-msg"></li>
                </ul>
                <div className="flex w-[900px] items-stretch max-w-[90vw] p-4">
            {user?<><textarea className="rounded-l-[4px] flex-auto max-w-[90vw] py-1.5 px-2 border-2 border-[#CCCCCC50]" placeholder="scrivi un messaggio..." type="text" name="msg" id="msg" />
            <button className="bg-amber-500 rounded-r-[4px] font-semibold text-white px-2" onClick={() => {
                document.getElementById('msg').focus()
                if(document.getElementById('msg').value.replace(' ', '')!=='') {
                    var msg = document.getElementById('msg').value
                    document.getElementById('msg').value = ''
                    axiosInstance
                        .post(
                            "message/", {
                                message: msg,
                                chat: chatId
                            }
                        ).then(
                            axiosInstance
                                .get(
                                "chats/"+chatId,
                                ).then(function(request) {setMsgs(request.data[0].messages)})
                                .catch(function(error) {console.log(error)})
                        )
                    }
            }}>SEND</button></>
              :
              <Link to='/login' className="flex items-center justify-center italic">Login/Register to chat</Link>}
          </div>
            </div>
        </div>
        </>
    )
}