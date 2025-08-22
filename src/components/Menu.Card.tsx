import type { CountData } from "../interfaces/Data.Interface"
import MenuButton from './Menu.Button'
import  ButtonControls from './Button.Controls'


 interface CardFormate {CardData:CountData, Add: (name: string) => void,Remove: (name:string) => void,
   ButtonActive:(name: string) => void}


const MenuCard = ({CardData, Add, Remove, ButtonActive}:CardFormate) => {
  const {image, name, category, price, count, isActive} = CardData;
 
  return (
    <div>
        <div className="relative">
            <figure>
                 <img src={image?.mobile} alt='some dessert mm'  className={`rounded-[5px] md:hidden w-[330px] overflow-hidden ${count > 0 ? 'outline-2 outline-orange-500' : ''}` } />
                 <img src={image?.tablet} alt='some dessert tt' className={`rounded-[5px] hidden md:block xl:hidden  md:w-[350px] lg:w-[400px] overflow-hidden ${count > 0 ? 'outline-2 outline-orange-500' : ''}`} />
                 <img src={image?.desktop} alt='some dessert ll' className={`rounded-[5px] hidden md:hidden xl:block  xl:w-[250px] xg:w-[275px] overflow-hidden ${count > 0 ? 'outline-2 outline-orange-500' : ''}`} />
            </figure>
           <div className="flex relative top-[-35px] left-15 lg:left-24 md:left-20 xl:left-8 nt:left-10">
            {
             !isActive ? <MenuButton ButtonActive={ButtonActive} name={name} />
           : <ButtonControls Add={Add} Remove={Remove}  display={count} name={name} />
            }
           </div>
        </div>
        <div className="mb-2">
           <p><span className="text-rose-300 my-1">{category}</span></p>
           <h2 className="text-rose-900 font-semibold  my-1">{name}</h2>
           <p className="text-bt-Orange-0 font-semibold  my-1">${price.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default MenuCard