import React from 'react';
import ReactDOM from "react-dom/client";
import { ExternalLink, BookOpen, Users } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Resources & Links</h1>
        <p className="text-gray-600 text-lg">Curated tools, suppliers, and connections for F&B professionals</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-orange-600" />
            Equipment Suppliers
          </h2>
          <ul className="space-y-3">
            <li className="border-b pb-3">
              <a href="#" className="font-semibold text-orange-600 hover:text-orange-700">Professional Baking Equipment</a>
              <p className="text-sm text-gray-600">Commercial ovens, mixers, and tools</p>
            </li>
            <li className="border-b pb-3">
              <a href="#" className="font-semibold text-orange-600 hover:text-orange-700">Specialty Coffee Suppliers</a>
              <p className="text-sm text-gray-600">Espresso machines and accessories</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            Recommended Reading
          </h2>
          <ul className="space-y-3">
            <li className="border-b pb-3">
              <a href="#" className="font-semibold text-orange-600 hover:text-orange-700">The Professional Baker</a>
              <p className="text-sm text-gray-600">Essential techniques and formulas</p>
            </li>
            <li className="border-b pb-3">
              <a href="#" className="font-semibold text-orange-600 hover:text-orange-700">On Food and Cooking</a>
              <p className="text-sm text-gray-600">The science of cooking explained</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-orange-600" />
            Industry Organizations
          </h2>
          <ul className="space-y-3">
            <li className="border-b pb-3">
              <a href="#" className="font-semibold text-orange-600 hover:text-orange-700">World Skills International</a>
              <p className="text-sm text-gray-600">Global vocational skills competitions</p>
            </li>
            <li className="border-b pb-3">
              <a href="#" className="font-semibold text-orange-600 hover:text-orange-700">Coupe du Monde de la Boulangerie</a>
              <p className="text-sm text-gray-600">World Bakery Cup</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Our Other Brands</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-bold">Appetite Journeys</h3>
              <p className="text-sm text-gray-600">Culinary travel experiences</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-bold">Elevate Hospitality</h3>
              <p className="text-sm text-gray-600">Industry training and consulting</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-bold">The Gilberts Group</h3>
              <p className="text-sm text-gray-600">Umbrella organization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">Have questions or want to collaborate? We'd love to hear from you.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded-lg text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea className="w-full px-4 py-2 rounded-lg text-gray-900" rows={4}></textarea>
          </div>
          <button className="mt-4 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;