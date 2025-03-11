export interface PropertyPhoto {
  id: string;
  url: string;
  alt: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  value: number;
  formattedValue: string;
  roi: number;
  formattedRoi: string;
  initialInvestment: number;
  image: string;
  photos: PropertyPhoto[];
  pdfUrl: string;
  description: string;
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
  const averageRoi = properties.reduce((sum, property) => sum + property.roi, 0) / properties.length;

  return {
    totalProperties: properties.length,
    totalValue,
    formattedTotalValue: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(totalValue),
    averageRoi,
    formattedAverageRoi: `${(averageRoi * 100).toFixed(1)}%`,
    totalInvestment,
    formattedTotalInvestment: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(totalInvestment),
  };
} 