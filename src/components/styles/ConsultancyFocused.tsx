import React from 'react';
import { CheckCircleIcon, ArrowUpIcon, ArrowDownIcon, UsersIcon, BarChart2Icon, ShieldIcon, AwardIcon } from 'lucide-react';
import { ContactForm } from '../shared/ContactForm';
import { productData, priceData, exportTips, companyInfo } from '../shared/ProductData';
export const ConsultancyFocused: React.FC = () => {
  return <div className="bg-gray-50 text-gray-800 w-full font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 font-semibold mb-4">
                Agricultural Export Consultancy
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {companyInfo.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {companyInfo.tagline} With over 5 years of expertise in
                agricultural export consultancy, we provide the guidance you
                need to succeed in global markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-colors duration-300 font-medium shadow-md">
                  Our Services
                </button>
                <button className="bg-white hover:bg-gray-100 text-blue-600 py-3 px-8 rounded-md border border-blue-200 transition-colors duration-300 font-medium shadow-sm">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Agricultural Export Consultancy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">What We Do</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Our Professional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive consultancy services to help agricultural
              businesses navigate the complexities of global export markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-6">
                <BarChart2Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Export Strategy Development
              </h3>
              <p className="text-gray-600 mb-6">
                Custom export strategies tailored to your specific products,
                target markets, and business goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Market entry analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Competitive positioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Growth roadmapping</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-6">
                <ShieldIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Compliance & Certification
              </h3>
              <p className="text-gray-600 mb-6">
                Navigate complex regulatory requirements and certification
                processes with expert guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Documentation review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Quality assurance protocols
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Regulatory compliance</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-6">
                <UsersIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Buyer Network Access
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with our established network of international buyers and
                distributors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Buyer introductions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Relationship management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Negotiation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Export Projects
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    30+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Global Markets
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-600 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-blue-600 font-semibold mb-4">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Expert Agricultural Export Consultancy
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {companyInfo.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AwardIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Industry Recognition
                    </h4>
                    <p className="text-gray-600">
                      Our team has received multiple awards for excellence in
                      agricultural export consultancy and trade facilitation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UsersIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Expert Team
                    </h4>
                    <p className="text-gray-600">
                      Our consultants have decades of combined experience in
                      agricultural exports, international trade, and regulatory
                      compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Agricultural Export Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in facilitating the export of these high-quality
              Nigerian agricultural products to global markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.map(product => <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">
                      View Details
                    </span>
                    <span className="text-sm text-gray-500">
                      Market: Global
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Price Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">
              Market Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Weekly Price Updates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our regular market price updates to make
              strategic export decisions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">
                      Product
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">
                      Current Price
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">
                      Weekly Change
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">
                      Trend
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">
                      Analysis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {priceData.map((item, index) => <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-800">
                        {item.product}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap text-blue-600 font-medium">
                        {item.price}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`${item.trend === 'up' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                          {item.change}
                        </span>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        {item.trend === 'up' ? <span className="text-green-600 flex items-center">
                            <ArrowUpIcon className="h-4 w-4 mr-1" /> Increasing
                          </span> : <span className="text-red-600 flex items-center">
                            <ArrowDownIcon className="h-4 w-4 mr-1" />{' '}
                            Decreasing
                          </span>}
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600">
                          {item.trend === 'up' ? 'Favorable selling conditions' : 'Consider strategic holding'}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Request Detailed Market Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">
              Expert Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Export Compliance Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leverage our expertise to navigate the complexities of
              agricultural export regulations and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportTips.map(tip => <div key={tip.id} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-6">{tip.content}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>)}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-colors duration-300 font-medium shadow-md">
              Schedule a Compliance Consultation
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">
              Client Success
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from agricultural exporters who have transformed their
              businesses with our consultancy services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">
                "BLACKSTRIDE's consultancy services helped us navigate complex
                export regulations and expand into three new markets. Their
                expertise was invaluable to our growth."
              </p>
              <div>
                <h4 className="font-bold text-gray-800">Adebayo Johnson</h4>
                <p className="text-gray-500 text-sm">
                  CEO, GreenHarvest Exports
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Their weekly market intelligence reports have been crucial for
                our pricing strategy. We've increased our profit margins by 15%
                since working with BLACKSTRIDE."
              </p>
              <div>
                <h4 className="font-bold text-gray-800">Chioma Okafor</h4>
                <p className="text-gray-500 text-sm">
                  Operations Manager, AgriTech Exports
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">
                "The buyer network that BLACKSTRIDE connected us with has
                transformed our business. We now have stable, long-term
                relationships with premium buyers in Europe and Asia."
              </p>
              <div>
                <h4 className="font-bold text-gray-800">Oluwaseun Adeleke</h4>
                <p className="text-gray-500 text-sm">
                  Director, SunRise Agricultural Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="text-blue-600 font-semibold mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Ready to Optimize Your Export Strategy?
              </h2>
              <p className="text-gray-600 mb-8">
                Schedule a consultation with our export experts to discuss your
                specific needs and challenges. We're here to help you succeed in
                global markets.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Our Office
                </h3>
                <address className="text-gray-600 not-italic">
                  <p>Lagos, Nigeria</p>
                  <p className="mt-4">info@blackstrideltd.com</p>
                  <p className="mt-2">+234 123 456 7890</p>
                </address>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Business Hours
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Us
              </h3>
              <ContactForm buttonClassName="bg-blue-600 hover:bg-blue-700 text-white" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">{companyInfo.name}</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner in agricultural export consultancy,
                providing expert guidance and market intelligence since 2018.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Export Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Market Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Compliance Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};