import { type Property } from './types';

// Sample property data
const properties: Property[] = [
  {
    id: '1',
    name: 'Shop at Sanctuary Green Condo',
    type: 'managed',
    address: '#01-01, 189 Tanjong Rhu Road, Sanctuary Green, Singapore 436923',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=189+Tanjong+Rhu+Road+Sanctuary+Green+Singapore+436923',
    value: 688888,
    formattedValue: 'S$688,888',
    annualReturn: 0.05,
    formattedAnnualReturn: '5.0%',
    initialInvestment: 163378,
    formattedInitialInvestment: 'S$163,378',
    image: '/real-estate-portfolio/images/sanctuary-green/exterior.jpg',
    photos: [
      {
        id: '1',
        url: '/real-estate-portfolio/images/sanctuary-green/exterior.jpg',
        alt: 'Building Exterior with Pool View'
      },
      {
        id: '2',
        url: '/real-estate-portfolio/images/sanctuary-green/pool-view.jpg',
        alt: 'Night View of Pool and Buildings'
      },
      {
        id: '3',
        url: '/real-estate-portfolio/images/sanctuary-green/shop-front.jpg',
        alt: 'Shop Front at Ground Level'
      }
    ],
    pdfUrl: '/property-reports/sanctuary-green.pdf',
    description: 'Prime retail unit (mini-mart) in Sanctuary Green Condo. The only shop within the development, featuring 258 sqft with good frontage facing swimming pool. Strong fundamentals with established mini-mart business since completion. Excellent en-bloc potential with newly opened MRT.',
    additionalDetails: {
      size: '258 sqft',
      approvedUse: 'Shop/Café',
      buildingCompletionYear: 2003,
      landTenure: '99 years from 1997',
      totalResidentialUnits: 522,
      currentUse: 'Mini-mart',
      securedLease: {
        duration: '3 years',
        monthlyRent: 2650
      },
      financials: {
        purchasePrice: 688888,
        stampDuty: 15267,
        acquisitionCosts: 10333,
        loanAmount: 551110,
        upfrontCash: 163378,
        annualRent: 31800,
        monthlyLoanPayment: 2940
      }
    }
  },
  {
    id: '2',
    name: 'Shop at Far Horizon Garden Condo',
    type: 'managed',
    address: '3 ANG MO KIO AVENUE 9 #01-02 FAR HORIZON GARDEN SINGAPORE 569759',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=3+ANG+MO+KIO+AVENUE+9+FAR+HORIZON+GARDEN+SINGAPORE+569759',
    value: 838000,
    formattedValue: 'S$838,000',
    annualReturn: 0.05,
    formattedAnnualReturn: '5.0%',
    initialInvestment: 199910,
    formattedInitialInvestment: 'S$199,910',
    image: '/real-estate-portfolio/images/far-horizon/exterior.jpg',
    photos: [
      {
        id: '1',
        url: '/real-estate-portfolio/images/far-horizon/exterior.jpg',
        alt: 'Building Exterior'
      },
      {
        id: '2',
        url: '/real-estate-portfolio/images/far-horizon/units.jpg',
        alt: 'Sub Units View'
      },
      {
        id: '3',
        url: '/real-estate-portfolio/images/far-horizon/aerial.jpg',
        alt: 'Aerial View'
      }
    ],
    pdfUrl: '/property-reports/far-horizon.pdf',
    description: 'The subject property comprises 4 out of 8 sub-units located within Far Horizon Garden Condo. Direct access to Lentor MRT and Yio Chu Kang Road. Each sub-unit is ~180 sqft mainly used for tuition center and admin offices. Ample parking lots for tenants and customers visiting the space. En-bloc potential considering new condo development nearby, short land tenure, MRT at doorstep and formation of collective sale committee in year 2018.',
    additionalDetails: {
      size: '710 sqft',
      approvedUse: 'Shop',
      buildingCompletionYear: 1986,
      landTenure: '99 years from 1982',
      totalResidentialUnits: 270,
      currentUse: 'Tuition center, admin offices',
      occupancy: '100%',
      financials: {
        purchasePrice: 838000,
        stampDuty: 19740,
        acquisitionCosts: 12570,
        loanAmount: 670400,
        upfrontCash: 199910,
        annualRent: 34800,
        monthlyLoanPayment: 3576
      }
    }
  },
  {
    id: '3',
    name: 'Shop at Kingsford Waterbay Condo',
    type: 'managed',
    address: '50 Upper Serangoon View, Kingsford Waterbay Singapore 533893',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=50+Upper+Serangoon+View+Kingsford+Waterbay+Singapore+533893',
    value: 975000,
    formattedValue: 'S$975,000',
    annualReturn: 0.05,
    formattedAnnualReturn: '5.0%',
    initialInvestment: 226650,
    formattedInitialInvestment: 'S$226,650',
    image: '/real-estate-portfolio/images/kingsford-waterbay/exterior.jpg',
    photos: [
      {
        id: '1',
        url: '/real-estate-portfolio/images/kingsford-waterbay/exterior.jpg',
        alt: 'Aerial View of Development'
      },
      {
        id: '2',
        url: '/real-estate-portfolio/images/kingsford-waterbay/shop-front.jpg',
        alt: 'Shop Front View'
      },
      {
        id: '3',
        url: '/real-estate-portfolio/images/kingsford-waterbay/location.jpg',
        alt: 'Location Map'
      }
    ],
    pdfUrl: '/property-reports/kingsford-waterbay.pdf',
    description: 'Newly completed condo development (year 2018) in Hougang/Serangoon area with large size of residences: 1160 units. Total of 6 shop units (each with own toilet) located along condo development facing Upper Serangoon View Road, with direct access to bus stop. Shops are accessible by the public and the captive market include residences from Kingsford Waterbay, nearby condos and students from Serangoon Secondary School. The target shop unit is leased to an arts studio, which is the only arts school in the vicinity. The lease provides stable rental income with decent rental upside. Tenants in other shop units include hair salon, clinic, pre-school, etc.',
    additionalDetails: {
      size: '431 sqft',
      approvedUse: 'Shop',
      buildingCompletionYear: 2018,
      landTenure: '99 years from 2014',
      totalResidentialUnits: 1160,
      currentUse: 'Arts Studio (Shine Arts Creative Studio)',
      securedLease: {
        duration: '3 years (Mar 23 – Mar 26)',
        monthlyRent: 3000
      },
      financials: {
        purchasePrice: 975000,
        stampDuty: 23850,
        acquisitionCosts: 7800,
        loanAmount: 780000,
        upfrontCash: 226650,
        annualRent: 36000,
        monthlyLoanPayment: 3766
      }
    }
  },
  {
    id: '4',
    name: 'Shophouse at Ocean Park',
    type: 'opportunity',
    address: '520 East Coast Road',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=520+East+Coast+Road+Singapore',
    value: 1100000,
    formattedValue: 'S$1,100,000',
    annualReturn: 0.05,
    formattedAnnualReturn: '5.0%',
    initialInvestment: 255200,
    formattedInitialInvestment: 'S$255,200',
    image: '/real-estate-portfolio/images/ocean-park/exterior.jpg',
    photos: [
      {
        id: '1',
        url: '/real-estate-portfolio/images/ocean-park/exterior.jpg',
        alt: 'Ocean Park Development Exterior'
      },
      {
        id: '2',
        url: '/real-estate-portfolio/images/ocean-park/location.jpg',
        alt: 'Location Map'
      }
    ],
    pdfUrl: '/property-reports/ocean-park.pdf',
    description: 'Total of six shop units in the Ocean Park condo development, directly facing East Coast Road—serving as the only retail option for the surrounding community. Each unit has its own restroom and one designated parking space, with additional ample public parking available for visitors. Attracts a large captive market from Ocean Park residents, nearby condos and landed estates. Rare freehold shophouse offering close to 4% rental yield—an exceptional find in today\'s market.',
    opportunityDetails: {
      estimatedRental: 'S$3,000 - S$3,500 per month',
      potentialValue: 'S$1,225,820 (11.4% upside)',
      investmentHighlights: [
        'Only retail option in the development',
        'Freehold property',
        'Own restroom and designated parking',
        'Large captive market',
        'Higher rental reversion potential'
      ],
      investorSecured: '2 out of 5'
    }
  },
  {
    id: '5',
    name: 'Shop at Vacanza@East',
    type: 'opportunity',
    address: '50 Lengkong Tujoh, Singapore 417398',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=50+Lengkong+Tujoh+Singapore+417398',
    value: 1300000,
    formattedValue: 'S$1,300,000',
    annualReturn: 0.05,
    formattedAnnualReturn: '5.0%',
    initialInvestment: 316100,
    formattedInitialInvestment: 'S$316,100',
    image: '/real-estate-portfolio/images/vacanza-east/exterior.jpg',
    photos: [
      {
        id: '1',
        url: '/real-estate-portfolio/images/vacanza-east/exterior.jpg',
        alt: 'Vacanza@East Development Exterior'
      },
      {
        id: '2',
        url: '/real-estate-portfolio/images/vacanza-east/shop-front.jpg',
        alt: 'Mini-Mart Shop Front'
      },
      {
        id: '3',
        url: '/real-estate-portfolio/images/vacanza-east/interior.jpg',
        alt: 'Mini-Mart Interior'
      }
    ],
    pdfUrl: '/property-reports/vacanza-east.pdf',
    description: 'The only shop unit inside condo; located at the center of condo estate with excellent visibility. Lack of amenities outside condo (e.g. groceries, supermarket, F&B) which makes the mini-mart most visited place serving residents\' daily needs. The target shop unit is leased to a mini-mart who has operated in the subject unit for 5 years. Freehold condo shop with >4% rental yield which is extremely rare in the market.',
    opportunityDetails: {
      estimatedRental: 'S$4,000 - S$4,500 per month',
      potentialValue: 'S$1,501,500 (15.5% upside)',
      investmentHighlights: [
        'Only shop unit in the development',
        'Excellent visibility at condo center',
        'Freehold property',
        'Established mini-mart tenant (5 years)',
        'Lack of nearby amenities',
        'Strong captive market',
        'up to 9.5% return p.a.'
      ],
      investorSecured: '2 out of 4'
    }
  }
];

export default properties;