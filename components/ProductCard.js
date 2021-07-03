import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
    

    return (
        <div>
            <div className={styles.card}>
                <img className={styles.image} src={product.image} width={250} />
                <div className={styles.title}>
                    <h5 className={styles.h5}>{product.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
