import Layout from "../components/layout"
import style from '../styles/faq.module.css'


export default function FAQ(){
    return (
        <Layout>
            <div className={style.faq}>
            <h2>Preguntas Frecuentes</h2>
            <div>
                <h3 className={style.primero}>Aceptan transferencias?</h3>
                <p>
                    Yes, were send all countries, make sure to enter 
                    international adress in english for send products 
                    and not remember u postal code 
                </p>
                <hr></hr>
                <h3>Hacen envios?</h3>
                <p>
                    Yes, were send all countries, make sure to enter 
                    international adress in english for send products 
                    and not remember u postal code 
                </p>
                <hr></hr>

                <h3>Puedo hacer reservas?</h3>
                <p>
                    Yes, were send all countries, make sure to enter 
                    international adress in english for send products 
                    and not remember u postal code 
                </p>
                <hr></hr>

                <h3>Aceptan Mercado Pago?</h3>
                <p>
                    Yes, were send all countries, make sure to enter 
                    international adress in english for send products 
                    and not remember u postal code 
                </p>


            </div>
            </div>
        </Layout>
    )
}