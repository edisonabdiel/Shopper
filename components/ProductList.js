// Next modules
import Link from 'next/link';
// Custom Commponents
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {

    return (
        <>
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
        </>
    )
}

export default ProductList;
