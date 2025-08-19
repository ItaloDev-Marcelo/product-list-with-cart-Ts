import MenuCard from './components/Menu-Card'
import Data from './Data/Data'
import {useState} from 'react'
import type { CountData } from './interfaces/Data.Interface'
function App() {

  const [count, setCount] = useState(0)
  const [copy, setCopy] = useState<CountData[]>(Data)

  const Add  = (name) => {
    setCount(item => (
      item?.map((item:CountData) => item.name === name ? {...item, count: item.count + 1} : item)
    ))
  }

   const Remove  = () => {
    setCount(prev => prev - 1)
    if(count <= 0 ) setCount(0)
  }


  console.log(copy)


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
      {
        Data.map((item) => (
          <MenuCard CardData={item} Add={Add} Remove={Remove} display={count}  />
        ))
      }
    </div>
  ) 
}

export default App
