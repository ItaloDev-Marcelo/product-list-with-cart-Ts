import CenterImage from './ImageCenter'
import type { ButtonCtlFormate } from '../interfaces/ButtonCtl';



const ButtonControls = ({Add, Remove, display, name}:ButtonCtlFormate ) => {

  const { decrement,increment} = CenterImage

  return (
    <div className='bg-bt-Orange-0 text-white w-[200px]  lg:w-[200px] xl:w-[175px] h-[50px] flex justify-between 
    items-center px-4 rounded-[25px]'>
        <div><button onClick={() => Add(name)}> <div className='border-1 rounded-[50%] p-2 mt-2'><img src={increment} alt=''/></div> </button></div>
        <div><span className='font-semibold text-white'>{display}</span></div>
        <div><button onClick={() => Remove(name)}> <div className='border-1 rounded-[50%] p-2 py-3 mt-2'><img src={decrement} alt=''/></div></button></div>
    </div>
  )
}

export default ButtonControls