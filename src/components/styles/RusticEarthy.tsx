import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, LeafIcon, GlobeIcon, TruckIcon, HeadphonesIcon, SunIcon } from 'lucide-react';
import { ContactForm } from '../shared/ContactForm';
import { productData, priceData, exportTips, companyInfo } from '../shared/ProductData';
export const RusticEarthy: React.FC = () => {
  return <div className="bg-amber-50 text-stone-800 w-full font-serif">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
    }}>
        <div className="container mx-auto px-6 md:px-12 z-10">
          <div className="max-w-3xl p-8 bg-stone-800/70 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl text-amber-100 mb-4 font-normal">
              {companyInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-amber-100/90 mb-8 font-light">
              {companyInfo.tagline}
            </p>
            <button className="bg-amber-700 hover:bg-amber-800 text-amber-100 py-3 px-8 rounded-none border border-amber-600 transition-colors duration-300">
              Discover Our Products
            </button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-amber-50" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')"
    }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-normal text-stone-800 mb-4">
              Our Story
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-700"></div>
              <div className="h-px w-16 bg-amber-700 rotate-90 origin-left"></div>
              <div className="h-px w-16 bg-amber-700"></div>
            </div>
            <p className="text-stone-700 leading-relaxed">
              {companyInfo.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border-2 border-amber-700/30 p-8 bg-amber-100/50">
              <LeafIcon className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-stone-800">
                Sustainable Farming
              </h3>
              <p className="text-stone-700">
                We work with farmers who practice sustainable agriculture to
                ensure the long-term health of the land and communities.
              </p>
            </div>
            <div className="border-2 border-amber-700/30 p-8 bg-amber-100/50">
              <GlobeIcon className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-stone-800">
                Global Reach
              </h3>
              <p className="text-stone-700">
                Our products reach markets across the world, bringing the rich
                bounty of Nigerian agriculture to international tables.
              </p>
            </div>
            <div className="border-2 border-amber-700/30 p-8 bg-amber-100/50">
              <TruckIcon className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-stone-800">
                Reliable Logistics
              </h3>
              <p className="text-stone-700">
                Our expert logistics team ensures timely delivery and proper
                handling of all agricultural exports.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 bg-stone-100" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')"
    }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-normal text-stone-800 mb-4">
              Our Harvest
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-700"></div>
              <div className="h-px w-16 bg-amber-700 rotate-90 origin-left"></div>
              <div className="h-px w-16 bg-amber-700"></div>
            </div>
            <p className="text-stone-700">
              From farm to global markets, we deliver nature's finest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productData.map(product => <div key={product.id} className="flex flex-col md:flex-row bg-amber-50 border-2 border-amber-700/20 overflow-hidden">
                <div className="md:w-1/2">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4 text-stone-800">
                    {product.name}
                  </h3>
                  <p className="text-stone-700 mb-6">{product.description}</p>
                  <button className="self-start mt-auto bg-amber-700 hover:bg-amber-800 text-amber-50 py-2 px-6 border border-amber-600">
                    Learn More
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Price Updates Section */}
      <section className="py-20 bg-amber-800 text-amber-50" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')"
    }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-normal mb-4">Market Prices</h2>
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-200"></div>
              <div className="h-px w-16 bg-amber-200 rotate-90 origin-left"></div>
              <div className="h-px w-16 bg-amber-200"></div>
            </div>
            <p className="text-amber-100">
              Current commodity prices from this week's market.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-amber-700/50 backdrop-blur-sm border-2 border-amber-600">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left border-b border-amber-600 font-semibold">
                    Product
                  </th>
                  <th className="py-4 px-6 text-left border-b border-amber-600 font-semibold">
                    Current Price
                  </th>
                  <th className="py-4 px-6 text-left border-b border-amber-600 font-semibold">
                    Weekly Change
                  </th>
                  <th className="py-4 px-6 text-left border-b border-amber-600 font-semibold">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => <tr key={index} className="hover:bg-amber-600/50">
                    <td className="py-4 px-6 border-b border-amber-600/50">
                      {item.product}
                    </td>
                    <td className="py-4 px-6 border-b border-amber-600/50">
                      {item.price}
                    </td>
                    <td className="py-4 px-6 border-b border-amber-600/50">
                      {item.change}
                    </td>
                    <td className="py-4 px-6 border-b border-amber-600/50">
                      {item.trend === 'up' ? <span className="text-green-300 flex items-center">
                          <ArrowUpIcon className="h-4 w-4 mr-1" /> Rising
                        </span> : <span className="text-red-300 flex items-center">
                          <ArrowDownIcon className="h-4 w-4 mr-1" /> Falling
                        </span>}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <p className="text-amber-200 italic">
              *Prices are subject to change based on market conditions
            </p>
          </div>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-20 bg-amber-50" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')"
    }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-normal text-stone-800 mb-4">
              Export Wisdom
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-700"></div>
              <div className="h-px w-16 bg-amber-700 rotate-90 origin-left"></div>
              <div className="h-px w-16 bg-amber-700"></div>
            </div>
            <p className="text-stone-700">
              Insights from our years of experience in agricultural exports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportTips.map(tip => <div key={tip.id} className="bg-amber-100/50 p-8 border-2 border-amber-700/20">
                <div className="flex items-center mb-6">
                  <SunIcon className="h-8 w-8 text-amber-700 mr-3" />
                  <h3 className="text-xl font-semibold text-stone-800">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-stone-700 mb-4">{tip.content}</p>
                <div className="flex justify-end">
                  <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
                    {tip.category}
                  </span>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-stone-100" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')"
    }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-normal text-stone-800 mb-4">
              Reach Out
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-700"></div>
              <div className="h-px w-16 bg-amber-700 rotate-90 origin-left"></div>
              <div className="h-px w-16 bg-amber-700"></div>
            </div>
            <p className="text-stone-700">
              Let's discuss how we can meet your agricultural export needs.
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-amber-50 border-2 border-amber-700/20 p-8">
            <div className="flex items-center justify-center mb-8">
              <HeadphonesIcon className="h-12 w-12 text-amber-700" />
            </div>
            <ContactForm className="bg-transparent" buttonClassName="bg-amber-700 hover:bg-amber-800 text-amber-50 border border-amber-600" inputClassName="bg-amber-50 border-amber-700/30 focus:border-amber-700 focus:ring-amber-700" textareaClassName="bg-amber-50 border-amber-700/30 focus:border-amber-700 focus:ring-amber-700" labelClassName="text-stone-800" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-stone-800 text-amber-100 py-16" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')"
    }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-normal mb-6">{companyInfo.name}</h3>
              <p className="text-amber-200/80">
                Nurturing global connections through Nigeria's agricultural
                bounty since 2018.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-normal mb-6">Site Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                    Market Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-normal mb-6">Get In Touch</h4>
              <address className="text-amber-200/80 not-italic">
                <p>Lagos, Nigeria</p>
                <p className="mt-3">info@blackstrideltd.com</p>
                <p className="mt-3">+234 123 456 7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-amber-700/50 mt-12 pt-8 text-center text-amber-200/60">
            <p>
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};