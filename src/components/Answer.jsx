export default function Answer(props) {// fix paragraph overflow
    return (
        <div className={`flex flex-col gap-1 bg-[${props.answer?'#E7FFDE':'#ffffff'}] w-[610px] max-w-[90vw] justify-start rounded-[10px] p-2 pl-3 border-2 border-[#CCCCCC50]`}>
            <div className={`flex justify-between`}>
                <h3 className="text-2xl">{props.username}</h3>
                {/* <div className="flex flex-col items-end">
                    <span className="text-[20px]">29/03/2023</span>
                    <span className="text-[15px] text-[#CCCCCC50]">09:59</span>
                </div> */}
            </div>
            <p className="break-words">{props.message}</p>
            {props.answer?
                <div className="flex justify-end">
                    <img className="h-[30px]" src="imgs/hp.svg" alt="" />
                </div>
            :
            props.myQuestion &&
            // onclick set this answer  
            <div className="flex justify-end">
                <img className="h-[30px]" src="imgs/hp-grey.svg" alt="" />
            </div>
            }
        </div>
    )
}