import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Logo } from '../shared/Logo';
import ModernDashboard from '../shared/ModernDashboard';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-br from-emerald-200 via-teal-200 to-emerald-100 rounded-full opacity-25 -translate-y-1/2 translate-x-1/3 dash-float-slow blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-gradient-to-br from-teal-200 via-emerald-200 to-teal-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/3 dash-float blur-2xl"></div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-emerald-100 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
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
      </div>

      <ModernDashboard />

      <style>{`
        @keyframes dashFloat {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .dash-float { animation: dashFloat 6s ease-in-out infinite; }
        .dash-float-slow { animation: dashFloat 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default DashboardPage;
