import { useAppContext } from './stateWrapper'
import style from '../styles/cartButton.module.css'



export default function CartButton ({item}) {
    const cart = useAppContext()

    function handleClick(){
        cart.addItemToCart(item)
        cart.openCart();
    }



    return <button className={style.button} onClick={handleClick} >Agregar al carrito</button>
}