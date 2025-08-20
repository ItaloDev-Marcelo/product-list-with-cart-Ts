
import Increment from '../assets/images/icon-increment-quantity.svg';
import Descress from '../assets/images/icon-decrement-quantity.svg'

interface ButtonFormate {
    Add: (name: string) => void;
    Remove:(name:string) => void;
    display: number;
    name: string;
}


const ButtonControls = ({Add, Remove, display, name}:ButtonFormate ) => {

  return (
    <div className='bg-bt-Orange-0 text-white w-[200px] h-[50px] flex justify-between items-center px-4 rounded-[25px]'>
        <div><button onClick={() => Add(name)}> <div className='border-1 rounded-[50%] p-2 mt-1'><img src={Increment} alt=''/></div> </button></div>
        <div><span className='font-semibold text-white'>{display}</span></div>
        <div><button onClick={() => Remove(name)}> <div className='border-1 rounded-[50%] p-2 py-3 mt-1'><img src={Descress} alt=''/></div></button></div>
    </div>
  )
}

export default ButtonControls