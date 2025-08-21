import cake from '../../assets/images/illustration-empty-cart.svg'
import type { CountData } from '../../interfaces/Data.Interface'
import CardOrderItem from '../../components/Cart.OrderItem'
 import Carbon from '../../assets/images/icon-carbon-neutral.svg'
interface OrderFormate {orderData:CountData[], handleRemove: (name:string) => void}

const OrderCart = ({orderData, handleRemove}:OrderFormate) => {

    const numOfCartItems = orderData.filter(item => item.isActive === true).
    map((item) => item.count)
    .reduce((acc, num) => acc + num,0)

    const converte = orderData.filter(item => item.isActive === true).
    map((item) => ({total: item.count * item.price}))

    const totalPrice = converte.map((item) => item.total)
    .reduce((acc, num) => acc + num,0)

     const pass = orderData.filter(item => item.isActive === true)
 
  return (
    <div className=' w-[330px] md:w-[350px] xl:w-[400px] p-3 lg:p-7  bg-white rounded-[7px] m-4'>
        <h3 className='font-black text-bt-Orange-0 text-[1.3em] pl-2 my-4'>Your Cart ({numOfCartItems}) </h3>
        {
          numOfCartItems <= 0 ?
         ( <div className='flex flex-col justify-center items-center my-3'>
            <figure>
                <img src={cake} alt='empathy-cart icon' />
            </figure>
            <p className='text-rose-400'>Your added items will appear here</p>
          </div> )
          : (<div className='mb-4'>
           {
            pass.map((item) => (
                <CardOrderItem CartData={item} handleRemove={handleRemove} />
            ))
           }
           <div>
            <div className='mb-4 flex flex-row justify-between items-center 
            px-1.5 py-3 h-[50px] my-2.5'>
                 <p>order total</p> 
                 <h5 className='font-black text-rose-950 text-[1.4em]'>${totalPrice.toFixed(2)} </h5>
            </div>
         
            <div className='bg-rose-100 rounded-[12px] flex flex-row justify-center items-center h-[60x] p-2'>
              <img src={Carbon} alt='' className='mr-2'/>
              <p>This is a <span  className='font-medium text-rose-900'>carbon-neutral</span> </p>
             </div>
  
             <div className='flex flex-row my-4 items-center'>
                 <button className='w-[330px] h-[47px] mx-auto text-center bg-bt-Orange-0 text-white font-semibold rounded-[25px]'>Corfirm Order</button>
             </div>

             </div>
        </div>)
        }
    </div>
  )
}

export default OrderCart