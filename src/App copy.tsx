import MenuCard from './components/Menu.Card'
import Data from './Data/Data'
import {useState} from 'react'
import type { CountData } from './interfaces/Data.Interface'
import OrderCart from './helpers/Order-Cart/Order.Cart'

function App() {
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
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
      {
        cartData.map((item) => (
          <MenuCard CardData={item} Add={Add} Remove={Remove} ButtonActive={ButtonActive}  />
        ))
      }
    </div>
    
      <OrderCart orderData={filteringOrder} handleRemove={handleRemove} />
    </>
  ) 
}

export default App
