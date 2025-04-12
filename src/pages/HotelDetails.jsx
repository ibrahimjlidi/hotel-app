import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    axios.get(`/api/hotel/${id}`)
      .then(res => setHotel(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!hotel) return <div className="text-center py-10 text-gray-500">Chargement...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hotel Info */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <img
              src={hotel.image || '/default-hotel.jpg'}
              alt={hotel.nomh}
              className="rounded-xl w-full h-72 object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{hotel.nomh}</h1>
            <p className="text-gray-600 mb-4">{hotel.description}</p>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">📞 Téléphone :</span> {hotel.numTelephone}</p>
              <p><span className="font-semibold">🏨 Catégorie :</span> {hotel.categories}</p>
              {/* 🗺️ Placeholder for map */}
              <p><span className="font-semibold">📍 Adresse :</span> Ajouter l’adresse ici</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chambres */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Nos Chambres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotel.chambres?.map((chambre, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition"
            >
              <img
                src={chambre.image || '/default-room.jpg'}
                alt={`Chambre ${chambre.numero}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Chambre {chambre.numero}</h3>
                <p className="text-gray-600 text-sm">{chambre.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>🛏️ {chambre.type}</span>
                  <span>💰 {chambre.prix} €</span>
                </div>
                <button className="mt-2 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
