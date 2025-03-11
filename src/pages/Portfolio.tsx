import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useProperties } from '../lib/PropertyContext';
import { getPortfolioStats, type Property } from '../lib/types';

console.log('Portfolio component is loading...');

// Memoized stat card component
const StatCard = memo(({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => {
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
const PropertyCard = memo(({ property }: { property: Property }) => {
  console.log(`Rendering PropertyCard: ${property.name}`);
  return (
    <Link to={`/property/${property.id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">{property.name}</h3>
          <p className="text-gray-600">{property.address}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-600 font-semibold">{property.formattedValue}</span>
            <span className="text-green-600">ROI: {property.formattedRoi}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});

const Portfolio = memo(function Portfolio() {
  console.log('Rendering Portfolio component');
  
  const { properties } = useProperties();
  const stats = getPortfolioStats(properties);
  
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
      title: 'Average ROI',
      value: stats.formattedAverageRoi,
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

      {/* Properties section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Portfolio;