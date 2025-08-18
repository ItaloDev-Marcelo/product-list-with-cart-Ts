
import Increment from '../assets/images/icon-increment-quantity.svg';
import Descress from '../assets/images/icon-decrement-quantity.svg'

// interface ButtonFormate {
//     add: () => void,
//     remove:() => void,
//     display: number
// }

const ButtonControls = () => {

  return (
    <div className='bg-bt-Orange-0 text-white w-[200px] h-[50px] flex justify-between items-center px-4 rounded-[25px]'>
        <div><button> <div className='border-1 rounded-[50%] p-2'><img src={Increment} alt=''/></div> </button></div>
        <div><span className='font-semibold text-white'>0</span></div>
        <div><button> <div className='border-1 rounded-[50%] p-2 py-3'><img src={Descress} alt=''/></div></button></div>
    </div>
  )
}

export default ButtonControls