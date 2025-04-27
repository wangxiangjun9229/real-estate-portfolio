import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useProperties } from '../lib/PropertyContext';
import { getPortfolioStats, type Property } from '../lib/types';

console.log('Portfolio component is loading...');

// Memoized stat card component
const StatCard = memo(function StatCard({ title, value, icon: Icon }: { 
  title: string; 
  value: string; 
  icon: React.ElementType;
}) {
  console.log(`Rendering StatCard: ${title}`);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center">
        <div className="p-3 bg-blue-100 rounded-full">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-2xl font-semibold text-blue-600">{value}</p>
        </div>
      </div>
    </motion.div>
  );
});

// Memoized property card component
const PropertyCard = memo(function PropertyCard({ property }: { property: Property }) {
  console.log(`Rendering PropertyCard: ${property.name}`);
  const isOpportunity = property.type === 'opportunity';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/property/${property.id}`}>
        <div className="relative">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
          {isOpportunity && property.opportunityDetails?.investorSecured && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white px-4 py-2">
              <div className="flex justify-between items-center">
                <span>Investor Secured</span>
                <span>{property.opportunityDetails.investorSecured}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: '40%' }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 h-[3.5rem] line-clamp-2">{property.name}</h3>
          <p className="text-gray-600">{property.address}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-600 font-semibold">{property.formattedValue}</span>
            <span className="text-green-600">Target Return {property.formattedAnnualReturn} p.a.</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

const Portfolio = memo(function Portfolio() {
  console.log('Rendering Portfolio component');
  
  const { properties } = useProperties();
  const stats = getPortfolioStats(properties);
  
  const managedProperties = properties.filter(p => p.type === 'managed');
  const opportunityProperties = properties.filter(p => p.type === 'opportunity');
  
  const statsData = [
    {
      title: 'Total Properties',
      value: stats.totalProperties.toString(),
      icon: HomeIcon,
    },
    {
      title: 'Total Value',
      value: stats.formattedTotalValue,
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Target Return',
      value: `${stats.formattedAverageRoi} p.a.`,
      icon: ChartBarIcon,
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Real Estate Portfolio
        </h1>
        <p className="text-xl text-gray-600">
          Track and manage your property investments
        </p>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {statsData.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Managed Properties section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Managed Portfolio</h2>
          <span className="text-blue-600">{managedProperties.length} Properties</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Investment Opportunities section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Investment Opportunities</h2>
          <span className="text-blue-600">{opportunityProperties.length} Properties</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunityProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Portfolio;