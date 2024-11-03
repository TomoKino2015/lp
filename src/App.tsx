import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import RentalCategories from './components/RentalCategories';
import FeaturedListings from './components/FeaturedListings';
import Stats from './components/Stats';
import BlogSection from './components/BlogSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedListings />
      <RentalCategories />
      <Stats />
      <BlogSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;