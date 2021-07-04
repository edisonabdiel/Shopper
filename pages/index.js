// Next modules
import Head from 'next/head'
// Styless
import styles from '../styles/HomeView.module.css'
// Axios 
import axios from 'axios'
//Custom Componets
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const HomeView = ({ products }) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MyShop</title>
      </Head>
      <div className="container ">
        <NavBar />
        <div>
          <div className="product-row">
          <h1>Header Shop</h1>
            <ProductList products={products} />
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  const products = await res.data;


  return {
    props: {
      products
    }
  }
}

export default HomeView;