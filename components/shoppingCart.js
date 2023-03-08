import { useAppContext } from "./stateWrapper"
import Product from './products'
import style from '../styles/shoppingCart.module.css'


export default function ShoppingCart(){
    const cart = useAppContext()
    function handleCloseCart(){
        cart.closeCart()
    }

    function getTotal(){
        const total = cart.items.reduce((acc, item) => acc + item.qty * item.price, 0);
        return total
    }

    return <div className={style.shoppingCart} style={{display: cart.isOpen ? 'block' : "none"}}>

        <button onClick={handleCloseCart} className={style.close} >Cerrar</button>
         {cart.items.length == 0 ? (<div className={style.empty} >Carrito vacio</div>) : (<> 
         <h3>Your items</h3>
        <div> 
            {cart.items.map(item => <Product key={item.id} item={item} showAs="ListItem" qty = {item.qty} />)}
        </div>
        <div>Total: ${getTotal()}</div>

         </>)}   


       
       
    </div>

}