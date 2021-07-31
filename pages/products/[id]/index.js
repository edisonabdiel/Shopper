// Nexts Modules
import Link from 'next/link';
// Custom Components
import Meta from '../../../components/Meta';
import NavBar from '../../../components/NavBar';
// Framer Motion
import { motion } from 'framer-motion';
// Axios
import axios from 'axios';
// Variants - Animations
import { imgSlide, fadeInUp, staggerFast, fadeIn, fadeInSlide } from '../../../variants';

const ProductPage = ({ product }) => {
  return (
    <motion.div exit={{opacity: 0 }} initial='initial' animate='animate' variants={staggerFast} >
      <Meta />
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeIn}>
        <NavBar />
      </motion.div>
      <div className='fullscreen'>
        <div className='product'>
          <div className='img'>
            <motion.img variants={imgSlide}
              key={product.image} src={product.image} />
          </div>
          <div className='product-details'>
            <div className='inner'>
              <Link href='/'>
                <motion.div variants={fadeInUp}>
                  <p className='go-back'>Back to products</p>
                </motion.div>
              </Link>
              <motion.div variants={fadeInUp}>
                <span className='category'>{product.category}</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} >{product.title}</motion.h1>
              <motion.p variants={fadeInUp} >{product.description}</motion.p>
              <motion.div variants={fadeInSlide} className='additonals'>
                <span>Free Shipping</span>
                <span>In Stock</span>
              </motion.div>
              <motion.div variants={fadeInUp} className='qty-price'>
                <div className='qty'>
                  <div className='minus'>-</div>
                  <div className='amount'>1</div>
                  <div className='add'>+</div>
                </div>
                <span className='price'>{'€' + product.price}</span>
              </motion.div>
              <motion.div variants={fadeInSlide} className='btn-row'>
                <button className='add-to-cart'> Add to cart</button>
                <button className='subscribe'> Subscribe</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const product = await res.data;


  return {
    props: {
      product,
    },
  }
}

export default ProductPage;
