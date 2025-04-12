import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/hotel/${id}`);
        setHotel(res.data);
      } catch (err) {
        console.error('Erreur chargement hôtel:', err);
        setError('Impossible de charger les détails de l’hôtel.');
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  if (loading) {
    return <p className="text-center p-10 text-gray-600">Chargement des données...</p>;
  }

  if (error) {
    return <p className="text-center p-10 text-red-500">{error}</p>;
  }

  if (!hotel) {
    return <p className="text-center p-10 text-gray-500">Hôtel introuvable.</p>;
  }

  const mapQuery = hotel.adresse || hotel.nomh || 'Algérie';
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />

      <main className="container mx-auto p-6">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{hotel.nomh}</h1>
        <p className="text-lg text-gray-500 mb-6">{hotel.categories || 'Catégorie non spécifiée'}</p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {hotel.images?.length > 0 ? (
            hotel.images.map((img, i) => (
              <img
                key={img + i}
                src={img}
                alt={`Image ${i + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            ))
          ) : (
            <>
              <img
                src="https://images.trvl-media.com/lodging/28000000/27720000/27717800/27717731/c9f87f68.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                className="w-full h-80 object-cover rounded-lg"
              />
              <img
                src="https://images.trvl-media.com/lodging/28000000/27720000/27717800/27717731/e6c945e3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                className="w-full h-80 object-cover rounded-lg"
              />
            </>
          )}
        </div>

        {/* Description & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">À propos de l’hôtel</h2>
            <p className="text-gray-600 leading-relaxed">
              {hotel.description || 'Aucune description disponible pour cet hôtel.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Infos de contact</h3>
            <p className="text-gray-600 mb-2">📞 Téléphone: {hotel.numTelephone || 'Non disponible'}</p>
            <p className="text-gray-600 mb-2">🏨 Catégorie: {hotel.categories || 'Non spécifiée'}</p>
            <p className="text-gray-600">🕒 Ajouté le: {new Date(hotel.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Chambres */}
        {hotel.chambres?.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Chambres disponibles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotel.chambres.map((chambre) => (
                <div
                  key={chambre._id}
                  className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  <h4 className="font-bold text-lg mb-2">{chambre.nom}</h4>
                  <p className="text-gray-600 text-sm">Type: {chambre.typeCh}</p>
                  <p className="text-gray-600 text-sm">Prix: {chambre.tarif}€</p>
                  <img src={chambre.imageCh} alt={chambre.nom} className="w-full h-48 object-cover rounded-md mb-2" />

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Carte */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Localisation</h3>
          <iframe
            title="map"
            src={mapSrc}
            className="w-full h-80 rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetails;
