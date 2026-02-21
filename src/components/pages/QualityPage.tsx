import React from 'react';
import { 
  FlaskConicalIcon, AwardIcon, TestTubeIcon, CheckCircleIcon, 
  GlobeIcon, ShieldIcon, FileTextIcon, TrendingUpIcon as TrendingUp,
  PackageIcon, SearchIcon, BarChart3Icon
} from 'lucide-react';
import { Logo } from '../shared/Logo';
import { ChevronRightIcon } from 'lucide-react';

const QualityPage: React.FC = () => {
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
          <div className="absolute top-0 right-0 w-[34rem] h-[34rem] bg-gradient-to-br from-emerald-200 via-teal-200 to-emerald-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3 labs-float-slow blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-gradient-to-br from-teal-200 via-emerald-200 to-teal-100 rounded-full opacity-25 translate-y-1/2 -translate-x-1/3 labs-float blur-2xl"></div>
          <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-white/40 rounded-full -translate-x-1/2 labs-pulse-soft blur-xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.70),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.50),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1.5 bg-white/70 backdrop-blur-sm text-emerald-800 rounded-full text-sm font-semibold shadow-sm ring-1 ring-emerald-200/60 labs-fade-up">
              🧪 Labs & Certification
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-800 labs-fade-up" style={{ animationDelay: '80ms' }}>
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Laboratory Testing & Export Certification
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto labs-fade-up" style={{ animationDelay: '160ms' }}>
              Through our affiliation with local and internationally recognized laboratories, we ensure all products 
              meet the highest quality standards and export requirements before shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* What Labs Are For */}
        <section className="mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 labs-fade-up">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-xl mr-4 shadow-sm ring-1 ring-emerald-200/60">
                <FlaskConicalIcon className="h-8 w-8 text-emerald-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">What Our Labs Are For</h2>
                <p className="text-gray-600">Comprehensive testing and certification services</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                  <GlobeIcon className="h-5 w-5 mr-2 text-emerald-700" />
                  Laboratory Affiliations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Local Laboratories</p>
                      <p className="text-sm text-gray-600">Regional testing facilities for quick assessments</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Internationally Recognized Labs</p>
                      <p className="text-sm text-gray-600">Global certification bodies for export compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                  <TestTubeIcon className="h-5 w-5 mr-2 text-teal-700" />
                  Testing Functions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <span className="text-emerald-700 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Test Agricultural Products</p>
                      <p className="text-sm text-gray-600">Comprehensive quality analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <span className="text-emerald-700 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Verify Quality Standards</p>
                      <p className="text-sm text-gray-600">Ensure compliance with specifications</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <span className="text-emerald-700 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Export Requirements</p>
                      <p className="text-sm text-gray-600">Meet international trade standards</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <span className="text-emerald-700 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Export-Ready Confirmation</p>
                      <p className="text-sm text-gray-600">Official certification for shipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
              <p className="text-gray-700 text-center font-medium">
                In simple terms: Before products are exported, they must pass proper testing standards — and our labs handle that.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Is Important */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🌍 Why This Is Important</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In the export business, especially for agricultural products, laboratory certification is crucial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl labs-card" style={{ animationDelay: '0ms' }}>
              <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                <ShieldIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality & Safety</h3>
              <p className="text-sm text-gray-600">Buyers care deeply about product quality and safety standards</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl labs-card" style={{ animationDelay: '80ms' }}>
              <div className="bg-teal-100 p-3 rounded-xl mb-4 inline-block">
                <FileTextIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Compliance Certificates</h3>
              <p className="text-sm text-gray-600">Countries require official compliance documentation</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl labs-card" style={{ animationDelay: '160ms' }}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-xl mb-4 inline-block">
                <TrendingUp className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Trust Building</h3>
              <p className="text-sm text-gray-600">Lab reports significantly increase buyer confidence</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl labs-card" style={{ animationDelay: '240ms' }}>
              <div className="bg-orange-100 p-3 rounded-xl mb-4 inline-block">
                <AwardIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">International Recognition</h3>
              <p className="text-sm text-gray-600">Global certification adds credibility and reputation</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden labs-fade-up" style={{ animationDelay: '280ms' }}>
            <div className="absolute inset-0 opacity-25">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/30 labs-float-slow"></div>
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/20 labs-float"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">What This Enables Us to Say</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block max-w-2xl">
                <p className="text-lg font-semibold mb-4">
                  "This product has been properly tested and certified for export."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mb-2">
                      <GlobeIcon className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="font-semibold">Buyer Confidence</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mb-2">
                      <CheckCircleIcon className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="font-semibold">Regulatory Compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mb-2">
                      <BarChart3Icon className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="font-semibold">Professional Reputation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🧭 Our Testing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Step-by-step quality assurance and certification workflow
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                      <PackageIcon className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 1
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Sample Collection</h3>
                    <p className="text-sm text-gray-600">Representative samples gathered from verified sources</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="bg-teal-100 p-3 rounded-xl mb-4 inline-block">
                      <FlaskConicalIcon className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 2
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Laboratory Testing</h3>
                    <p className="text-sm text-gray-600">Comprehensive analysis in accredited facilities</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                      <FileTextIcon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 3
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Report Generation</h3>
                    <p className="text-sm text-gray-600">Detailed quality and compliance reports</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="bg-orange-100 p-3 rounded-xl mb-4 inline-block">
                      <AwardIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                      Step 4
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Export Certification</h3>
                    <p className="text-sm text-gray-600">Official certification for international shipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Integration */}
        <section>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">📌 Strategic Integration</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our business has 3 main pillars that work together seamlessly
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                  <SearchIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">Field Intelligence</h3>
                <p className="text-sm text-gray-600 mb-4">Black Stride Explorers gather on-the-ground data and verify sources</p>
                <div className="text-xs text-emerald-600 font-semibold">EXPLORERS</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-teal-100 p-3 rounded-xl mb-4 inline-block">
                  <FlaskConicalIcon className="h-8 w-8 text-teal-700" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">Verification & Testing</h3>
                <p className="text-sm text-gray-600 mb-4">Laboratory testing ensures quality and export readiness</p>
                <div className="text-xs text-teal-700 font-semibold">LABS</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-xl mb-4 inline-block">
                  <BarChart3Icon className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">Export Execution</h3>
                <p className="text-sm text-gray-600 mb-4">Complete logistics and international trade management</p>
                <div className="text-xs text-emerald-700 font-semibold">OPERATIONS</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">The Lab Supports the Process</h3>
                <p className="text-emerald-100 max-w-2xl mx-auto">
                  Laboratory testing is not our headline service — it's a critical support system that 
                  ensures our field intelligence translates into export-ready, certified products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes labsFloat {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -14px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .labs-float { animation: labsFloat 6s ease-in-out infinite; }
        .labs-float-slow { animation: labsFloat 10s ease-in-out infinite; }

        @keyframes labsFadeUp {
          0% { opacity: 0; transform: translate3d(0, 14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .labs-fade-up {
          opacity: 0;
          animation: labsFadeUp 700ms ease-out forwards;
        }

        @keyframes labsPulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.06); opacity: 0.8; }
        }
        .labs-pulse-soft { animation: labsPulseSoft 4.8s ease-in-out infinite; }

        .labs-card {
          opacity: 0;
          animation: labsFadeUp 700ms ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QualityPage;
