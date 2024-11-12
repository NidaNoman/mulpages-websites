

import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Hydrating Face Cream',
    description: 'A nourishing cream for deep hydration and glowing skin.',
    price: '$25.00',
    image: '/image/hy-pic.jpeg',
  },
  {
    id: 2,
    name: 'Anti-Aging Serum',
    description: 'A potent serum to reduce fine lines and wrinkles.',
    price: '$30.00',
    image: '/image/anti-age.jpg',
  },
  {
    id: 3,
    name: 'Exfoliating Scrub',
    description: 'Gentle scrub to remove dead skin cells and reveal radiant skin.',
    price: '$15.00',
    image: '/image/sc-p.jpg',
  },
  {
    id: 4,
    name: 'Sunscreen SPF 50',
    description: 'Broad-spectrum sunscreen for ultimate skin protection.',
    price: '$20.00',
    image: '/image/sun-image.jpeg',
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4">
                <img src={product.image} alt={product.name} className="rounded-md mb-4 w-full h-64 object-cover" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-lg font-bold">{product.price}</p>
                <button className="mt-4 bg-pink-400 text-white py-2 px-4 rounded hover:bg-pink-500">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-pink-200 text-black font-serif py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Skin Bliss. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              <Link href="/privacy" passHref>
                <span className="hover:underline cursor-pointer">Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/terms" passHref>
                <span className="hover:underline cursor-pointer">Terms of Service</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Products;
