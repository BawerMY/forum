export default function Message(props) {// fix paragraph overflow
    return (
        <div className={`flex gap-1 bg-[${props.bg}] max-w-[85vw] justify-start rounded-[10px] p-2 pl-3 border-2 border-[#CCCCCC50]`}>
            {/* <div className="w-11 h-11"><img className="w-11 h-11 rounded-full bg-[#D9D9D9]" src="" alt="img" /></div> */}
            <div className="flex flex-col flex-auto">
                <div className={`flex justify-between`}>
                    <h3 className="text-base text-[#367FFF]">{props.username}</h3>
                    {/* <div className="flex flex-col items-end">
                        <span className="text-[#CCCCCC50] text-[9px]">29/03/2023</span>
                        <span className="text-[11px]">09:59</span>
                    </div> */}
                </div>
                <p className="break-words">{props.message}</p>
            </div>
        </div>
    )
}