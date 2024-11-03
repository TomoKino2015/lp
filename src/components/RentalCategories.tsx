import React from 'react';
import { Home, Dog, Bed, Building2 } from 'lucide-react';

const categories = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "High-end",
    count: "598 Properties",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=200&q=80"
  },
  {
    icon: <Dog className="h-6 w-6" />,
    title: "Pet friendly",
    count: "2754 Properties",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=200&q=80"
  },
  {
    icon: <Bed className="h-6 w-6" />,
    title: "Furnished",
    count: "485 Properties",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=200&q=80"
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Top floor",
    count: "809 Properties",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80"
  }
];

export default function RentalCategories() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Rental Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <div className="size-16 rounded-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}