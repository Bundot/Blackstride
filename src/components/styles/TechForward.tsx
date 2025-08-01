import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, BarChart2Icon, GlobeIcon, TruckIcon, LineChartIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { ContactForm } from '../shared/ContactForm';
import { productData, priceData, exportTips, companyInfo } from '../shared/ProductData';
export const TechForward: React.FC = () => {
  return <div className="bg-gray-900 text-gray-100 w-full font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1518183161445-02f2eb8be66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
    }}>
        <div className="container mx-auto px-6 md:px-12 z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-3 py-1 border border-teal-500 rounded-full text-teal-500 text-sm font-medium">
              Agricultural Export Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {companyInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              {companyInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md transition-colors duration-300 font-medium">
                Explore Products
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-white py-3 px-8 rounded-md border border-gray-500 transition-colors duration-300 font-medium">
                Market Updates
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
      {/* Live Price Ticker */}
      <div className="bg-gray-800 py-3 border-t border-b border-gray-700 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {[...priceData, ...priceData].map((item, index) => <span key={index} className="mx-8 inline-flex items-center">
              <strong className="text-teal-500 mr-2">{item.product}:</strong>
              {item.price}
              <span className={`ml-2 ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'} flex items-center`}>
                {item.change}
                {item.trend === 'up' ? <ArrowUpIcon className="h-3 w-3 ml-1" /> : <ArrowDownIcon className="h-3 w-3 ml-1" />}
              </span>
            </span>)}
        </div>
      </div>
      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-3 py-1 border border-teal-500 rounded-full text-teal-500 text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                5+ Years of Export Excellence
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {companyInfo.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/50">
                  <div className="text-3xl font-bold text-teal-500 mb-2">
                    5+
                  </div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/50">
                  <div className="text-3xl font-bold text-teal-500 mb-2">
                    20+
                  </div>
                  <div className="text-gray-300">Global Markets</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyInfo.services.slice(0, 4).map((service, index) => <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-800/50 hover:border-teal-500 transition-colors duration-300">
                  {index === 0 && <GlobeIcon className="h-10 w-10 text-teal-500 mb-4" />}
                  {index === 1 && <BarChart2Icon className="h-10 w-10 text-teal-500 mb-4" />}
                  {index === 2 && <TruckIcon className="h-10 w-10 text-teal-500 mb-4" />}
                  {index === 3 && <LineChartIcon className="h-10 w-10 text-teal-500 mb-4" />}
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p className="text-gray-400">
                    Leveraging technology and expertise to deliver exceptional{' '}
                    {service.toLowerCase()} solutions.
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-3 py-1 border border-teal-500 rounded-full text-teal-500 text-sm font-medium">
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Premium Agricultural Exports
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We deliver high-quality agricultural products from Nigeria to
              global markets, ensuring consistent quality and reliable supply.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.map(product => <div key={product.id} className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-teal-500 transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  <button className="text-teal-500 font-medium flex items-center text-sm hover:text-teal-400 transition-colors">
                    View Specifications
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Price Updates Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-3 py-1 border border-teal-500 rounded-full text-teal-500 text-sm font-medium">
              Market Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Weekly Price Updates
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay ahead with our real-time market data and price updates for
              key agricultural commodities.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Current Price
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Weekly Change
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Trend
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Market Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {priceData.map((item, index) => <tr key={index} className="hover:bg-gray-750">
                      <td className="py-4 px-6 whitespace-nowrap font-medium">
                        {item.product}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap text-teal-500 font-medium">
                        {item.price}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`${item.trend === 'up' ? 'text-green-400' : 'text-red-400'} font-medium`}>
                          {item.change}
                        </span>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        {item.trend === 'up' ? <span className="text-green-400 flex items-center">
                            <ArrowUpIcon className="h-4 w-4 mr-1" /> Bullish
                          </span> : <span className="text-red-400 flex items-center">
                            <ArrowDownIcon className="h-4 w-4 mr-1" /> Bearish
                          </span>}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.trend === 'up' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                          {item.trend === 'up' ? 'Active Buying' : 'Price Correction'}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-850 px-6 py-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <button className="text-teal-500 hover:text-teal-400 text-sm font-medium flex items-center">
                  Download Full Report
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-3 py-1 border border-teal-500 rounded-full text-teal-500 text-sm font-medium">
              Expert Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Export Tips & Strategies
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Leverage our expertise to navigate the complexities of
              agricultural exports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exportTips.map(tip => <div key={tip.id} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-teal-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-teal-900/50 text-teal-400 text-xs font-medium rounded-full">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-gray-400 mb-4">{tip.content}</p>
                <button className="text-teal-500 font-medium flex items-center text-sm hover:text-teal-400 transition-colors">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>)}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block mb-6 px-3 py-1 border border-teal-500 rounded-full text-teal-500 text-sm font-medium">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Discuss Your Export Needs
              </h2>
              <p className="text-gray-300 mb-8">
                Our team of experts is ready to help you navigate the
                agricultural export market. Reach out to us today.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-teal-500 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-teal-500 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-400">info@blackstrideltd.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-teal-500 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+234 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm darkMode={true} buttonClassName="bg-teal-600 hover:bg-teal-700 text-white" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">{companyInfo.name}</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Leveraging technology and expertise to deliver premium
                agricultural exports from Nigeria to global markets.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                    Market Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
              <p className="text-gray-400 mb-4">
                Get weekly updates on market prices and export tips.
              </p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 w-full" />
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>;
};