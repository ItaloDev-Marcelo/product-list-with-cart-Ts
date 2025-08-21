import addToCart from '../assets/images/icon-add-to-cart.svg'
interface MenuBtn {ButtonActive: (name:string) => void ,name: string}
const MenuButton = ({ButtonActive, name}:MenuBtn) => {
  return <button onClick={() => ButtonActive(name)} className='bg-white font-semibold text-rose-900 w-[200px]
   lg:w-[175px]
  border h-[50px] flex justify-center items-center px-4 rounded-[25px]'> <img src={addToCart} alt='cart icon' /> Add to Cart </button>
}

export default MenuButton