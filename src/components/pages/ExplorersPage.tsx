import React from 'react';
import { 
  SearchIcon, MapPinIcon, CheckCircleIcon, VideoIcon, CameraIcon, 
  PackageIcon, BookOpenIcon, MessageCircleIcon, UsersIcon, UserCheckIcon,
  BarChart3Icon, TrendingUpIcon as TrendingUp, DollarSignIcon
} from 'lucide-react';
import { Logo } from '../shared/Logo';
import { ChevronRightIcon } from 'lucide-react';

const ExplorersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Logo variant="color" size="md" />
            <a 
              href="#/" 
              className="flex items-center text-[#023a48] hover:text-[#012b36] font-medium"
            >
              <ChevronRightIcon className="h-4 w-4 mr-1 rotate-180" />
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[34rem] h-[34rem] bg-gradient-to-br from-emerald-200 via-teal-200 to-emerald-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3 explorers-float-slow blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-gradient-to-br from-teal-200 via-emerald-200 to-teal-100 rounded-full opacity-25 translate-y-1/2 -translate-x-1/3 explorers-float blur-2xl"></div>
          <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-white/40 rounded-full -translate-x-1/2 explorers-pulse-soft blur-xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.70),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.50),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1.5 bg-white/70 backdrop-blur-sm text-emerald-800 rounded-full text-sm font-semibold shadow-sm ring-1 ring-emerald-200/60 explorers-fade-up">
              🔎 Our Network
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-800 explorers-fade-up" style={{ animationDelay: '80ms' }}>
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Become a Black Stride Explorer
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto explorers-fade-up" style={{ animationDelay: '160ms' }}>
              Local intelligence agents gathering on-the-ground agricultural data across different regions, 
              providing real-time market insights without the need for full-time staff everywhere.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 explorers-fade-up" style={{ animationDelay: '240ms' }}>
              <a
                href="#apply"
                className="group inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-200/70 hover:shadow-xl hover:shadow-emerald-200/80 transition-all duration-300 hover:-translate-y-0.5 explorers-glow"
              >
                Apply to Become an Explorer
                <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <span className="block h-1.5 w-1.5 rounded-full bg-white explorers-ping-dot"></span>
                </span>
              </a>
              <a
                href="#what"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/70 backdrop-blur-sm text-emerald-900 font-semibold ring-1 ring-emerald-200/70 shadow-sm hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* What Explorers Are */}
        <section className="mb-20" id="what">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 explorers-fade-up">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-xl mr-4 shadow-sm ring-1 ring-emerald-200/60">
                <SearchIcon className="h-8 w-8 text-emerald-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">What "Black Stride Explorers" Are</h2>
                <p className="text-gray-600">Local experts who gather on-the-ground intelligence</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Instead of:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Employing full-time workers in every region</p>
                      <p className="text-sm text-gray-600">High overhead costs and management complexity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Spending heavily on travel and logistics</p>
                      <p className="text-sm text-gray-600">Time-consuming and expensive operations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">We do:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Local explorers who already live in those areas</p>
                      <p className="text-sm text-gray-600">Cost-effective and authentic local insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Distributed field operations network</p>
                      <p className="text-sm text-gray-600">Scalable and flexible coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Explorers Do */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📍 What These Explorers Actually Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Their main role is comprehensive data gathering and field intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                <MapPinIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visit Farms</h3>
              <p className="text-sm text-gray-600">On-site visits to agricultural locations and production facilities</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl mb-4 inline-block">
                <PackageIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Check Products</h3>
              <p className="text-sm text-gray-600">Quality assessment and verification of agricultural products</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                <UsersIcon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Collect Contacts</h3>
              <p className="text-sm text-gray-600">Build network of local farmers, suppliers, and distributors</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-xl mb-4 inline-block">
                <VideoIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Record Videos</h3>
              <p className="text-sm text-gray-600">Visual documentation of products and production processes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl mb-4 inline-block">
                <CameraIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Take Samples</h3>
              <p className="text-sm text-gray-600">Physical product samples for quality testing and verification</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 p-3 rounded-xl mb-4 inline-block">
                <BookOpenIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gather Information</h3>
              <p className="text-sm text-gray-600">Detailed product specifications, pricing, and availability data</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl mb-4 inline-block">
                <MessageCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Report Feedback</h3>
              <p className="text-sm text-gray-600">Real-time market insights and field intelligence reports</p>
            </div>
          </div>
        </section>

        {/* Example Scenario */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MapPinIcon className="h-8 w-8 mr-3" />
              Example: Chicago Hibiscus Market
            </h2>
            <p className="text-emerald-100 mb-6 text-lg">
              If there are 5 regions in Chicago producing hibiscus, explorers would:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <MapPinIcon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">Visit Each Region</span>
                </div>
                <p className="text-sm text-emerald-100">On-site assessment of all production areas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <UsersIcon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">Check Farmers</span>
                </div>
                <p className="text-sm text-emerald-100">Meet with local growers and suppliers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <PackageIcon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">Quality Assessment</span>
                </div>
                <p className="text-sm text-emerald-100">Evaluate type and quality of hibiscus</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">Pricing Analysis</span>
                </div>
                <p className="text-sm text-emerald-100">Current market rates and trends</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <BarChart3Icon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">Timing & Availability</span>
                </div>
                <p className="text-sm text-emerald-100">Harvest schedules and supply windows</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <UsersIcon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">Collect Contacts</span>
                </div>
                <p className="text-sm text-emerald-100">Build supplier network database</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Verification */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📦 Product Confirmation & Quality Control</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When there's a specific product the company wants to buy, instead of traveling there personally:
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-6 flex items-center">
                  <UserCheckIcon className="h-6 w-6 mr-2 text-emerald-700" />
                  The Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-emerald-700 font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Assign Trained Explorer</p>
                      <p className="text-sm text-gray-600">Local expert in the specific area is deployed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-emerald-700 font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Product Verification</p>
                      <p className="text-sm text-gray-600">Confirms product exists and meets specifications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-emerald-700 font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Quality Assessment</p>
                      <p className="text-sm text-gray-600">Verifies quality standards are met</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-emerald-700 font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Supplier Validation</p>
                      <p className="text-sm text-gray-600">Confirms supplier is legitimate and reliable</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3 mt-1">
                      <span className="text-emerald-700 font-bold">5</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Task Completion</p>
                      <p className="text-sm text-gray-600">Explorer gets paid for successful verification</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-6 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 mr-2 text-green-600" />
                  Explorer Roles
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-2">
                        <span className="text-green-600 text-xs font-bold">1</span>
                      </div>
                      Field Inspector
                    </h4>
                    <p className="text-sm text-gray-600">On-site verification and assessment of products and suppliers</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="bg-emerald-100 p-1 rounded mr-2">
                        <span className="text-emerald-700 text-xs font-bold">2</span>
                      </div>
                      Quality Assurance Agent
                    </h4>
                    <p className="text-sm text-gray-600">Ensures products meet quality standards and specifications</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="bg-teal-100 p-1 rounded mr-2">
                        <span className="text-teal-700 text-xs font-bold">3</span>
                      </div>
                      Sourcing Verifier
                    </h4>
                    <p className="text-sm text-gray-600">Validates supplier legitimacy and product availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Concept Summary */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">💡 The Core Concept</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              "Just within basic concept of explorer be that"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl explorers-card" style={{ animationDelay: '0ms' }}>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl mb-4 inline-block">
                <UsersIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Local Field Data</h3>
              <p className="text-sm text-gray-600">On-the-ground information collection</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl explorers-card" style={{ animationDelay: '80ms' }}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-4 rounded-xl mb-4 inline-block">
                <TrendingUp className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Market Intelligence</h3>
              <p className="text-sm text-gray-600">Real-time market insights and trends</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl explorers-card" style={{ animationDelay: '160ms' }}>
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 p-4 rounded-xl mb-4 inline-block">
                <CheckCircleIcon className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Product Verification</h3>
              <p className="text-sm text-gray-600">Quality and authenticity confirmation</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl explorers-card" style={{ animationDelay: '240ms' }}>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-xl mb-4 inline-block">
                <DollarSignIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Task-Based Payment</h3>
              <p className="text-sm text-gray-600">Paid per assignment, not full-time</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white text-center relative overflow-hidden explorers-fade-up" style={{ animationDelay: '280ms' }}>
            <div className="absolute inset-0 opacity-25">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/30 explorers-float-slow"></div>
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/20 explorers-float"></div>
            </div>
            <div className="relative">
            <h3 className="text-2xl font-bold mb-4">🎯 In Business Terms</h3>
            <p className="text-emerald-100 mb-6 text-lg max-w-3xl mx-auto">
              This is essentially a distributed field operations network, a crowdsourced verification system, 
              and a localized sourcing intelligence model.
            </p>
            <p className="text-emerald-200">
              Similar to how delivery platforms use local riders — but for agricultural data and verification instead.
            </p>
            </div>
          </div>
        </section>

        <section id="apply" className="pb-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 explorers-fade-up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                  Ready to become an Explorer?
                </h2>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Get started in minutes. We'll guide you through onboarding and the first verification tasks.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="#/process"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-emerald-900 font-semibold ring-1 ring-emerald-200/70 shadow-sm hover:bg-emerald-50 transition-all duration-300"
                >
                  View Our Process
                </a>
                <a
                  href="#/dashboard"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-200/60 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore the Dashboard
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes explorersFloat {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -14px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        .explorers-float { animation: explorersFloat 6s ease-in-out infinite; }
        .explorers-float-slow { animation: explorersFloat 10s ease-in-out infinite; }

        @keyframes explorersFadeUp {
          0% { opacity: 0; transform: translate3d(0, 14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .explorers-fade-up {
          opacity: 0;
          animation: explorersFadeUp 700ms ease-out forwards;
        }

        @keyframes explorersPulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.06); opacity: 0.8; }
        }
        .explorers-pulse-soft { animation: explorersPulseSoft 4.8s ease-in-out infinite; }

        @keyframes explorersGlow {
          0%, 100% { box-shadow: 0 18px 45px rgba(16, 185, 129, 0.22); }
          50% { box-shadow: 0 22px 60px rgba(13, 148, 136, 0.28); }
        }
        .explorers-glow { animation: explorersGlow 4.2s ease-in-out infinite; }

        @keyframes explorersPingDot {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(2.5); opacity: 0; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .explorers-ping-dot { position: relative; }
        .explorers-ping-dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.75);
          animation: explorersPingDot 1.4s ease-out infinite;
        }

        .explorers-card {
          opacity: 0;
          animation: explorersFadeUp 700ms ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ExplorersPage;
