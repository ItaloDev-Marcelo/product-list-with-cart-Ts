import MenuCard from '../components/Menu.Card'
import Data from '../Data/Data'
import {useState} from 'react'
import type { CountData } from '../interfaces/Data.Interface'
import OrderCart from '../helpers/Order-Cart/Order.Cart'


const CartProductsLayout = () => {

    const [cartData, setCartData] = useState<CountData[]>(Data)
  // const defaultFormate = Data;


   const Add  = (name: string) => {
          setCartData((item) => 
            item.map((item) => 
              item.name === name ? {...item, count: item.count + 1}: item
            )
          )
  }

    const Remove  = (name: string) => {
          setCartData((item) => 
            item.map((item) => 
              item.name === name && item.count === 0 ? {...item, count: 0, isActive: false} : item.name === name ? {...item, count: item.count - 1} : item
            )
    )}
 
     const ButtonActive = (name: string) => {
          setCartData((item) => 
            item.map((item) => 
              item.name === name ? {...item, isActive: true} : item
            )
         )
     }

     const filteringOrder = cartData.filter((item) => item.isActive === true)

     const handleRemove = (name: string) => {
            setCartData((item) => 
            item.map((item) => 
              item.name === name ? {...item, count: 0, isActive: false}  : item
            ))
     } 

    //  const confirmOrder =  () => {
    //      setCartData(defaultFormate)
    //  }

  return (
         <div className='p-1 mx-2 flex flex-col items-center xl:flex-row xl:justify-between xl:items-start lg:p-7 xg:px-15 xg:py-9'>
          <main>
          <h1 className="text-rose-900 font-semibold text-[1.5em] tb:text-[2.5em] lg:text-[2.2em] my-10 xg:text-[2.7em]">Dessets</h1>
          <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  md:gap-6 xl:gap-7'>
             {
        cartData.map((item) => (
          <MenuCard CardData={item} Add={Add} Remove={Remove} ButtonActive={ButtonActive}  />
        ))
      }
          </section>
          </main>
          <div className='my-5 xl:my-0'>
            <OrderCart orderData={filteringOrder} handleRemove={handleRemove} />
          </div>
         </div>
  )
}

export default CartProductsLayout 