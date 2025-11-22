import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Featured Products</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://placehold.co/400x300/png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Product 1</h5>
                <p class="card-text">
                  Description product 1. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <Link to="/products/1" class="btn btn-primary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://placehold.co/400x300/png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Product 2</h5>
                <p class="card-text">
                  Description product 2. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <Link to="/products/2" class="btn btn-primary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://placehold.co/400x300/png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Product 3</h5>
                <p class="card-text">
                  Description product 3. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <Link to="/products/3" class="btn btn-primary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
