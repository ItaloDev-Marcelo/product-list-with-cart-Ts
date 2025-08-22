import CenterImage from './ImageCenter'
import type { OrderFormate } from '../interfaces/OrderItems'

const CartOrderItem = ({CartData, handleRemove}:OrderFormate) => {

  const {remove} = CenterImage 
  const total = CartData.price * CartData.count

  return (
 <>
      <div className='flex flex-row justify-between items-center px-2 my-5'>
        <div >
            <h4 className='text-rose-900 font-semibold pb-3 '>{CartData.name}</h4>
            <p> <span className="text-bt-Orange-0 font-semibold mr-5">{CartData.count}x</span> 
            <span className='text-rose-400 font-light mr-3'>@ ${CartData.price.toFixed(2)}</span> 
             <span className="text-rose-400 font-semibold">${total.toFixed(2)}</span>   </p>
        </div>
        <button className='border-1  cursor-pointer border-rose-400 rounded-[50%] p-1 mt-1'
         onClick={() => handleRemove(CartData.name)}>
            <img src={remove} alt=''/>
        </button>
    </div>
    <hr className='px-2 border  border-gray-300' />
 </>
  )
}

export default CartOrderItem