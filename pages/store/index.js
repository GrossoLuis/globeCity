import Layout from "../../components/layout"
import { getItems } from "../../services/items"
import Product from "../../components/products";
import styleItems from '../../styles/product.module.css'








export default function Index({items}) {
   return ( 
    <Layout title="Store">
        <h1>Productos:</h1>
        
        <div className={styleItems.items} >
        {items && items.map((item) =>
        <Product key={item.id} item={item} showAs="Default" />
         )}

        </div>
       
    </Layout>


   )
}

export async function getStaticProps(){
    const res = await getItems();
    return {
        props: {
            items : res,
        },
    }


}