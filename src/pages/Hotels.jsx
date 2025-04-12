import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/hotel');
        setHotels(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des hôtels:', error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Nos Hôtels</h1>

        {loading ? (
          <p className="text-gray-600">Chargement des hôtels...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {hotels.map(h => (
              <HotelCard
                key={h._id}
                hotel={{
                  idH: h._id,
                  nomH: h.nomh,
                  descriptionH: h.description,
                  adresseH: "Adresse à ajouter", // Si t’as un champ adresse dans ton modèle plus tard
                  telephoneH: h.numTelephone,
                  image: "https://source.unsplash.com/400x250/?hotel", // Par défaut
                }}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Hotels;
