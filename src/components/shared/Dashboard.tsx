import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon, CalendarIcon, TrendingUpIcon, TrendingDownIcon, BarChart3Icon, LeafIcon, GlobeIcon, DollarSignIcon } from 'lucide-react';
import { localProducts, internationalProducts, localPriceData, internationalPriceData } from './ProductData';


const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'seasons' | 'pricing'>('seasons');
  const [selectedMarket, setSelectedMarket] = useState<'local' | 'international'>('local');
  const [animatedNumbers, setAnimatedNumbers] = useState<{ [key: string]: number }>({});

  // Animation for numbers
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        localProducts: localProducts.length,
        internationalProducts: internationalProducts.length,
        totalProducts: localProducts.length + internationalProducts.length
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const getSeasonStatus = (plantingSeason: string, harvestSeason: string) => {
    const currentMonth = new Date().getMonth();
    
    const getMonthRange = (season: string) => {
      const [start, end] = season.split(' - ').map(m => months.indexOf(m.trim()));
      return { start, end };
    };
    
    const planting = getMonthRange(plantingSeason);
    const harvest = getMonthRange(harvestSeason);
    
    if (currentMonth >= planting.start && currentMonth <= planting.end) {
      return { status: 'Planting', color: 'green' };
    } else if (currentMonth >= harvest.start && currentMonth <= harvest.end) {
      return { status: 'Harvesting', color: 'orange' };
    } else {
      return { status: 'Off-season', color: 'gray' };
    }
  };

  const renderSeasonCalendar = () => {
    const allProducts = [...localProducts, ...internationalProducts];
    
    return (
      <div className="space-y-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Local Products</p>
                <p className="text-3xl font-bold">{animatedNumbers.localProducts || 0}</p>
              </div>
              <LeafIcon className="h-10 w-10 text-green-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">International Products</p>
                <p className="text-3xl font-bold">{animatedNumbers.internationalProducts || 0}</p>
              </div>
              <GlobeIcon className="h-10 w-10 text-blue-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total Products</p>
                <p className="text-3xl font-bold">{animatedNumbers.totalProducts || 0}</p>
              </div>
              <BarChart3Icon className="h-10 w-10 text-purple-200" />
            </div>
          </div>
        </div>

        {/* Current Season Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Current Season Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Local Products</h4>
              <div className="space-y-3">
                {localProducts.map((product) => {
                  const season = getSeasonStatus(product.plantingSeason, product.harvestSeason);
                  return (
                    <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 bg-${season.color}-500`}></div>
                        <span className="font-medium text-gray-800">{product.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        season.status === 'Planting' ? 'bg-green-100 text-green-700' :
                        season.status === 'Harvesting' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {season.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">International Products</h4>
              <div className="space-y-3">
                {internationalProducts.slice(0, 4).map((product) => {
                  const season = getSeasonStatus(product.plantingSeason, product.harvestSeason);
                  return (
                    <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 bg-${season.color}-500`}></div>
                        <span className="font-medium text-gray-800">{product.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        season.status === 'Planting' ? 'bg-green-100 text-green-700' :
                        season.status === 'Harvesting' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {season.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Product Calendar */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Planting & Harvest Calendar</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Planting Season</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Harvest Season</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((product) => {
                  const season = getSeasonStatus(product.plantingSeason, product.harvestSeason);
                  const isLocal = localProducts.some(p => p.id === product.id);
                  return (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">{product.name}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isLocal ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {isLocal ? 'Local' : 'International'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{product.plantingSeason}</td>
                      <td className="py-3 px-4 text-gray-600">{product.harvestSeason}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          season.status === 'Planting' ? 'bg-green-100 text-green-700' :
                          season.status === 'Harvesting' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {season.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderPricingDashboard = () => {
    const currentPriceData = selectedMarket === 'local' ? localPriceData : internationalPriceData;
    
    return (
      <div className="space-y-8">
        {/* Market Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setSelectedMarket('local')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                selectedMarket === 'local'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Local Market
            </button>
            <button
              onClick={() => setSelectedMarket('international')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                selectedMarket === 'international'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              International Market
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Products</p>
                <p className="text-2xl font-bold text-gray-800">{currentPriceData.length}</p>
              </div>
              <BarChart3Icon className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Rising Prices</p>
                <p className="text-2xl font-bold text-green-600">
                  {currentPriceData.filter(p => p.trend === 'up').length}
                </p>
              </div>
              <TrendingUpIcon className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Falling Prices</p>
                <p className="text-2xl font-bold text-red-600">
                  {currentPriceData.filter(p => p.trend === 'down').length}
                </p>
              </div>
              <TrendingDownIcon className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg Change</p>
                <p className="text-2xl font-bold text-gray-800">
                  {(
                    currentPriceData.reduce((sum, p) => sum + parseFloat(p.change), 0) / 
                    currentPriceData.length
                  ).toFixed(2)}%
                </p>
              </div>
              {selectedMarket === 'local' ? (
                <DollarSignIcon className="h-8 w-8 text-emerald-500" />
              ) : (
                <DollarSignIcon className="h-8 w-8 text-emerald-500" />
              )}
            </div>
          </div>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
            <h3 className="text-xl font-bold">
              {selectedMarket === 'local' ? 'Local Market' : 'International Market'} Weekly Pricing
            </h3>
            <p className="text-emerald-100 text-sm mt-1">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Product</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Current Price</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Weekly Change</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Trend</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Market Sentiment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentPriceData.map((item, index: number) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-800">{item.product}</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600">{item.price}</td>
                    <td className="py-4 px-6">
                      <span className={`font-medium ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.change}%
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {item.trend === 'up' ? (
                        <span className="text-green-600 flex items-center">
                          <ArrowUpIcon className="h-4 w-4 mr-1" />
                          Rising
                        </span>
                      ) : (
                        <span className="text-red-600 flex items-center">
                          <ArrowDownIcon className="h-4 w-4 mr-1" />
                          Falling
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className={`h-2 w-16 rounded-full ${
                          item.trend === 'up' 
                            ? 'bg-gradient-to-r from-green-200 to-green-500' 
                            : 'bg-gradient-to-r from-red-200 to-red-500'
                        }`}></div>
                        <span className="ml-2 text-sm text-gray-600">
                          {item.trend === 'up' ? 'Optimistic' : 'Cautious'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Trend Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Price Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3Icon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Interactive price chart coming soon</p>
              <p className="text-sm text-gray-400 mt-2">Historical price data visualization</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Agricultural Dashboard</h1>
              <p className="text-gray-600 mt-1">Crop seasons and market pricing insights</p>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-sm p-1 mb-8">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('seasons')}
              className={`flex-1 py-3 px-6 rounded-md font-medium transition-all ${
                activeTab === 'seasons'
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                Crop Seasons
              </div>
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex-1 py-3 px-6 rounded-md font-medium transition-all ${
                activeTab === 'pricing'
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center">
                <BarChart3Icon className="h-5 w-5 mr-2" />
                Weekly Pricing
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="pb-12">
          {activeTab === 'seasons' ? renderSeasonCalendar() : renderPricingDashboard()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
