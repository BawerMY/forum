export default function Button(props) {
    return (
        <button className={"bg-["+props.color+"] px-[27px] py-1.5 leading-7 text-white rounded-full text-[22px]"} type={props.type} onClick={props.onClick} >{props.text}</button>
    )
}