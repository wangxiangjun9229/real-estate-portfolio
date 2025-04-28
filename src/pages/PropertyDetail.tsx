import { memo, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useProperties } from '../lib/PropertyContext';
import { type Property } from '../lib/types';

// Password Dialog Component
const PasswordDialog = ({ onSubmit, onClose }: { onSubmit: (password: string) => void; onClose: () => void }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <h3 className="text-lg font-semibold mb-4">Enter Password</h3>
        <div className="relative">
          <input
            ref={inputRef}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-lg pr-12"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSubmit(password);
              } else if (e.key === 'Escape') {
                onClose();
              }
            }}
            autoFocus
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(password)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const PropertyDetail = memo(function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const { properties } = useProperties();
  const property = properties.find(p => p.id === id) as Property | undefined;
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const handlePasswordSubmit = (password: string) => {
    if (password === '123456') {
      sessionStorage.setItem('detailsPasswordVerified', 'true');
      setIsExpanded(true);
    } else {
      alert('Incorrect password');
    }
    setShowPasswordDialog(false);
  };

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

  // Calculate investor secured percent for opportunity properties
  let investorSecuredPercent = 0;
  if (property.type === 'opportunity' && property.opportunityDetails?.investorSecured) {
    const match = property.opportunityDetails.investorSecured.match(/(\d+) out of (\d+)/);
    if (match) {
      const secured = parseInt(match[1], 10);
      const total = parseInt(match[2], 10);
      if (total > 0) {
        investorSecuredPercent = (secured / total) * 100;
      }
    }
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
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error('Failed to load image:', target.src);
              target.onerror = null; // Prevent infinite loop
              target.src = '/placeholder.jpg'; // You can add a placeholder image
            }}
            loading="eager"
          />
        </div>

        {/* Property details */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.name}</h1>
          <p className="text-xl text-gray-600 mb-6">
            <a 
              href={property.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-blue-600"
            >
              {property.address}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial Details</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-600">Property Value</dt>
                  <dd className="text-2xl font-semibold text-blue-600">{property.formattedValue}</dd>
                </div>
                {property.type === 'opportunity' && (
                  <div>
                    <dt className="text-gray-600">Initial Investment</dt>
                    <dd className="text-2xl font-semibold text-blue-600">{property.formattedInitialInvestment}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-gray-600">Target Return</dt>
                  <dd className="text-2xl font-semibold text-green-600">{property.formattedAnnualReturn} p.a.</dd>
                </div>
                {property.type === 'opportunity' && property.opportunityDetails && (
                  <>
                    <div>
                      <dt className="text-gray-600">Estimated Rental</dt>
                      <dd className="text-2xl font-semibold text-orange-600">{property.opportunityDetails.estimatedRental}</dd>
                    </div>
                  </>
                )}
              </dl>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
              
              {property.type === 'opportunity' && property.opportunityDetails && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Highlights</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {property.opportunityDetails?.investmentHighlights?.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Investor Secured</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${investorSecuredPercent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-gray-600">
                      <span>Progress: {property.opportunityDetails.investorSecured}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Details Section */}
          {(property.type === 'managed' ? property.additionalDetails : null) && (
            <div className="mt-8 border-t pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">Additional Details</h2>
                <button
                  onClick={() => {
                    if (isExpanded) {
                      setIsExpanded(false);
                    } else if (!isExpanded && !sessionStorage.getItem('detailsPasswordVerified')) {
                      setShowPasswordDialog(true);
                    } else {
                      setIsExpanded(true);
                    }
                  }}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <span className="mr-2">{isExpanded ? 'Collapse' : 'Expand'}</span>
                  {isExpanded ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              
              {showPasswordDialog && (
                <PasswordDialog
                  onSubmit={handlePasswordSubmit}
                  onClose={() => setShowPasswordDialog(false)}
                />
              )}
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h3>
                        <dl className="space-y-2">
                          {property.additionalDetails?.size && (
                            <div>
                              <dt className="text-gray-600">Size</dt>
                              <dd className="font-medium">{property.additionalDetails.size}</dd>
                            </div>
                          )}
                          {property.additionalDetails?.approvedUse && (
                            <div>
                              <dt className="text-gray-600">Approved Use</dt>
                              <dd className="font-medium">{property.additionalDetails.approvedUse}</dd>
                            </div>
                          )}
                          {property.additionalDetails?.buildingCompletionYear && (
                            <div>
                              <dt className="text-gray-600">Building Completion Year</dt>
                              <dd className="font-medium">{property.additionalDetails.buildingCompletionYear}</dd>
                            </div>
                          )}
                          {property.additionalDetails?.landTenure && (
                            <div>
                              <dt className="text-gray-600">Land Tenure</dt>
                              <dd className="font-medium">{property.additionalDetails.landTenure}</dd>
                            </div>
                          )}
                          {property.additionalDetails?.totalResidentialUnits && (
                            <div>
                              <dt className="text-gray-600">Total Residential Units</dt>
                              <dd className="font-medium">{property.additionalDetails.totalResidentialUnits}</dd>
                            </div>
                          )}
                          {property.additionalDetails?.currentUse && (
                            <div>
                              <dt className="text-gray-600">Current Use</dt>
                              <dd className="font-medium">{property.additionalDetails.currentUse}</dd>
                            </div>
                          )}
                        </dl>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h3>
                        {property.additionalDetails?.occupancy && (
                          <div className="mb-4">
                            <dl className="space-y-2">
                              <div>
                                <dt className="text-gray-600">Occupancy</dt>
                                <dd className="font-medium">{property.additionalDetails.occupancy}</dd>
                              </div>
                            </dl>
                          </div>
                        )}
                        
                        {property.additionalDetails?.financials && (
                          <dl className="space-y-2">
                            <div>
                              <dt className="text-gray-600">Purchase Price</dt>
                              <dd className="font-medium">S${property.additionalDetails.financials.purchasePrice.toLocaleString()}</dd>
                            </div>
                            <div>
                              <dt className="text-gray-600">Loan Amount</dt>
                              <dd className="font-medium">S${property.additionalDetails.financials.loanAmount.toLocaleString()}</dd>
                            </div>
                          </dl>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Border separator */}
          <div className="mt-8 border-t pt-8"></div>

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

          {/* Contact for more details button for opportunity properties */}
          {property.type === 'opportunity' && (
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact for more details
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
});

export default PropertyDetail; 