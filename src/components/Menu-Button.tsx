import addToCart from '../assets/images/icon-add-to-cart.svg'
const MenuButton = () => {
  return <button className='bg-white font-semibold text-rose-900 w-[200px] border h-[50px] flex justify-center items-center px-4 rounded-[25px]'> <img src={addToCart} alt='cart icon' /> Add to Cart </button>
}

export default MenuButton