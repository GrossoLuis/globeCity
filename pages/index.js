import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import { getLatestItems } from '../services/items'
import Product from '../components/products'
import styleProducts from '../styles/product.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({items}) {
  return (
      <Layout title="Bienvenido">
        <div className={styles.banner}>
          <div className={styles.bannerBackground}>
            <div className={styles.bannerInfo} >
                <h2>Anima tus fiestas este 2023</h2>
                <p>
                Las mejores ofertas y productos para vos! <br></br>
                La mejor calidad, servicio y precio en solo un lugar.  
             
                </p>
            </div>
          </div>
        </div>


        <h3>Latest Products</h3>
        <div className={styleProducts.items} >
        {items &&
        items.map((item) => (
          <Product key={item.id} item={item} showAs="item" />
        ))}
        </div>


      </Layout>
      

 
  )
}


export async function getStaticProps(){
  const res = await getLatestItems(); 
  return {
    props: {
      items: res,
    },
  };
}
