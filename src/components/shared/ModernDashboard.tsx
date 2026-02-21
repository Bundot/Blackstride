import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart
} from 'recharts';
import { 
  ArrowUpIcon, ArrowDownIcon, CalendarIcon, TrendingUpIcon, 
  TrendingDownIcon, BarChart3Icon, LeafIcon, GlobeIcon, 
  DollarSignIcon, Activity, Package, Clock, AlertCircle 
} from 'lucide-react';
import { localProducts, internationalProducts, localPriceData, internationalPriceData } from './ProductData';

const ModernDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'seasons' | 'pricing'>('overview');
  const [selectedMarket, setSelectedMarket] = useState<'local' | 'international'>('local');
  const [animatedValues, setAnimatedValues] = useState({ local: 0, international: 0, total: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        local: localProducts.length,
        international: internationalProducts.length,
        total: localProducts.length + internationalProducts.length
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Generate seasonal data for charts
  const getSeasonalData = () => {
    return months.map((month, index) => {
      const plantingCount = localProducts.filter(p => {
        const [start, end] = p.plantingSeason.split(' - ').map(m => months.indexOf(m.trim()));
        return index >= start && index <= end;
      }).length + internationalProducts.filter(p => {
        const [start, end] = p.plantingSeason.split(' - ').map(m => months.indexOf(m.trim()));
        return index >= start && index <= end;
      }).length;

      const harvestCount = localProducts.filter(p => {
        const [start, end] = p.harvestSeason.split(' - ').map(m => months.indexOf(m.trim()));
        return index >= start && index <= end;
      }).length + internationalProducts.filter(p => {
        const [start, end] = p.harvestSeason.split(' - ').map(m => months.indexOf(m.trim()));
        return index >= start && index <= end;
      }).length;

      return {
        month,
        planting: plantingCount,
        harvesting: harvestCount,
        total: plantingCount + harvestCount
      };
    });
  };

  const seasonalData = getSeasonalData();

  // Price trend data (simulated historical data)
  const getPriceTrendData = (market: 'local' | 'international') => {
    const data = market === 'local' ? localPriceData : internationalPriceData;
    return data.map(item => ({
      product: item.product,
      current: parseFloat(item.price.replace(/[^0-9.]/g, '')),
      change: parseFloat(item.change),
      trend: item.trend
    }));
  };

  // Market distribution data
  const getMarketDistribution = () => [
    { name: 'Local Products', value: localProducts.length, color: '#10b981' },
    { name: 'International Products', value: internationalProducts.length, color: '#3b82f6' }
  ];

  // Performance metrics
  const getPerformanceMetrics = () => {
    const currentData = selectedMarket === 'local' ? localPriceData : internationalPriceData;
    const rising = currentData.filter(p => p.trend === 'up').length;
    const falling = currentData.filter(p => p.trend === 'down').length;
    const avgChange = currentData.reduce((sum, p) => sum + parseFloat(p.change), 0) / currentData.length;

    return { rising, falling, avgChange };
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Local Products</p>
              <p className="text-3xl font-bold mt-2">{animatedValues.local}</p>
              <p className="text-emerald-100 text-xs mt-1">Active this season</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <LeafIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">International</p>
              <p className="text-3xl font-bold mt-2">{animatedValues.international}</p>
              <p className="text-blue-100 text-xs mt-1">Export ready</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <GlobeIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Portfolio</p>
              <p className="text-3xl font-bold mt-2">{animatedValues.total}</p>
              <p className="text-purple-100 text-xs mt-1">All products</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <Package className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Active Season</p>
              <p className="text-3xl font-bold mt-2">12</p>
              <p className="text-orange-100 text-xs mt-1">Products growing</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <Activity className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Seasonal Activity Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Seasonal Activity</h3>
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="h-4 w-4 mr-1" />
              Annual Overview
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={seasonalData}>
              <defs>
                <linearGradient id="colorPlanting" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorHarvesting" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                labelStyle={{ color: '#111827', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="planting" stroke="#10b981" fillOpacity={1} fill="url(#colorPlanting)" />
              <Area type="monotone" dataKey="harvesting" stroke="#f59e0b" fillOpacity={1} fill="url(#colorHarvesting)" />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Market Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Market Distribution</h3>
            <div className="flex items-center text-sm text-gray-500">
              <BarChart3Icon className="h-4 w-4 mr-1" />
              Product Mix
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={getMarketDistribution()}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {getMarketDistribution().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-800">Current Month</h4>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Planting</span>
              <span className="font-bold text-green-600">8 crops</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Harvesting</span>
              <span className="font-bold text-orange-600">4 crops</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Dormant</span>
              <span className="font-bold text-gray-600">7 crops</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-800">Price Movement</h4>
            <TrendingUpIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rising</span>
              <span className="font-bold text-green-600">+12.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Falling</span>
              <span className="font-bold text-red-600">-2.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Stable</span>
              <span className="font-bold text-blue-600">85.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-800">Market Alert</h4>
            <AlertCircle className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                <strong>Season Change:</strong> Planting season begins in 2 weeks
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>Opportunity:</strong> International demand up 15%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSeasons = () => (
    <div className="space-y-8">
      {/* Seasonal Calendar Heatmap */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Crop Season Calendar</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Local Products */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
              <LeafIcon className="h-5 w-5 mr-2 text-green-500" />
              Local Products
            </h4>
            <div className="space-y-3">
              {localProducts.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-semibold text-gray-800">{product.name}</h5>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Planting</span>
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Harvest</span>
                    </div>
                  </div>
                  <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute inset-0 flex">
                      {months.map((month, index) => {
                        const [plantStart, plantEnd] = product.plantingSeason.split(' - ').map(m => months.indexOf(m.trim()));
                        const [harvestStart, harvestEnd] = product.harvestSeason.split(' - ').map(m => months.indexOf(m.trim()));
                        const isPlanting = index >= plantStart && index <= plantEnd;
                        const isHarvesting = index >= harvestStart && index <= harvestEnd;
                        
                        return (
                          <div
                            key={month}
                            className={`flex-1 text-xs flex items-center justify-center ${
                              isPlanting ? 'bg-green-500' : isHarvesting ? 'bg-orange-500' : 'bg-gray-200'
                            }`}
                            title={`${month}: ${isPlanting ? 'Planting' : isHarvesting ? 'Harvesting' : 'Off-season'}`}
                          >
                            {index % 3 === 0 && <span className="text-white font-medium">{month[0]}</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span>{product.plantingSeason}</span>
                    <span>{product.harvestSeason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Products */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
              <GlobeIcon className="h-5 w-5 mr-2 text-blue-500" />
              International Products
            </h4>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {internationalProducts.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-semibold text-gray-800">{product.name}</h5>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Planting</span>
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Harvest</span>
                    </div>
                  </div>
                  <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute inset-0 flex">
                      {months.map((month, index) => {
                        const [plantStart, plantEnd] = product.plantingSeason.split(' - ').map(m => months.indexOf(m.trim()));
                        const [harvestStart, harvestEnd] = product.harvestSeason.split(' - ').map(m => months.indexOf(m.trim()));
                        const isPlanting = index >= plantStart && index <= plantEnd;
                        const isHarvesting = index >= harvestStart && index <= harvestEnd;
                        
                        return (
                          <div
                            key={month}
                            className={`flex-1 text-xs flex items-center justify-center ${
                              isPlanting ? 'bg-green-500' : isHarvesting ? 'bg-orange-500' : 'bg-gray-200'
                            }`}
                            title={`${month}: ${isPlanting ? 'Planting' : isHarvesting ? 'Harvesting' : 'Off-season'}`}
                          >
                            {index % 3 === 0 && <span className="text-white font-medium">{month[0]}</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span>{product.plantingSeason}</span>
                    <span>{product.harvestSeason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Trends Chart */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Seasonal Activity Trends</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={seasonalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Bar dataKey="planting" fill="#10b981" name="Planting Season" />
            <Bar dataKey="harvesting" fill="#f59e0b" name="Harvest Season" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderPricing = () => {
    const currentData = selectedMarket === 'local' ? localPriceData : internationalPriceData;
    const metrics = getPerformanceMetrics();
    const priceTrendData = getPriceTrendData(selectedMarket);

    return (
      <div className="space-y-8">
        {/* Market Toggle */}
        <div className="flex justify-center">
          <div className="bg-gray-100 rounded-xl p-1 flex">
            <button
              onClick={() => setSelectedMarket('local')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedMarket === 'local'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <LeafIcon className="h-5 w-5 inline mr-2" />
              Local Market
            </button>
            <button
              onClick={() => setSelectedMarket('international')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedMarket === 'international'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <GlobeIcon className="h-5 w-5 inline mr-2" />
              International Market
            </button>
          </div>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Rising Prices</p>
                <p className="text-3xl font-bold mt-2">{metrics.rising}</p>
                <p className="text-green-100 text-xs mt-1">Products trending up</p>
              </div>
              <TrendingUpIcon className="h-8 w-8 text-green-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Falling Prices</p>
                <p className="text-3xl font-bold mt-2">{metrics.falling}</p>
                <p className="text-red-100 text-xs mt-1">Products trending down</p>
              </div>
              <TrendingDownIcon className="h-8 w-8 text-red-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Avg Change</p>
                <p className="text-3xl font-bold mt-2">+{metrics.avgChange.toFixed(1)}%</p>
                <p className="text-blue-100 text-xs mt-1">Market movement</p>
              </div>
              <BarChart3Icon className="h-8 w-8 text-blue-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total Products</p>
                <p className="text-3xl font-bold mt-2">{currentData.length}</p>
                <p className="text-purple-100 text-xs mt-1">Active listings</p>
              </div>
              <Package className="h-8 w-8 text-purple-200" />
            </div>
          </div>
        </div>

        {/* Price Comparison Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Price Comparison</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={priceTrendData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" />
              <YAxis dataKey="product" type="category" width={100} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                formatter={(value: any) => [`$${value}`, 'Price']}
              />
              <Bar dataKey="current" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Price Trends Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
            <h3 className="text-xl font-bold">
              {selectedMarket === 'local' ? 'Local Market' : 'International Market'} Pricing
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
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-800">{item.product}</td>
                    <td className="py-4 px-6 font-bold text-emerald-600">{item.price}</td>
                    <td className="py-4 px-6">
                      <span className={`font-bold ${
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
                        <div className={`h-2 w-20 rounded-full ${
                          item.trend === 'up' 
                            ? 'bg-gradient-to-r from-green-200 to-green-500' 
                            : 'bg-gradient-to-r from-red-200 to-red-500'
                        }`}></div>
                        <span className="ml-2 text-sm text-gray-600">
                          {item.trend === 'up' ? 'Strong' : 'Weak'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Agricultural Dashboard</h1>
              <p className="text-gray-600 mt-1">Real-time crop seasons and market pricing insights</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="text-sm font-medium text-gray-900">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
              <div className="bg-emerald-100 p-2 rounded-xl">
                <Activity className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-2xl shadow-sm p-2 mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <BarChart3Icon className="h-5 w-5 inline mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('seasons')}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                activeTab === 'seasons'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <CalendarIcon className="h-5 w-5 inline mr-2" />
              Crop Seasons
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                activeTab === 'pricing'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <DollarSignIcon className="h-5 w-5 inline mr-2" />
              Pricing
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="pb-12">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'seasons' && renderSeasons()}
          {activeTab === 'pricing' && renderPricing()}
        </div>
      </div>
    </div>
  );
};

export default ModernDashboard;
