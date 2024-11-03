import React from 'react';
import { Heart, Home } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
}

export default function PropertyCard({
  image,
  price,
  title,
  location,
  beds,
  baths,
  sqm,
}: PropertyCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white transition-shadow duration-300 hover:shadow-2xl">
      
      {/* Property Image and Like Button */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md hover:bg-white">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <p className="text-xl font-bold text-primary">{price}</p>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{location}</p>
        
        {/* Property Specs */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{sqm} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}