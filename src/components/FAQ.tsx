import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do you ensure your properties are up-to-date daily?",
    answer: "Our system is directly connected to property management websites, ensuring that we display only foreigner-friendly places and keep our database continuously updated with the latest listings."
  },
  {
    question: "Can you help with obtaining a mortgage in Japan?",
    answer: "Yes, we assist buyers in securing financing by connecting them with banks and financial institutions that offer mortgage options for foreigners."
  },
  {
    question: "Do you offer English-speaking agents and services?",
    answer: "Yes, our agents are fluent in both English & Japanese and well-versed in the unique needs of expatriates."
  }
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">
          Explore our comprehensive FAQ to learn everything about our services
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl p-6">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="font-semibold">{faq.question}</h3>
                <ChevronDown className="h-5 w-5 text-gray-600" />
              </button>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}