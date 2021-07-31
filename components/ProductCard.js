// Styles
import styles from '../styles/ProductCard.module.css';
// Framer Motion modules
import { motion } from 'framer-motion';
// Variants - Animations
import { imgPop } from '../variants';

const ProductCard = ({ product }) => {
    

    return (
        <div>
            <div className={styles.card}>
                <motion.img variants={imgPop} className={styles.image} src={product.image} width={250} />
                <div className={styles.title}>
                    <h5 className={styles.h5}>{product.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
