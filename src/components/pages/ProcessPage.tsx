import React from 'react';
import { 
  FileTextIcon, DollarSignIcon, ShieldIcon, PlayIcon, ClockIcon, 
  CheckSquareIcon, ArrowRightIcon, YoutubeIcon, MessageCircleIcon, 
  SearchIcon, CheckCircleIcon, PackageIcon, TruckIcon, BarChart3Icon
} from 'lucide-react';
import { Logo } from '../shared/Logo';
import { ChevronRightIcon } from 'lucide-react';

const ProcessPage: React.FC = () => {
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
          <div className="absolute top-0 right-0 w-[34rem] h-[34rem] bg-gradient-to-br from-emerald-200 via-teal-200 to-emerald-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3 process-float-slow blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-gradient-to-br from-teal-200 via-emerald-200 to-teal-100 rounded-full opacity-25 translate-y-1/2 -translate-x-1/3 process-float blur-2xl"></div>
          <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-white/40 rounded-full -translate-x-1/2 process-pulse-soft blur-xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.70),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.50),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1.5 bg-white/70 backdrop-blur-sm text-emerald-800 rounded-full text-sm font-semibold shadow-sm ring-1 ring-emerald-200/60 process-fade-up">
              🧭 How We Work
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-800 process-fade-up" style={{ animationDelay: '80ms' }}>
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Our Process
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto process-fade-up" style={{ animationDelay: '160ms' }}>
              Understanding exactly how Black Stride operates - from initial inquiry to final delivery. 
              Complete transparency in every step of our agricultural sourcing process.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Main Question Being Answered */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden process-fade-up">
            <div className="absolute inset-0 opacity-25">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/30 process-float-slow"></div>
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/20 process-float"></div>
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">The Main Question Being Answered</h2>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
                <p className="text-xl font-semibold">"How exactly does Black Stride do business?"</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                <div className="flex items-center mb-2">
                  <FileTextIcon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">What is the process?</span>
                </div>
                <p className="text-sm text-emerald-100">Clear step-by-step workflow from start to finish</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                <div className="flex items-center mb-2">
                  <DollarSignIcon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">How do transactions work?</span>
                </div>
                <p className="text-sm text-emerald-100">Transparent payment structure and timelines</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                <div className="flex items-center mb-2">
                  <ShieldIcon className="h-5 w-5 mr-2 text-emerald-200" />
                  <span className="font-semibold">How are products verified?</span>
                </div>
                <p className="text-sm text-emerald-100">Quality assurance and verification protocols</p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <YoutubeIcon className="h-8 w-8 mr-3 text-red-600" />
              Watch Our Complete Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Instead of explaining our process manually every time, we've created a comprehensive video 
              that explains everything you need to know about working with Black Stride.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Black Stride Process Video" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <PlayIcon className="h-12 w-12" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  12:45
                </div>
              </div>
              
              {/* Video Description */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckSquareIcon className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">How Black Stride operates</p>
                      <p className="text-sm text-gray-600">Our business model and approach</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckSquareIcon className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">The sourcing process</p>
                      <p className="text-sm text-gray-600">How we find and select products</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckSquareIcon className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Fieldwork operations</p>
                      <p className="text-sm text-gray-600">Black Stride Explorers in action</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckSquareIcon className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Lab testing procedures</p>
                      <p className="text-sm text-gray-600">Quality assurance protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckSquareIcon className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Payment structure</p>
                      <p className="text-sm text-gray-600">Transparent pricing and terms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckSquareIcon className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Verification steps</p>
                      <p className="text-sm text-gray-600">Complete verification workflow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Do This */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📋 Why We Do This</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Two main reasons for our transparent, video-based approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                  <ClockIcon className="h-8 w-8 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Efficiency</h3>
                  <p className="text-gray-600">Save time for everyone</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-3 mt-1">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No More Repetitive Explanations</p>
                    <p className="text-sm text-gray-600">We don't repeat the same process to every new customer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-3 mt-1">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No Constant Clarifications</p>
                    <p className="text-sm text-gray-600">Stop explaining the same process repeatedly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-3 mt-1">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No Unnecessary Time Waste</p>
                    <p className="text-sm text-gray-600">Focus on business, not basic questions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                  <ShieldIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Transparency</h3>
                  <p className="text-gray-600">Build trust through clarity</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Immediate Understanding</p>
                    <p className="text-sm text-gray-600">Visitors immediately understand how we work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Clear Expectations</p>
                    <p className="text-sm text-gray-600">Everyone knows exactly what to expect</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No Surprises</p>
                    <p className="text-sm text-gray-600">Complete transparency in all dealings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">What This Builds</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-3 inline-block">
                    <ShieldIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-semibold">Trust</p>
                  <p className="text-sm text-blue-100">Reliable and transparent operations</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-3 inline-block">
                    <BarChart3Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-semibold">Professionalism</p>
                  <p className="text-sm text-blue-100">Standardized, efficient processes</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-3 inline-block">
                    <CheckCircleIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-semibold">Clarity</p>
                  <p className="text-sm text-blue-100">Clear communication and expectations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🔁 The Process Flow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete workflow from initial inquiry to final delivery
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center relative z-10">
                    <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                      <MessageCircleIcon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 1
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Customer Inquiry</h3>
                    <p className="text-sm text-gray-600">Initial contact and requirements discussion</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center relative z-10">
                    <div className="bg-blue-100 p-3 rounded-xl mb-4 inline-block">
                      <SearchIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 2
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Field Verification</h3>
                    <p className="text-sm text-gray-600">Black Stride Explorers verify products</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center relative z-10">
                    <div className="bg-purple-100 p-3 rounded-xl mb-4 inline-block">
                      <CheckCircleIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 3
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Product Confirmation</h3>
                    <p className="text-sm text-gray-600">Quality and availability confirmed</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center relative z-10">
                    <div className="bg-orange-100 p-3 rounded-xl mb-4 inline-block">
                      <PackageIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 4
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Lab Testing</h3>
                    <p className="text-sm text-gray-600">Quality testing and certification</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center relative z-10">
                    <div className="bg-red-100 p-3 rounded-xl mb-4 inline-block">
                      <DollarSignIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 5
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Payment Structure</h3>
                    <p className="text-sm text-gray-600">Transparent terms and conditions</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center relative z-10">
                    <div className="bg-green-100 p-3 rounded-xl mb-4 inline-block">
                      <TruckIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 6
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Final Transaction</h3>
                    <p className="text-sm text-gray-600">Delivery and completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Terms Summary */}
        <section>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 In Business Terms</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What we're building is a standardized approach to client onboarding and process transparency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4 text-red-600">Instead of:</h3>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-700 italic mb-3">"Let's explain ourselves every time."</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <ArrowRightIcon className="h-4 w-4 mr-2 text-gray-400" />
                      Manual explanations for each client
                    </li>
                    <li className="flex items-center">
                      <ArrowRightIcon className="h-4 w-4 mr-2 text-gray-400" />
                      Repetitive process discussions
                    </li>
                    <li className="flex items-center">
                      <ArrowRightIcon className="h-4 w-4 mr-2 text-gray-400" />
                      Time-consuming onboarding
                    </li>
                    <li className="flex items-center">
                      <ArrowRightIcon className="h-4 w-4 mr-2 text-gray-400" />
                      Inconsistent information delivery
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4 text-green-600">We want:</h3>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-700 italic mb-3">"Here is how we operate. Watch this. Now let's move forward."</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckSquareIcon className="h-4 w-4 mr-2 text-green-600" />
                      Standardized onboarding system
                    </li>
                    <li className="flex items-center">
                      <CheckSquareIcon className="h-4 w-4 mr-2 text-green-600" />
                      Process transparency page
                    </li>
                    <li className="flex items-center">
                      <CheckSquareIcon className="h-4 w-4 mr-2 text-green-600" />
                      Self-serve explanation model
                    </li>
                    <li className="flex items-center">
                      <CheckSquareIcon className="h-4 w-4 mr-2 text-green-600" />
                      Client education funnel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">The Result</h3>
                <p className="text-emerald-100 max-w-2xl mx-auto">
                  A professional, efficient, and transparent process that builds trust and allows us to 
                  focus on what matters most - delivering quality agricultural products to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes processFloat {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -14px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .process-float { animation: processFloat 6s ease-in-out infinite; }
        .process-float-slow { animation: processFloat 10s ease-in-out infinite; }

        @keyframes processFadeUp {
          0% { opacity: 0; transform: translate3d(0, 14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .process-fade-up {
          opacity: 0;
          animation: processFadeUp 700ms ease-out forwards;
        }

        @keyframes processPulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.06); opacity: 0.8; }
        }
        .process-pulse-soft { animation: processPulseSoft 4.8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ProcessPage;
