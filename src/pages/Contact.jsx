import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Contactez-nous</h1>
        <p className="text-center text-gray-600 mb-10">Nous serions ravis de vous aider ou de répondre à vos questions.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Nom complet</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Adresse email</label>
              <input
                type="email"
                placeholder="exemple@email.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Écrivez votre message ici..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Envoyer le message
            </button>
          </form>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Nos coordonnées</h2>
              <p className="text-gray-700">📍 123 Rue Exemple, Paris, France</p>
              <p className="text-gray-700">📞 +33 1 23 45 67 89</p>
              <p className="text-gray-700">✉️ contact@exemple.com</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow">
              <iframe
                title="Carte"
                src="https://www.google.com/maps?q=Paris%2C%20France&output=embed"
                className="w-full h-64 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
