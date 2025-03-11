import { memo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useProperties } from '../lib/PropertyContext';
import { type Property } from '../lib/types';

const PropertyDetail = memo(function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const { properties } = useProperties();
  const property = properties.find(p => p.id === id) as Property | undefined;

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Portfolio
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        {/* Main image */}
        <div className="relative h-96">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Property details */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{property.address}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial Details</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-600">Property Value</dt>
                  <dd className="text-2xl font-semibold text-blue-600">{property.formattedValue}</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Initial Investment</dt>
                  <dd className="text-2xl font-semibold text-blue-600">{property.initialInvestment}</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Return on Investment</dt>
                  <dd className="text-2xl font-semibold text-green-600">{property.formattedRoi}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
            </div>
          </div>

          {/* Photo gallery */}
          {property.photos && property.photos.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {property.photos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-w-16 aspect-h-9"
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* PDF link if available */}
          {property.pdfUrl && (
            <div className="mt-8">
              <a
                href={property.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                View Property Report
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
});

export default PropertyDetail; 