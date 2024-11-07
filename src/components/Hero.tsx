import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="relative bg-cover bg-no-repeat h-[600px]" 
      style={{ 
        backgroundImage: 'url(/cityscape-of-large-city-with-illuminated-skyscrape-2023-11-27-05-06-09-utc.jpg)',
        backgroundPosition: 'center 0%', // 写真を下に移動
      }}
    >
      {/* 背景の暗さ調整 */}
      <div className="absolute inset-0 bg-black/40" /> 
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        
        {/* Main Title and Description */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Tokyo’s Trusted Platform for Expats
        </h1>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl">
        Exclusively Curated Listings with Local Expertise
        </p>
        
        {/* Search Filters */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Location Selector */}
            <div className="relative col-span-1"> 
              <select className="w-full p-3 rounded-lg bg-gray-50 appearance-none">
                <option>Location</option>
                <option>Shibuya</option>
                <option>Minato</option>
                <option>Setagaya</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            
            </div>
            {/* Size Selector */}
            <div className="relative col-span-1"> 
              <select className="w-full p-3 rounded-lg bg-gray-50 appearance-none">
                <option>Size</option>
                <option>30㎡-50㎡</option>
                <option>50㎡-60㎡</option>
                <option>60㎡ or more</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Rent Selector */}
            <div className="relative col-span-1"> 
              <select className="w-full p-3 rounded-lg bg-gray-50 appearance-none">
                <option>Rent</option>
                <option>150k-200k</option>
                <option>200k-250k</option>
                <option>250k-300k</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Search Button */}
            <button className="w-full bg-primary hover:bg-primary/90 text-white p-3 rounded-lg flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              <strong>Search</strong>
            </button>
          </div>
        </div>

        {/* Quick Links for Property Options */}
        <div className="flex gap-4 mt-8">
          {['Rent', 'Buy', 'Short-term'].map((option, index) => (
            <button
              key={index}
              className="text-white bg-black/30 hover:bg-black/40 px-6 py-2 rounded-full"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}