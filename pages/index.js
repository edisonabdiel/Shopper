// Axios 
import axios from 'axios'
//Custom Componets
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Header from '../components/Header';


const HomeView = ({ products }) => {

  return (
    <>
      <Meta />
      <div className="header">
        <Header />
      </div>
      <div className="container ">
        <div>
        <NavBar />
        </div>
          <div className="product-row">
            <ProductList products={products} />
        </div>
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