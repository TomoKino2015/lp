import React from 'react';

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=500&q=80",
    title: "Tokyo Real Estate Investment: Market Analysis and Opportunities",
    date: "November 2nd, 2024",
    categories: ["Article", "Guide", "Investment"]
  },
  {
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80",
    title: "Chuo City - Tokyo Area Guide For Residents",
    date: "November 2nd, 2024",
    categories: ["Guide", "Area"]
  },
  {
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=500&q=80",
    title: "Meguro City - Tokyo Area Guide For Residents",
    date: "November 2nd, 2024",
    categories: ["Guide", "Area"]
  }
];

export default function BlogSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-square">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75"></div>
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex gap-2 mb-3">
                  {post.categories.map((category, idx) => (
                    <span key={idx} className="text-xs bg-black/50 px-3 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                <p className="text-sm mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}