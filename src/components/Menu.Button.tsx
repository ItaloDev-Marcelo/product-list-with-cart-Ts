import CenterImage from './ImageCenter'
import type { MenuBtn } from '../interfaces/ButtonMenu'


const MenuButton = ({ButtonActive, name}:MenuBtn) => {

  const {addToCart } =  CenterImage 

  return <button onClick={() => ButtonActive(name)} className='bg-white font-semibold text-rose-900 w-[200px]
   lg:w-[200px] xl:w-[175px] 
  border border-rose-300 h-[50px] flex justify-center items-center px-4 rounded-[25px]'> <img src={addToCart} alt='cart icon' /> Add to Cart </button>
}

export default MenuButton