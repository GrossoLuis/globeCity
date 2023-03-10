import Link from "next/link"
import Image from "next/image"

import style from '../styles/product.module.css'
import { convertToPath } from "../lib/util"
import CartButton from "./cartButton"



export default function Product({item, showAs, qty}){
    if(showAs== 'Page'){
           return <div className={style.page}>
                <div>
                <Image src={item.image} 
                  alt={item.description} 
                  width="500" 
                  height="550"/>
                </div>

                <div className={style.info}>
                    <div><h2>{item.title}</h2></div>
                    <div className={style.price}> ${item.price}</div>
                    <div>{item.description}</div>
                    <div> 
                        <CartButton item = {item} />
                      </div>
                </div>
             </div> 
    }

    if(showAs=='ListItem'){
        return <div className={style.listItem}>
                  <div>
                    <Image src={item.image} 
                        alt={item.description} 
                        width="100" 
                        height="100"/>
                    
                  </div>
                  <div>
                    <div>
                     <h3>
                     {item.title}
                     </h3>
                    </div>
                    <div>${item.price}</div>
                    {qty == 0 ? "" : <div>{qty} Unidades </div> }
                    {qty == 0 ? "" : <div>Subtotal: ${qty * item.price}</div> }

               


                  </div>
               </div>

    }

    return <div className={style.item} >
        <div>
            <Link href={`/store/${convertToPath(item.title)}`} >
                <Image src={item.image} 
                  alt={item.description} 
                  width="250" 
                  height="300"/>
            
            </Link>
        </div>
        <div>
            <h3> 
            <Link href={`/store/url-a-mi-item`} >
                {item.title}
            </Link> 
            </h3>
        </div>

        <div>
            ${item.price}
        </div>
        <div>
        <CartButton item={item} />
        </div>
    </div>

}