import Tag from './Tag'

export default function Question(props) {
    var tags = props.tags.map((tag) => <Tag key={tag} tag={tag} />)
    return (
        <div className={`flex flex-col w-[610px] max-w-[90vw] pb-6 min-h-[310px] rounded-[10px] border-2  ${props.answered&& 'border-l-[26px] border-l-[#B2F296]'}  border-[#CCCCCC50]`}>
            <div className="flex p-2 pl-6 items-center justify-between">
                <div className="flex items-center gap-0.5">
                    <div className="w-11 h-11"><img className="w-11 h-11 rounded-full bg-[#D9D9D9]" src="" alt="img" /></div>
                    <h3 className="text-[22px] font-medium">{props.username}</h3>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[20px]">29/03/2023</span>
                    <span className="text-[15px] text-[#CCCCCC50]">09:59</span>
                </div>
            </div>
            <div className="flex pl-8">
                <h3 className="font-bold text-2xl mr-2">{props.username}</h3>
                <div className='flex gap-2 flex-wrap'>
                    {tags}
                </div>
            </div>
            <div className={'h-0.5 bg-[#CCCCCC50] mr-6 mt-4 mb-2 '+(!props.answered&&' ml-6')}></div>
            <p className='break-words ml-9'>{props.description}</p>
        </div>
    )
}