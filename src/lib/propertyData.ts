import { type Property } from './types';

// Sample property data
const properties: Property[] = [
  {
    id: '1',
    name: 'Luxury Downtown Apartment',
    address: '123 Main St, New York, NY 10001',
    value: 1500000,
    formattedValue: '$1,500,000',
    roi: 0.12,
    formattedRoi: '12%',
    initialInvestment: 300000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60',
        alt: 'Living Room'
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1200&q=60',
        alt: 'Kitchen'
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=60',
        alt: 'Master Bedroom'
      }
    ],
    pdfUrl: '/property-reports/luxury-downtown.pdf',
    description: 'A stunning luxury apartment in the heart of downtown. Features high-end finishes, floor-to-ceiling windows, and panoramic city views. Recently renovated with modern appliances and smart home technology.'
  },
  {
    id: '2',
    name: 'Suburban Family Home',
    address: '456 Oak Lane, Westchester, NY 10583',
    value: 850000,
    formattedValue: '$850,000',
    roi: 0.08,
    formattedRoi: '8%',
    initialInvestment: 200000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=60',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=60',
        alt: 'Front View'
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1564013799922-7f06c8f3a1f0?auto=format&fit=crop&w=1200&q=60',
        alt: 'Backyard'
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1564013799924-7f06c8f3a1f1?auto=format&fit=crop&w=1200&q=60',
        alt: 'Family Room'
      }
    ],
    pdfUrl: '/property-reports/suburban-home.pdf',
    description: 'Spacious family home in a quiet suburban neighborhood. Features 4 bedrooms, 3.5 bathrooms, a finished basement, and a large backyard. Close to excellent schools and parks.'
  },
  {
    id: '3',
    name: 'Beach House Investment',
    address: '789 Ocean Dr, Hampton Bays, NY 11946',
    value: 2200000,
    formattedValue: '$2,200,000',
    roi: 0.15,
    formattedRoi: '15%',
    initialInvestment: 500000,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=60',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=60',
        alt: 'Beachfront View'
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1499793983693-e29da59ef1c3?auto=format&fit=crop&w=1200&q=60',
        alt: 'Deck'
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1499793983695-e29da59ef1c4?auto=format&fit=crop&w=1200&q=60',
        alt: 'Master Suite'
      }
    ],
    pdfUrl: '/property-reports/beach-house.pdf',
    description: 'Luxurious beachfront property with stunning ocean views. Features 5 bedrooms, 4 bathrooms, a gourmet kitchen, and multiple decks. Perfect for vacation rentals with strong seasonal income potential.'
  }
];

export default properties;