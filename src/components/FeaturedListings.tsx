import React from 'react';
import PropertyCard from './PropertyCard';

const featuredProperties = [
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
    price: "¥310,000",
    title: "Luxury Apartment in Minato",
    location: "Shirokane, Minato-ku",
    specs: "50 m² | 1LDK",
    beds: 1,
    baths: 1,
    sqm: 50
  },
  {
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=500&q=80",
    price: "¥190,000",
    title: "Modern Studio near Shinjuku",
    location: "Yoyogi, Shibuya-ku",
    specs: "34 m² | 1K",
    beds: 1,
    baths: 1,
    sqm: 34
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
    price: "¥213,000",
    title: "Cozy Home in Setagaya",
    location: "Fukazawa, Setagaya-ku",
    specs: "58 m² | 1LDK",
    beds: 1,
    baths: 1,
    sqm: 58
  }
];

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-gradient-to-t from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Our Curated Properties in Tokyo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a handpicked selection of Tokyo's finest properties, tailored to meet your unique lifestyle needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary rounded-full px-8 py-3">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}