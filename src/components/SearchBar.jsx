const SearchBar = () => {
    return (
      <div className="bg-white shadow p-4 -mt-12 mx-4 md:mx-32 rounded-lg relative z-10">
        <div className="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="Destination" className="border p-2 rounded" />
          <input type="date" className="border p-2 rounded" />
          <input type="date" className="border p-2 rounded" />
          <button className="bg-orange-500 text-white font-bold px-4 py-2 rounded hover:bg-orange-600">
            🔍 Rechercher
          </button>
        </div>
      </div>
    );
  };
  export default SearchBar;
  