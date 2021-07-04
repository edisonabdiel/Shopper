// Next modules
import Link from 'next/link';
// Custom Commponents
import ProductCard from './ProductCard';
// Framer Motion
import { motion } from 'framer-motion';
// Variants
import { fadeInUp, stagger } from '../variants';


const ProductList = ({ products }) => {

    return (
        <motion.div exit={{opacity: 0}} initial="initial" animate="animate" variants={stagger} >
            <div className="container center">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href='/products/[id]'
                        as={`/products/${product.id}`}>
                        <motion.div exit={{opacity: 0}} variants={fadeInUp}>
                            <ProductCard key={product.id} product={product} />
                        </motion.div>
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}

export default ProductList;
