import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Palmtree as Palm, Wine, Clock, MapPin, Phone, Instagram, Facebook, Mail, Camera } from 'lucide-react';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Events from './pages/Events';

function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-aos="fade-down"
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Boteguita</h1>
          <p className="text-xl md:text-2xl italic">Dove la modernità incontra il tropicale</p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-[#222]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6">Benvenuti al Boteguita</h2>
            <p className="text-lg text-gray-300 mb-6">
              Entrate in un mondo dove l'eleganza moderna incontra il fascino tropicale. Il nostro lounge bar offre 
              una perfetta miscela di raffinatezza e relax, creando un'atmosfera ideale per 
              sia conversazioni intime e incontri sociali.
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Palm className="w-6 h-6 text-[#e6b17e]" />
                <span>Tropical Vibes</span>
              </div>
              <div className="flex items-center gap-2">
                <Wine className="w-6 h-6 text-[#e6b17e]" />
                <span>Cocktail Artigianali</span>
              </div>
            </div>
          </div>
          <div 
            className="grid grid-cols-2 gap-4"
            data-aos="fade-left"
          >
            <img 
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Bar interior" 
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Cocktail" 
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Camera className="w-8 h-8 text-[#e6b17e]" />
            <h2 className="text-4xl font-bold text-center">La Nostra Atmosfera</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                url: "https://images.unsplash.com/photo-1597290282695-fce6084175a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Cocktail preparation",
                className: "col-span-2"
              },
              {
                url: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Bar interior evening",
                className: ""
              },
              {
                url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Signature cocktail",
                className: ""
              },
              {
                url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Live music",
                className: ""
              },
              {
                url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Tropical decor",
                className: ""
              },
              {
                url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Bar entrance",
                className: "col-span-2"
              }
            ].map((image, index) => (
              <div 
                key={index}
                className={`overflow-hidden rounded-lg ${image.className}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20 px-6 md:px-12 bg-[#222]">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-down"
          >
           Visitaci
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-[#2a2a2a] p-8 rounded-lg text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Clock className="w-8 h-8 mx-auto mb-4 text-[#e6b17e]" />
              <h3 className="text-xl font-bold mb-4">Orario</h3>
              <p>Martedì - giovedì: ore 17.00 - 1.00</p>
              <p>Venerdì - sabato: ore 17.00 - 2.00</p>
              <p>Domenica: ore 16.00 - 00.00</p>
            </div>
            <div 
              className="bg-[#2a2a2a] p-8 rounded-lg text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <MapPin className="w-8 h-8 mx-auto mb-4 text-[#e6b17e]" />
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>123 Tropical </p>
              <p>Paradise City, Favara 12345</p>
            </div>
            <div 
              className="bg-[#2a2a2a] p-8 rounded-lg text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-[#e6b17e]" />
              <h3 className="text-xl font-bold mb-4">Contattaci</h3>
              <p>Telefono: +39 0123456789</p>
              <p>Email: hello@boteguita.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <footer className="bg-[#1a1a1a] py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-400">
                Boteguita brings the perfect blend of modern sophistication and tropical charm to your evening.
                Join us for craft cocktails, delicious bites, and unforgettable moments.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contatti</h3>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +39 0123456789
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> hello@boteguita.com
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 123 Tropical 
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Orari</h3>
              <div className="space-y-2 text-gray-400">
                <p>Martedì - Ggiovedì: ore 17.00 - 1.00</p>
                <p>Venerdì - Sabato: ore 17.00 - 2.00</p>
                <p>Domenica: ore 16.00 - 00.00</p>
                <p>Lunedì: Chiuso</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Seguici sui social</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#e6b17e] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e6b17e] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Boteguita. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-[#e6b17e] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#e6b17e] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
