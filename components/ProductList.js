// Next modules
import Link from 'next/link';
// Custom Commponents
import ProductCard from './ProductCard';
// Framer Motion
import { motion } from 'framer-motion';

// Costum easing
let easing = [0.6, -0.05, 0.01, 0.99];
// Custom variant
const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  };
  
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

const ProductList = ({ products }) => {

    return (
        <motion.div exit={{ opacity: 0}}>
            <div className="container center">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href='/products/[id]'
                        as={`/products/${product.id}`}>
                        <div>
                            <ProductCard key={product.id} product={product} />
                        </div>
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}

export default ProductList;
