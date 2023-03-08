import Layout from "../../components/layout";
import Product from "../../components/products";
import { getItemData, getPathsFromIds } from "../../lib/util";

export default function ProductPage({productInfo}){
    return <Layout>
        <Product item={productInfo.data} showAs="Page" />

    </Layout>

}

export async function getStaticPaths(){
    const paths =  await getPathsFromIds ()
    return {
        paths: paths, 
        fallback : false, 
    }
}

export async function  getStaticProps({params}){
    const id = params.id;
    const products = await getItemData(id)

    return {
        props: {
            productInfo: products,
        }
    }
}


