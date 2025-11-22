import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  const cart = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 129.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 79.99, quantity: 3 },
  ];
  const totalPrice = cart.reduce((currProd, prod) => currProd + (prod.price*prod.quantity),0);
  return (
    <>
    <Header/>
    <div className="container py-4">
      <h1>Shopping Cart</h1>
      {cart.map((c, index) => (
        <div key={index} className="card">
          <div className="card-body d-flex justify-content-between">
            <div>
              <h5 className="fw-semibold mb-2">{c.name}</h5>
              <p className="mb-1">
                Price: <strong>${c.price}</strong>
              </p>
              <p className="mb-0">
                Quantity: <strong>{c.quantity}</strong>
              </p>
            </div>
            <div className="text-end fw-semibold">
              Total: ${(c.price * c.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      ))}
      
      <h4 className="mt-3 mb-2"><span className="fw-bold">Total Price:</span> <span>${totalPrice}</span></h4>
      
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
