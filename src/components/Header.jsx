const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">🌍 Active Travel</h1>
        <div className="space-x-4 text-gray-600">
          <a href="#" className="hover:text-blue-500">WhatsApp</a>
          <a href="#" className="hover:text-blue-500">Téléphone</a>
          <a href="#" className="hover:text-blue-500">Email</a>
          <button className="text-2xl">☰</button>
        </div>
      </header>
    );
  };
  export default Header;
  