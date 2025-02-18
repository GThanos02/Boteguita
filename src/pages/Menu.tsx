import React from 'react';
import { Coffee, Wine, UtensilsCrossed } from 'lucide-react';

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 
          className="text-5xl font-bold text-center mb-16"
          data-aos="fade-down"
        >
          Our Menu
        </h1>

        {/* Drinks Section */}
        <section className="mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Wine className="w-8 h-8 text-[#e6b17e]" />
            <h2 className="text-3xl font-bold">Signature Cocktails</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Tropical Paradise", price: "$14", description: "Aged rum, fresh pineapple, coconut cream, lime" },
              { name: "Boteguita Sunset", price: "$15", description: "Cachaça, passion fruit, vanilla, prosecco" },
              { name: "Island Breeze", price: "$13", description: "Gin, cucumber, mint, elderflower, lime" },
              { name: "Spiced Mango Margarita", price: "$14", description: "Tequila, mango, chili, lime, tajin rim" }
            ].map((drink, index) => (
              <div 
                key={index}
                className="bg-[#2a2a2a] p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{drink.name}</h3>
                  <span className="text-[#e6b17e]">{drink.price}</span>
                </div>
                <p className="text-gray-400">{drink.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food Section */}
        <section className="mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <UtensilsCrossed className="w-8 h-8 text-[#e6b17e]" />
            <h2 className="text-3xl font-bold">Bar Bites</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Crispy Plantains", price: "$8", description: "Served with guacamole and chimichurri" },
              { name: "Spiced Shrimp Tacos", price: "$16", description: "Three tacos with mango salsa and lime crema" },
              { name: "Tropical Ceviche", price: "$18", description: "Fresh fish, coconut milk, citrus, herbs" },
              { name: "Grilled Street Corn", price: "$10", description: "Chili lime butter, cotija cheese, cilantro" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-[#2a2a2a] p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-[#e6b17e]">{item.price}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coffee Section */}
        <section data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Coffee className="w-8 h-8 text-[#e6b17e]" />
            <h2 className="text-3xl font-bold">Coffee & Tea</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Espresso", price: "$3", description: "Single shot of our house blend" },
              { name: "Tropical Iced Tea", price: "$5", description: "Passion fruit and hibiscus blend" },
              { name: "Coconut Latte", price: "$6", description: "Espresso with coconut milk and vanilla" },
              { name: "Chai Tea", price: "$5", description: "House-made masala chai with oat milk" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-[#2a2a2a] p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-[#e6b17e]">{item.price}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}