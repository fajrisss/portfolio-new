/* eslint-disable react/no-unescaped-entities */
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Lastest from '../components/Lastest';
import Skil from '../components/Skil';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Skil />
      <Lastest />
      <Footer />
    </div>
  );
};

export default Home;