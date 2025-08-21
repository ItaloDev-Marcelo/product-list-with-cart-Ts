import type { CountData } from "../interfaces/Data.Interface"
import addToCart from '../assets/images/icon-add-to-cart.svg'
import  ButtonControls from './Button-Controls'


 interface CardFormate {CardData:CountData, Add: (name: string) => void,Remove: (name:string) => void, ButtonActive:(name: string) => void}


const MenuCard = ({CardData, Add, Remove, ButtonActive}:CardFormate) => {
  const {image, name, category, price, count, isActive} = CardData;
 
  return (
    <div>
        <div className="relative">
            <figure>
                 <img src={image?.mobile} alt='some dessert mm'  className={`rounded-[5px] md:hidden w-[330px] overflow-hidden ${count > 0 ? 'outline-2 outline-orange-500' : ''}` } />
                 <img src={image?.tablet} alt='some dessert tt' className={`rounded-[5px] hidden md:block xl:hidden  md:w-[350px] overflow-hidden ${count > 0 ? 'outline-2 outline-orange-500' : ''}`} />
                 <img src={image?.desktop} alt='some dessert ll' className={`rounded-[5px] hidden md:hidden xl:block  xl:w-[300px] overflow-hidden ${count > 0 ? 'outline-2 outline-orange-500' : ''}`} />
            </figure>
           <div className="flex relative top-[-35px] left-15 md:left-20 xl:left-12">
            {
             !isActive ? <button onClick={() => ButtonActive(name)} className='bg-white font-semibold text-rose-900 w-[200px] border h-[50px] flex justify-center items-center px-4 rounded-[25px]'> <img src={addToCart} alt='cart icon' /> Add to Cart </button>
           : <ButtonControls Add={Add} Remove={Remove}  display={count} name={name} />
            }
           </div>
        </div>
        <div className="mb-2">
           <p><span className="text-rose-300 my-1">{category}</span></p>
           <h2 className="text-rose-900 font-semibold  my-1">{name}</h2>
           <p className="text-bt-Orange-0 font-semibold  my-1">${price}</p>
        </div>
    </div>
  )
}

export default MenuCard