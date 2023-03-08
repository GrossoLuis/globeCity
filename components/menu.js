import Link from "next/link";
import style from '../styles/menu.module.css'
import { useAppContext } from "./stateWrapper";

export default function Menu(){
    const cart = useAppContext()

    function handleOpenCart(){
        cart.openCart();

    }

    return(
        <nav className={style.menu}>
            <div>
                <Link className={style.link} href="/">Inicio</Link>
                <Link className={style.link} href="/store">Tienda</Link>
                <Link className={style.link} href="/faq">FAQ</Link>


            </div>
            <div>
                <a className={style.link} href="#" onClick={handleOpenCart}>
                    Carrito ({cart.getNumberOfItems()})
                </a>
            </div>




        </nav>

    )
}