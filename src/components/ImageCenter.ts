import addToCart from '../assets/images/icon-add-to-cart.svg';
import carbonNeutral from '../assets/images/icon-carbon-neutral.svg';
import decrement from '../assets/images/icon-decrement-quantity.svg';
import increment from '../assets/images/icon-increment-quantity.svg';
import orderConfimed from '../assets/images/icon-order-confirmed.svg';
import remove from '../assets/images/icon-remove-item.svg';
import empathyCart from '../assets/images/illustration-empty-cart.svg';


interface CenterImageFormate  {
    addToCart: string,
    carbonNeutral: string,
    decrement: string,
    increment: string,
    orderConfimed: string,
    remove: string,
    empathyCart: string
}

const CenterImage:CenterImageFormate = {
    addToCart,
    carbonNeutral,
    decrement,
    increment,
    orderConfimed,
    remove,
    empathyCart
}

export default CenterImage