import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductLists = () => {
  const products = [
    {
      id: '1',
      name: 'Product 1',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$99.99',
      availableColors: ['Red', 'Blue', 'Green'],
      isReturnApplicable: true,
      productImageUrl: 'https://placehold.co/300x300/png',
    },
    {
      id: '2',
      name: 'Product 2',
      description:
        'This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$129.99',
      availableColors: ['White', 'Black'],
      isReturnApplicable: true,
      productImageUrl: 'https://placehold.co/300x300/png',
    },
    {
      id: '3',
      name: 'Product 3',
      description:
        'This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$79.99',
      availableColors: ['Yellow'],
      isReturnApplicable: false,
      productImageUrl: 'https://placehold.co/300x300/png',
    },
    {
      id: '4',
      name: 'Product 4',
      description:
        'This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$49.99',
      availableColors: ['Purple', 'Yellow'],
      isReturnApplicable: true,
      productImageUrl: 'https://placehold.co/300x300/png',
    },
  ];

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="mb-4">Products</h2>
        {products.map((product) => (
          <div className="card mb-2" key={product.id}>
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={product.productImageUrl}
                  className="img-fluid"
                  alt={product.name}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <small className="text-muted">Price: {product.price}</small>
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <h2>Affordable Products</h2>
        {products
          .filter((product) => product.price.split('$')[1] < 80)
          .map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="mt-2">Price: {product.price}</p>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductLists;
