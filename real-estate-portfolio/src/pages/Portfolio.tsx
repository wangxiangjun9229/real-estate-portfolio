import { memo } from 'react'
import { CurrencyDollarIcon, HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import PropertyGallery from '../components/PropertyGallery'

console.log('Portfolio component is loading...')

const stats = [
  { name: 'Total Properties', value: '12', icon: HomeIcon },
  { name: 'Total Value', value: '$4.2M', icon: CurrencyDollarIcon },
  { name: 'Annual ROI', value: '12.5%', icon: ChartBarIcon },
] as const

interface Property {
  id: number
  name: string
  address: string
  value: string
  roi: string
  image: string
  photos: Array<{
    id: number
    url: string
    alt: string
  }>
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Luxury Apartment Complex',
    address: '123 Main St, New York, NY',
    value: '$2,500,000',
    roi: '15%',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        alt: 'Luxury Apartment Complex Main View'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        alt: 'Living Room'
      }
    ]
  },
  {
    id: 2,
    name: 'Commercial Office Building',
    address: '456 Business Ave, Chicago, IL',
    value: '$1,800,000',
    roi: '10%',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    photos: [
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        alt: 'Commercial Office Building Exterior'
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        alt: 'Office Space'
      }
    ]
  }
]

const StatCard = memo(({ stat, index }: { stat: typeof stats[number]; index: number }) => {
  console.log('Rendering StatCard:', stat.name)
  return (
    <div className="overflow-hidden rounded-xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
      <div className="flex items-center gap-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50">
          <stat.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
        </div>
        <div>
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500">{stat.name}</div>
          <div className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</div>
        </div>
      </div>
    </div>
  )
})

StatCard.displayName = 'StatCard'

const PropertyCard = memo(({ property, index }: { property: Property; index: number }) => {
  console.log('Rendering PropertyCard:', property.name)
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          loading={index === 0 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <div>
            <h3 className="font-serif text-4xl font-light text-white">{property.name}</h3>
            <p className="mt-2 text-xl font-light text-gray-300">{property.address}</p>
            <div className="mt-6 flex items-center gap-x-6">
              <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm">
                {property.value}
              </div>
              <div className="rounded-full bg-green-500/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                ROI: {property.roi}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <h4 className="font-serif text-2xl font-light text-gray-900">Property Gallery</h4>
        <PropertyGallery photos={property.photos} />
      </div>
    </div>
  )
})

PropertyCard.displayName = 'PropertyCard'

const Portfolio = memo(function Portfolio() {
  console.log('Rendering Portfolio component')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Real Estate"
            loading="eager"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            Premium Real Estate<br />
            <span className="font-normal text-blue-400">Investment Portfolio</span>
          </h1>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={stat.name} stat={stat} index={index} />
          ))}
        </div>

        {/* Properties Section */}
        <div className="mt-24 space-y-24">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
})

export default Portfolio 