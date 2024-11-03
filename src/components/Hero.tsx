import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[600px]" 
         style={{backgroundImage: 'url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80)'}}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover Tokyo's Premier Real Estate Platform
        </h1>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl">
          Helping Expats and Locals Find Their Ideal Tokyo Home
        </p>
        
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <select className="w-full p-3 rounded-lg bg-gray-50 appearance-none">
                  <option>Select Location</option>
                  <option>Shibuya</option>
                  <option>Minato</option>
                  <option>Setagaya</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div>
              <div className="relative">
                <select className="w-full p-3 rounded-lg bg-gray-50 appearance-none">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white p-3 rounded-lg flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Find Your Tokyo Home
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="text-white bg-black/30 hover:bg-black/40 px-6 py-2 rounded-full">
            Rent
          </button>
          <button className="text-white bg-black/30 hover:bg-black/40 px-6 py-2 rounded-full">
            Buy
          </button>
          <button className="text-white bg-black/30 hover:bg-black/40 px-6 py-2 rounded-full">
            Short-term
          </button>
        </div>
      </div>
    </div>
  );
}