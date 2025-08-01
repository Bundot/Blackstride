import React, { useEffect, useRef } from 'react';
import { ArrowUpIcon, ArrowDownIcon, BookOpenIcon, MessageCircleIcon, CalendarIcon, ThumbsUpIcon, UsersIcon, ChevronRightIcon, GlobeIcon, LeafIcon, TruckIcon } from 'lucide-react';
import { ContactForm } from '../shared/ContactForm';
import { Logo } from '../shared/Logo';
import { productData, priceData, exportTips, companyInfo } from '../shared/ProductData';
// Animation helper component for fade-in effects
const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: string;
  duration?: string;
  className?: string;
}> = ({
  children,
  delay = '0ms',
  duration = '1000ms',
  className = ''
}) => {
  return <div className={`animate-fade-in ${className}`} style={{
    animationDelay: delay,
    animationDuration: duration
  }}>
      {children}
    </div>;
};
export const CommunityDriven: React.FC = () => {
  // Refs for scroll animations
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up-fade');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    // Add all section elements to the observer
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(el => {
      observer.observe(el);
    });
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <div className="bg-white text-gray-800 w-full font-sans overflow-hidden">
      {/* Hero Section with animated background */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-96 h-96 rounded-full bg-white opacity-5 -top-20 -left-20 animate-float-slow"></div>
          <div className="absolute w-64 h-64 rounded-full bg-white opacity-5 bottom-10 right-10 animate-float"></div>
          <div className="absolute w-32 h-32 rounded-full bg-white opacity-5 top-40 right-1/4 animate-pulse-slow"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 z-10 relative">
          <nav className="flex justify-between items-center py-4 mb-12">
            <Logo variant="light" size="md" className="animate-fade-in" />
            <div className="hidden md:flex items-center space-x-6 animate-fade-in">
              <a href="#" className="text-white hover:text-emerald-100 transition-colors">
                Home
              </a>
              <a href="#" className="text-white hover:text-emerald-100 transition-colors">
                About
              </a>
              <a href="#" className="text-white hover:text-emerald-100 transition-colors">
                Products
              </a>
              <a href="#" className="text-white hover:text-emerald-100 transition-colors">
                Community
              </a>
              <a href="#" className="text-white hover:text-emerald-100 transition-colors">
                Contact
              </a>
              <a href="#" className="bg-white text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-full transition-colors font-medium">
                Join Now
              </a>
            </div>
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay="200ms">
                <div className="inline-block mb-6 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  Join Our Export Community
                </div>
              </FadeIn>
              <FadeIn delay="400ms">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {companyInfo.name}
                </h1>
              </FadeIn>
              <FadeIn delay="600ms">
                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                  {companyInfo.tagline} Connect with our community of exporters
                  for insights, tips, and market updates.
                </p>
              </FadeIn>
              <FadeIn delay="800ms">
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-emerald-600 hover:bg-gray-100 py-3 px-8 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Join Community
                  </button>
                  <button className="bg-transparent hover:bg-white/10 text-white py-3 px-8 rounded-full border border-white/30 transition-all duration-300 font-medium backdrop-blur-sm hover:border-white">
                    Learn More
                  </button>
                </div>
              </FadeIn>
            </div>
            <div className="lg:flex justify-end hidden">
              <FadeIn delay="600ms" className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-emerald-400 rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-400 rounded-full opacity-20 animate-float"></div>
                <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="Agricultural Export Community" className="relative z-10 rounded-lg shadow-2xl transform transition-transform duration-700 hover:scale-105" />
              </FadeIn>
            </div>
          </div>
          {/* Animated scroll down indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white/70 text-sm mb-1">Scroll Down</span>
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      {/* Latest Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 scroll-animation opacity-0 translate-y-8">
              Latest Updates
            </h2>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center group scroll-animation opacity-0 translate-y-8">
              View All Updates
              <ChevronRightIcon className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map(index => <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-animation opacity-0 translate-y-8" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <CalendarIcon className="h-5 w-5 text-emerald-500 mr-2" />
                    <span className="text-sm text-gray-500">
                      {new Date(2023, 4, 15 - index * 5).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {index === 0 && 'Weekly Market Price Update'}
                    {index === 1 && 'New European Union Import Regulations'}
                    {index === 2 && 'Community Spotlight: Success Story'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0 && "This week's price trends show an increase in Hibiscus and Cashew Nut prices, while Sesame Seeds see a slight decrease."}
                    {index === 1 && 'Important changes to EU import regulations affecting agricultural products. Learn how to prepare your exports.'}
                    {index === 2 && 'How one of our community members increased their export volume by 30% using our market intelligence reports.'}
                  </p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center group scroll-animation opacity-0 translate-y-8" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 rounded-l-full opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full opacity-50 -z-10"></div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium scroll-animation opacity-0 translate-y-8">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-animation opacity-0 translate-y-8">
                Building a Community of Export Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed scroll-animation opacity-0 translate-y-8">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed scroll-animation opacity-0 translate-y-8">
                Our community-driven approach connects exporters across Nigeria,
                providing a platform for knowledge sharing, networking, and
                collaborative growth. Together, we're stronger in the global
                marketplace.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center scroll-animation opacity-0 translate-y-8">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4 transform transition-transform duration-300 hover:scale-110 hover:bg-emerald-200">
                    <UsersIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      <span className="inline-block animate-count-up" data-target="500">
                        0
                      </span>
                      +
                    </h4>
                    <p className="text-gray-600 text-sm">Community Members</p>
                  </div>
                </div>
                <div className="flex items-center scroll-animation opacity-0 translate-y-8" style={{
                transitionDelay: '100ms'
              }}>
                  <div className="bg-emerald-100 p-3 rounded-full mr-4 transform transition-transform duration-300 hover:scale-110 hover:bg-emerald-200">
                    <BookOpenIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      <span className="inline-block animate-count-up" data-target="200">
                        0
                      </span>
                      +
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Educational Resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg scroll-animation opacity-0 translate-y-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Community Values
              </h3>
              <div className="space-y-4">
                {companyInfo.values.map((value, index) => <div key={index} className="flex p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 scroll-animation opacity-0 translate-y-8" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                    <div className="bg-emerald-100 h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-600">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{value}</h4>
                      <p className="text-gray-600 text-sm">
                        {value === 'Trust' && 'Building reliable relationships with our community and partners.'}
                        {value === 'Competence' && 'Delivering expert knowledge and proven results.'}
                        {value === 'Value' && 'Creating meaningful impact for our community members.'}
                        {value === 'Sustainability' && 'Promoting practices that protect our environment.'}
                        {value === 'Community Development' && 'Investing in the growth of our agricultural community.'}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-emerald-600 text-white relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animation opacity-0 translate-y-8">
              Why Join Our Community?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto scroll-animation opacity-0 translate-y-8">
              Connect with fellow exporters, access exclusive resources, and
              stay ahead in the global market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: <GlobeIcon className="h-10 w-10" />,
            title: 'Global Network',
            description: 'Connect with buyers and exporters across 30+ countries through our exclusive community platform.'
          }, {
            icon: <LeafIcon className="h-10 w-10" />,
            title: 'Sustainable Practices',
            description: 'Learn best practices for sustainable agriculture and environmentally responsible export operations.'
          }, {
            icon: <TruckIcon className="h-10 w-10" />,
            title: 'Logistics Support',
            description: 'Get guidance on shipping, documentation, and regulatory compliance from experienced members.'
          }].map((feature, index) => <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 scroll-animation opacity-0 translate-y-8" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="bg-white/20 p-4 rounded-full inline-block mb-6 animate-pulse-slow">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium scroll-animation opacity-0 translate-y-8">
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-animation opacity-0 translate-y-8">
              Featured Export Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto scroll-animation opacity-0 translate-y-8">
              Our community specializes in these premium Nigerian agricultural
              products, connecting local farmers with global markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productData.map((product, index) => <div key={product.id} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scroll-animation opacity-0 translate-y-8" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="md:w-2/5 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ThumbsUpIcon className="h-5 w-5 text-emerald-500 mr-2" />
                        <span className="text-sm text-gray-500">
                          <span className="font-medium">
                            {128 - index * 20}
                          </span>{' '}
                          Exporters
                        </span>
                      </div>
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center group scroll-animation opacity-0 translate-y-8" style={{
                    transitionDelay: `${index * 100}ms`
                  }}>
                        View Discussions
                        <ChevronRightIcon className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Price Updates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium scroll-animation opacity-0 translate-y-8">
              Market Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-animation opacity-0 translate-y-8">
              Weekly Price Updates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto scroll-animation opacity-0 translate-y-8">
              Stay informed with our community-sourced price updates and market
              trends.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden scroll-animation opacity-0 translate-y-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
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
                      Community Sentiment
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {priceData.map((item, index) => <tr key={index} className="hover:bg-gray-50 transition-colors duration-150" style={{
                  animationDelay: `${index * 100}ms`
                }}>
                      <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-800">
                        {item.product}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap text-emerald-600 font-medium">
                        {item.price}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`${item.trend === 'up' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                          {item.change}
                        </span>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        {item.trend === 'up' ? <span className="text-green-600 flex items-center">
                            <ArrowUpIcon className="h-4 w-4 mr-1 animate-bounce-subtle" />{' '}
                            Rising
                          </span> : <span className="text-red-600 flex items-center">
                            <ArrowDownIcon className="h-4 w-4 mr-1 animate-bounce-down-subtle" />{' '}
                            Falling
                          </span>}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className={`h-2 w-16 rounded-full ${item.trend === 'up' ? 'bg-gradient-to-r from-green-200 to-green-500' : 'bg-gradient-to-r from-red-200 to-red-500'} animate-pulse-slow`}></div>
                          <span className="ml-2 text-sm text-gray-600">
                            {item.trend === 'up' ? 'Optimistic' : 'Cautious'}
                          </span>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="flex items-center">
                  <MessageCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    24 comments on this update
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center scroll-animation opacity-0 translate-y-8">
            <a href="#" className="inline-block bg-emerald-100 text-emerald-700 hover:bg-emerald-200 py-2 px-6 rounded-full transition-all duration-300 text-sm font-medium hover:shadow-md hover:-translate-y-1">
              Join Price Discussion Forum
            </a>
          </div>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium scroll-animation opacity-0 translate-y-8">
              Community Knowledge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-animation opacity-0 translate-y-8">
              Export Tips & Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto scroll-animation opacity-0 translate-y-8">
              Learn from our community's collective experience and expert
              contributors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportTips.map((tip, index) => <div key={tip.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scroll-animation opacity-0 translate-y-8" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110 hover:bg-emerald-200">
                    <BookOpenIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {tip.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-gray-800">
                      {tip.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{tip.content}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 animate-fade-in" style={{
                  animationDelay: `${800 + index * 100}ms`
                }}>
                      <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/42.jpg" alt="User" />
                      <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                      <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/24.jpg" alt="User" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      +12 contributors
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center text-gray-500 hover:text-emerald-600 transition-colors mr-3">
                      <ThumbsUpIcon className="h-5 w-5 text-emerald-500 mr-1" />
                      <span className="text-sm">48</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-emerald-600 transition-colors">
                      <MessageCircleIcon className="h-5 w-5 text-emerald-500 mr-1" />
                      <span className="text-sm">16</span>
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-12 text-center scroll-animation opacity-0 translate-y-8">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-8 rounded-full transition-all duration-300 font-medium shadow-md hover:shadow-xl hover:-translate-y-1">
              Browse All Community Resources
            </button>
          </div>
        </div>
      </section>
      {/* Community Join Section */}
      <section className="py-20 bg-emerald-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10 animate-float"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-white opacity-10 animate-float-slow"></div>
          <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-white opacity-10 animate-pulse-slow"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animation opacity-0 translate-y-8">
                Join Our Export Community Today
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed scroll-animation opacity-0 translate-y-8">
                Connect with fellow exporters, access exclusive resources, and
                stay updated with the latest market trends and opportunities.
              </p>
              <div className="space-y-6">
                {[{
                title: 'Weekly Market Updates',
                description: 'Get the latest price trends and market analysis delivered to your inbox.'
              }, {
                title: 'Expert Q&A Sessions',
                description: 'Participate in monthly webinars and Q&A sessions with industry experts.'
              }, {
                title: 'Networking Opportunities',
                description: 'Connect with buyers, logistics partners, and fellow exporters in our community.'
              }].map((benefit, index) => <div key={index} className="flex items-start scroll-animation opacity-0 translate-y-8" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                    <div className="bg-emerald-500 p-2 rounded-full mr-4 mt-1 transform transition-transform duration-300 hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-white/80">{benefit.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl scroll-animation opacity-0 translate-y-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Sign Up for Community Access
              </h3>
              <ContactForm className="bg-white text-gray-800" buttonClassName="bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 hover:shadow-lg" />
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  By joining, you agree to our{' '}
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium scroll-animation opacity-0 translate-y-8">
              Community Calendar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-animation opacity-0 translate-y-8">
              Upcoming Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto scroll-animation opacity-0 translate-y-8">
              Join our virtual and in-person events to learn, network, and grow
              your export business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            day: '23',
            month: 'MAY',
            title: 'Export Documentation Webinar',
            description: 'Learn how to properly prepare and manage your export documentation to avoid delays and complications.',
            time: 'May 23, 2023 • 2:00 PM WAT'
          }, {
            day: '02',
            month: 'JUN',
            title: 'Market Entry Strategy Workshop',
            description: 'Develop effective strategies for entering new international markets with your agricultural products.',
            time: 'June 2, 2023 • 10:00 AM WAT'
          }, {
            day: '15',
            month: 'JUN',
            title: 'Lagos Exporters Networking Event',
            description: 'In-person networking event for agricultural exporters to connect and share experiences and opportunities.',
            time: 'June 15, 2023 • 4:00 PM WAT'
          }].map((event, index) => <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-animation opacity-0 translate-y-8" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="bg-emerald-100 text-emerald-700 w-16 h-16 rounded-lg flex flex-col items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110 hover:bg-emerald-200">
                  <span className="text-lg font-bold">{event.day}</span>
                  <span className="text-xs">{event.month}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                </div>
                <button className="w-full bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 rounded-lg transition-all duration-300 font-medium hover:shadow-md">
                  Register Now
                </button>
              </div>)}
          </div>
          <div className="mt-8 text-center scroll-animation opacity-0 translate-y-8">
            <a href="#" className="inline-block text-emerald-600 hover:text-emerald-700 font-medium group transition-colors">
              View Full Calendar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Logo variant="light" size="md" className="mb-6" />
              <p className="text-gray-300 mb-6 max-w-md">
                Building a community of agricultural exporters committed to
                excellence, knowledge sharing, and mutual growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 hover:bg-emerald-600 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-emerald-600 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-emerald-600 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-emerald-600 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Community Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Discussion Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Market Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Export Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Events Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                    Member Directory
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Animated scroll to top button */}
      <button className="fixed bottom-8 right-8 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-90 hover:opacity-100 z-50" onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      {/* Global Animations CSS */}
      <style jsx global>{`
        /* Fade in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn forwards ease-out;
        }
        /* Slide up and fade in animation */
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up-fade {
          animation: slideUpFade 0.7s forwards ease-out;
        }
        /* Floating animation */
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 7s ease-in-out infinite;
        }
        /* Pulse animation */
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite ease-in-out;
        }
        /* Subtle bounce for arrows */
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
        @keyframes bounce-down-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(3px);
          }
        }
        .animate-bounce-down-subtle {
          animation: bounce-down-subtle 2s infinite ease-in-out;
        }
        /* Count up animation for numbers */
        @keyframes countUp {
          from {
            content: attr(data-start);
          }
          to {
            content: attr(data-target);
          }
        }
        .animate-count-up {
          animation: countUp 2s forwards ease-out;
          counter-reset: count attr(data-start);
          animation-delay: 0.5s;
        }
      `}</style>
    </div>;
};