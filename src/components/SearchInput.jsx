export default function SearchInput(props) {
    return (
        <div>
             <input id={props.id} onChange={props.onChange} className={`p-2 bg-[#FBFBFB] border-2 border-[#CCCCCC50] text-[20px] rounded-[4px] w-0 w-[${props.width}]`} placeholder="search..." />
        </div>
    )
}