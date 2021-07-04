// Nexts Modules
import Link from 'next/link';
// Custom Components
import Meta from '../../../components/Meta';
import NavBar from '../../../components/NavBar';
// Axios
import axios from 'axios';

const ProductPage = ({ product }) => {
  return (
    <div>
      <Meta />
      <NavBar />
      <div className='fullscreen'>
        <div className='product'>
          <div className='img'>
            <img key={product.image} src={product.image} />
          </div>
          <div className='product-details'>
            <div className='inner'>
              <Link href='/'>
                <div>
                  <p className='go-back'>Back to products</p>
                </div>
              </Link>
              <div>
                <span className='category'>{product.category}</span>
              </div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <div className='additonals'>
                <span>Free Shipping</span>
              </div>
              <div className='qty-price'>
                <div className='qty'>
                  <div className='minus'>-</div>
                  <div className='amount'>1</div>
                  <div className='add'>+</div>
                </div>
                <span className='price'>{'€' + product.price}</span>
              </div>
              <div className='btn-row'>
                <button className='add-to-cart'> Add to cart</button>
                <button className='subscribe'> Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
