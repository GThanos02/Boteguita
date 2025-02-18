import React from 'react';
import { Calendar, Music, Users } from 'lucide-react';

export default function Events() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-20">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-aos="fade-down"
      >
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Eventi e Intrattenimento</h1>
          <p className="text-xl">Unisciti a noi per notti speciali e momenti indimenticabili</p>
        </div>
      </div>

      {/* Weekly Events */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Eventi Settimanali
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Music className="w-8 h-8 text-[#e6b17e]" />,
                title: "Live Jazz Nights",
                day: "Every Thursday",
                time: "8 PM - 11 PM",
                description: "Experience the smooth sounds of local jazz artists in our intimate setting."
              },
              {
                icon: <Users className="w-8 h-8 text-[#e6b17e]" />,
                title: "Salsa Sundays",
                day: "Every Sunday",
                time: "7 PM - 10 PM",
                description: "Join our Latin dance nights with free lessons for beginners."
              },
              {
                icon: <Calendar className="w-8 h-8 text-[#e6b17e]" />,
                title: "Tropical Tuesdays",
                day: "Every Tuesday",
                time: "6 PM - 9 PM",
                description: "Half-price tropical cocktails and live DJ sets."
              }
            ].map((event, index) => (
              <div 
                key={index}
                className="bg-[#2a2a2a] p-8 rounded-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-[#e6b17e] mb-2">{event.day}</p>
                <p className="text-gray-400 mb-4">{event.time}</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">Organizza il tuo evento privato</h2>
              <p className="text-lg text-gray-300 mb-8">
                Se state progettando un evento aziendale, una celebrazione di compleanno, o un'occasione speciale,
                il nostro luogo offre la miscela perfetta di atmosfera e servizio. Il nostro team lavorerà
                con voi per creare un'esperienza indimenticabile su misura per le vostre esigenze.
              </p>
              <ul className="space-y-4">
                {[
                  "Customizable space for up to 100 guests",
                  "Full-service bar and catering options",
                  "State-of-the-art sound system",
                  "Dedicated event coordinator"
                ].map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-[#e6b17e]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="grid grid-cols-2 gap-4"
              data-aos="fade-left"
            >
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Private event setup" 
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Event space" 
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
