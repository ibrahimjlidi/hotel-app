import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={hotel.image || "https://via.placeholder.com/400x250"}
                alt={hotel.nomH}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{hotel.nomH}</h2>
                <p className="text-gray-600 text-sm mb-4">
                    {hotel.descriptionH?.slice(0, 100)}...
                </p>
                <p className="text-sm text-gray-500 mb-2">
                    📍 {hotel.adresseH} — 📞 {hotel.telephoneH}
                </p>
                <Link
                    to={`/hotels/${hotel.idH}`}
                    className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Voir détails
                </Link>
            </div>
        </div>
    );
};

export default HotelCard;
