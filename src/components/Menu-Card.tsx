import type { DataFormate } from "../interfaces/Data.Interface"

// import  ButtonControls from './Button-Controls'
// interface CardFormate {CardData:DataFormate, Add: (string) => void, Remove: () => void, display: number}

 interface CardFormate {CardData:DataFormate}


const MenuCard = ({CardData}:CardFormate) => {
  const {image, name, category, price} = CardData;
 
  return (
    <div>
        <div className="relative">
            <figure>
                 <img src={image?.mobile} alt='some dessert mm' className='rounded-[7px] md:hidden w-[330px]' />
                 <img src={image?.tablet} alt='some dessert tt' className='rounded-[7px] hidden md:block xl:hidden  w-[350px]' />
                 <img src={image?.desktop} alt='some dessert ll' className='rounded-[7px] hidden md:hidden xl:block  w-[300px]' />
            </figure>
           <div className="flex relative top-[-35px] left-15 md:left-20 xl:left-12">
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