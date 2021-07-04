// Axios 
import axios from 'axios';
//Custom Componets
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Header from '../components/Header';
// Framer Motion modules
import { motion } from 'framer-motion';
// Variants
import { fadeInUp, stagger, fadeIn, fadeInSlide } from '../variants'


const HomeView = ({ products }) => {
  return (
    <>
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInSlide}>
        <NavBar />
      </motion.div>
      <motion.div initial="initial" animate='animate' exit={{ opacity: 0 }} variants={fadeInUp}>
        <Meta />
        <div className="header">
          <Header />
        </div>
        <div className="container ">
          <div className="product-row">
            <ProductList products={products} />
          </div>
        </div>
      </motion.div>
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