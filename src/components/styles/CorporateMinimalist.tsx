import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon } from 'lucide-react';
import { ContactForm } from '../shared/ContactForm';
import { productData, priceData, exportTips, companyInfo } from '../shared/ProductData';
export const CorporateMinimalist: React.FC = () => {
  return <div className="bg-white text-gray-800 w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[70vh] flex items-center" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
    }}>
        <div className="container mx-auto px-6 md:px-12 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-thin text-white mb-4">
              {companyInfo.name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-white mb-8">
              {companyInfo.tagline}
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-sm transition-colors duration-300 inline-flex items-center">
              Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4">About Us</h2>
            <div className="h-0.5 w-16 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              {companyInfo.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-light mb-4">Our Services</h3>
              <ul className="space-y-2">
                {companyInfo.services.map((service, index) => <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{service}</span>
                  </li>)}
              </ul>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-light mb-4">Our Values</h3>
              <ul className="space-y-2">
                {companyInfo.values.map((value, index) => <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{value}</span>
                  </li>)}
              </ul>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-light mb-4">Our Experience</h3>
              <p className="text-4xl font-light text-green-600 mb-2">5+</p>
              <p className="text-gray-600">
                Years of expertise in agricultural exports, connecting Nigerian
                farmers to global markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Our Products</h2>
            <div className="h-0.5 w-16 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Premium quality agricultural exports from Nigeria to the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.map(product => <div key={product.id} className="bg-white border border-gray-200 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Price Updates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Weekly Price Updates</h2>
            <div className="h-0.5 w-16 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Stay informed with our latest commodity price updates.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-light text-gray-600">
                    Product
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-light text-gray-600">
                    Current Price
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-light text-gray-600">
                    Weekly Change
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-light text-gray-600">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-4 border-b border-gray-200">
                      {item.product}
                    </td>
                    <td className="py-4 px-4 border-b border-gray-200">
                      {item.price}
                    </td>
                    <td className="py-4 px-4 border-b border-gray-200">
                      {item.change}
                    </td>
                    <td className="py-4 px-4 border-b border-gray-200">
                      {item.trend === 'up' ? <span className="text-green-600 flex items-center">
                          <ArrowUpIcon className="h-4 w-4 mr-1" /> Up
                        </span> : <span className="text-red-600 flex items-center">
                          <ArrowDownIcon className="h-4 w-4 mr-1" /> Down
                        </span>}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Export Tips & Insights</h2>
            <div className="h-0.5 w-16 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Expert advice to help you navigate the export process efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exportTips.map(tip => <div key={tip.id} className="bg-white p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="text-xs font-medium py-1 px-2 bg-green-100 text-green-800 rounded">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-xl font-light mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Contact Us</h2>
            <div className="h-0.5 w-16 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Reach out to us for inquiries, quotes, or consultations.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ContactForm className="bg-white rounded-sm" buttonClassName="bg-green-600 hover:bg-green-700 text-white" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-light mb-4">{companyInfo.name}</h3>
              <p className="text-gray-400">
                Delivering agricultural excellence globally since 2018.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Contact Information</h4>
              <address className="text-gray-400 not-italic">
                <p>Lagos, Nigeria</p>
                <p className="mt-2">info@blackstrideltd.com</p>
                <p className="mt-2">+234 123 456 7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};