export interface PropertyPhoto {
  id: string;
  url: string;
  alt: string;
}

export type PropertyType = 'managed' | 'opportunity';

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  address: string;
  googleMapsUrl: string;
  value: number;
  formattedValue: string;
  annualReturn: number;
  formattedAnnualReturn: string;
  initialInvestment: number;
  formattedInitialInvestment: string;
  image: string;
  photos: PropertyPhoto[];
  pdfUrl: string;
  description: string;
  additionalDetails?: {
    size?: string;
    approvedUse?: string;
    buildingCompletionYear?: number;
    landTenure?: string;
    totalResidentialUnits?: number;
    currentUse?: string;
    occupancy?: string;
    securedLease?: {
      duration: string;
      monthlyRent: number;
    };
    financials?: {
      purchasePrice: number;
      stampDuty: number;
      acquisitionCosts: number;
      loanAmount: number;
      upfrontCash: number;
      annualRent: number;
      monthlyLoanPayment: number;
    };
  };
  opportunityDetails?: {
    estimatedRental?: string;
    potentialValue?: string;
    investmentHighlights?: string[];
    investorSecured?: string;
  };
}

export function getPortfolioStats(properties: Property[]) {
  if (!properties.length) {
    return {
      totalProperties: 0,
      totalValue: 0,
      formattedTotalValue: '$0',
      averageRoi: 0,
      formattedAverageRoi: '0%',
      totalInvestment: 0,
      formattedTotalInvestment: '$0',
    };
  }

  const totalValue = properties.reduce((sum, property) => sum + property.value, 0);
  const totalInvestment = properties.reduce((sum, property) => sum + property.initialInvestment, 0);
  const averageRoi = properties.reduce((sum, property) => sum + property.annualReturn, 0) / properties.length;

  return {
    totalProperties: properties.length,
    totalValue,
    formattedTotalValue: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SGD',
      maximumFractionDigits: 0,
    }).format(totalValue),
    averageRoi,
    formattedAverageRoi: `${(averageRoi * 100).toFixed(1)}%`,
    totalInvestment,
    formattedTotalInvestment: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SGD',
      maximumFractionDigits: 0,
    }).format(totalInvestment),
  };
} 