import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">À propos de nous</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Bienvenue sur notre site ! Nous sommes passionnés par le voyage, l’hospitalité et les belles expériences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
            alt="about"
            className="w-full rounded-lg shadow-md object-cover h-80"
          />

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Notre mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Offrir une plateforme simple et fiable pour découvrir et réserver les meilleurs hôtels. 
              Chaque établissement est soigneusement sélectionné pour garantir la qualité, le confort 
              et un service client exceptionnel.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Notre histoire</h2>
            <p className="text-gray-600 leading-relaxed">
              Lancée en 2024 par une équipe passionnée, notre entreprise vise à révolutionner la façon dont 
              les gens recherchent et réservent leurs séjours. Grâce à des technologies modernes et une approche 
              centrée sur l'utilisateur, nous rendons chaque voyage inoubliable.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
    