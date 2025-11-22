import Header from '../components/Header';
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>About Our Ecommerce Platform</h1>
        <div>
          <p>
          We started with a simple belief: shopping online should be effortless, trustworthy, and enjoyable. What began as a small venture has grown into a thriving marketplace that serves thousands of customers every day.
          Our mission is to bring you quality products at prices that make sense, without compromising on service or reliability. We carefully curate every item in our catalog, working directly with trusted suppliers and brands to ensure you get exactly what you expect.
          Behind every order is a dedicated team that genuinely cares about your experience. From the moment you browse our site to the day your package arrives, we're committed to making things right.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
