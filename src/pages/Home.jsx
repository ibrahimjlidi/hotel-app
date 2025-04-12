import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <SearchBar />
      <Destinations />
      <Footer />
    </div>
  );
};
export default Home;
