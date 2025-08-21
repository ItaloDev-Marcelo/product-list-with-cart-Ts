
import Close from '../assets/images/icon-remove-item.svg'
import type { CountData } from '../interfaces/Data.Interface';

interface OrderFormate {
    CartData: CountData;
    handleRemove: (name: string) => void
}

const CartOrderItem = ({CartData, handleRemove}:OrderFormate) => {

  return (
 <>
      <div className='flex flex-row justify-between items-center px-2 my-5'>
        <div >
            <h4 className='text-rose-900 font-semibold pb-3 '>{CartData.name}</h4>
            <p> <span className="text-bt-Orange-0 font-semibold mr-5">{CartData.count}x</span> 
            <span className='text-rose-400 font-light mr-3'>@ ${CartData.price}</span> 
             <span className="text-rose-400 font-semibold">${CartData.price * CartData.count}</span>   </p>
        </div>
        <button className='border-1  cursor-pointer border-rose-400 rounded-[50%] p-1 mt-1'
         onClick={() => handleRemove(CartData.name)}>
            <img src={Close} alt=''/>
        </button>
    </div>
    <hr className='px-2 border  border-gray-300' />
 </>
  )
}

export default CartOrderItem