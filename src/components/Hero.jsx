const Hero = () => {
    return (
      <div className="relative">
        <img src="https://via.placeholder.com/1200x400" alt="Hero" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Découvrez nos Voyages</h2>
        </div>
      </div>
    );
  };
  export default Hero;
  