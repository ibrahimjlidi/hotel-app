const Destinations = () => {
  const cities = ['Hammamet', 'Sousse', 'Tabarka', 'Monastir', 'Tozeur', 'Djerba'];

  return (
    <div className="my-8 px-4 md:px-32">
      <h2 className="text-2xl font-bold mb-4">Promo Hôtel Tunisie</h2>
      <div className="flex gap-3 overflow-x-auto">
        {cities.map((city, idx) => (
          <button key={idx} className="bg-yellow-400 text-white px-4 py-2 rounded-full whitespace-nowrap">
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Destinations;
