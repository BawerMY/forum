import Button from './Button'

export default function UserCard(props) {
    return (
        <div className="inline-flex border-2 border-[#CCCCCC50] rounded-[4px] max-w-[90wv] w-[328px] flex-col p-6 pt-4 items-center">
            <div className="w-24 h-24 relative mb-3">
                <div className="absolute -right-[70px] -bottom-7 flex">
                    <img height='36px' src="imgs/hp.svg" alt="hp" />
                    <h4 className='text-[36px] font-bold text-[#B2F296]'>+</h4><h4 className='text-[36px] font-bold text-[#B2F296]'>{props.hp}</h4>
                </div>
                <img className="w-24 h-24 rounded-full bg-[#D9D9D9]" src={props.img} alt="img" />
            </div>
            <h3 className="font-medium text-[27px]">{props.username}</h3>
            <p className={`text-[19px] mt-5 w-full text-center ${props.me && 'mb-5'}`}>{props.description}</p>
            {props.me&&
                <Button text='Modifica' color='#367FFF' />
            }
        </div>
    )
}
