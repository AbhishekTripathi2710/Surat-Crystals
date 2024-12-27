import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Truck, Lock, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'


// Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center ml-[-16rem]">
              <span className="ml-[50%] text-white font-creepster text-xl flex"><img src='https://www.suratcrystals.com/cdn/shop/files/Group_2_5d1ddfae-e5e9-4885-a876-e9a24cbe1f63_180x.png?v=1725933675' className='mr-[-4rem]'></img>Surat Crystals</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-orange-500 hover:text-orange-400">HOME</a>
              <a href="#" className="text-white hover:text-orange-400">CRYSTAL BRACELETS</a>
              <a href="#" className="text-white hover:text-orange-400">CRYSTAL TREES</a>
              <a href="#" className="text-white hover:text-orange-400">PYRAMIDS</a>
              <a href="#" className="text-white hover:text-orange-400">RECHARGE PLATES</a>
              <a href="#" className="text-white hover:text-orange-400">CONTACT</a>
              <a href="#" className="text-white hover:text-orange-400 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://www.suratcrystals.com/cdn/shop/files/1_ad.jpg?v=1725932897',
    'https://www.suratcrystals.com/cdn/shop/files/2_ad_26c48f61-7c81-420f-98e0-1f93df48bda8.jpg?v=1725932738',
    'https://www.suratcrystals.com/cdn/shop/files/3_ad.jpg?v=1725932834',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
    <div
      className="relative w-4/5 md:w-3/5 lg:w-[1400px] h-[600px] aspect-video border-4 border-orange-500 rounded-lg overflow-hidden"
      style={{
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
      }}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  </div>
  );
}

// Products Component
const products = [
  {
    id: 1,
    name: "7 Chakra Bracelet",
    price: 21.00,
    originalPrice: 980,
    image: "https://www.suratcrystals.com/cdn/shop/files/1_ad.jpg?v=1725932897",
    onSale: true,
  },
  {
    id: 2,
    name: "7 Chakra Bracelet",
    price: 700,
    image: "https://www.suratcrystals.com/cdn/shop/files/3_ad.jpg?v=1725932834",
    onSale: false,
  },
  {
    id: 3,
    name: "7 Chakra Bracelet",
    price: 700,
    image: "https://www.suratcrystals.com/cdn/shop/files/1_ad.jpg?v=1725932897",
    onSale: false,
  },
];

function Products(){
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 mb-4">OUR PRODUCTS</h2>
          <h3 className="font-creepster text-5xl text-white">Featured collection</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.onSale && (
                  <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 rounded">
                    Sale!
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-400" />
                  ))}
                </div>
                <h3 className="font-creepster text-2xl text-white mb-2">{product.name}</h3>
                <div className="flex items-center mb-4">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through mr-2">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-orange-500 text-xl">
                  ₹{product.price.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <>
    <h2 className="text-orange-500 text-lg font-bold tracking-wide uppercase text-center mb-9">
      Testimonials
    </h2>
    <div className="relative bg-cover bg-center py-16 px-4 text-white">
  <div
    className="absolute inset-0 bg-black opacity-20"
    style={{
      backgroundImage: "url('https://m.media-amazon.com/images/I/71oI33f0eJL.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="relative bg-black bg-opacity-60 max-w-3xl mx-auto rounded-lg p-8">

    <div className="text-center mt-4 text-yellow-400 text-5xl">★★★★★</div>
    <p className="text-center mt-6 text-2xl font-light leading-relaxed">
    "I am absolutely in love with my crystal bead bracelet from Surat Crystal! The quality is unmatched, and the beads have a stunning shine that instantly elevates any outfit I wear. Not only is it a beautiful accessory, but I also feel a sense of positive energy and calm when I wear it. I will definitely be coming back for more! Highly recommend to anyone looking for high-quality crystal bracelets."
    </p>
    <div className="flex flex-col items-center mt-8">
      <img
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlM19waG90b19vZl9hX3lvdW5nX2luZGlhbl9tYW5fd2VhcmluZ19jYXN1YWxfY2xvdF9jM2YxZGVlOC01ZmQzLTQzYmUtOGEwZC1kN2RhZGZlN2ZlODMucG5n.png"
        alt="Reviewer"
        className="w-16 h-16 rounded-full border-2 border-orange-500"
      />
      <p className="mt-4 text-lg font-semibold">Arpita Roy</p>
    </div>
  </div>
</div>
</>
  );
};

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Truck className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold mb-4">FREE SHIPPING</h3>
          <p className="text-gray-300">
            Enjoy the treat of free shipping on all your crystal must-haves
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Lock className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold mb-4">SECURE PAYMENTS</h3>
          <p className="text-gray-300">
            Shop with confidence knowing that your payments are securely processed for a worry-free crystal shopping experience
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold mb-4">ORDER TRACKING</h3>
          <p className="text-gray-300">
            Stay in the know with real-time order tracking to ensure your crystal treasures arrive right on time
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Surat Crystals</span>
            </div>

            <nav>
              <ul className="flex gap-6">
                <li><button className="text-orange-500 hover:text-orange-400">HOME</button></li>
                <li><button className="hover:text-orange-400">CRYSTAL BRACELETS</button></li>
                <li><button className="hover:text-orange-400">CRYSTAL TREES</button></li>
                <li><button className="hover:text-orange-400">PYRAMIDS</button></li>
                <li><button className="hover:text-orange-400">RECHARGE PLATES</button></li>
                <li><button className="hover:text-orange-400">CONTACT</button></li>
              </ul>
            </nav>

            <div className="flex gap-4">
              <button className="hover:text-orange-400"><Facebook className="w-6 h-6" /></button>
              <button className="hover:text-orange-400"><Twitter className="w-6 h-6" /></button>
              <button className="hover:text-orange-400"><Instagram className="w-6 h-6" /></button>
              <button className="hover:text-orange-400"><Youtube className="w-6 h-6" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>Copyright © 2024 Surat Crystals | Powered by Surat Crystals</p>
        </div>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </footer>
  )
}


function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Testimonial/>
      <Footer></Footer>
    </div>
  );
}

export default App;

