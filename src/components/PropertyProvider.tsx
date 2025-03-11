import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Property } from '../lib/types';
import properties from '../lib/propertyData';

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: Property) => void;
  updateProperty: (id: string, property: Property) => void;
  deleteProperty: (id: string) => void;
  getPropertyById: (id: string) => Property | undefined;
}

const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  addProperty: () => {},
  updateProperty: () => {},
  deleteProperty: () => {},
  getPropertyById: () => undefined,
});

export function useProperties() {
  return useContext(PropertyContext);
}

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [propertyList, setPropertyList] = useState<Property[]>(properties);

  const addProperty = (property: Property) => {
    setPropertyList((prev) => [...prev, property]);
  };

  const updateProperty = (id: string, property: Property) => {
    setPropertyList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...property } : p))
    );
  };

  const deleteProperty = (id: string) => {
    setPropertyList((prev) => prev.filter((p) => p.id !== id));
  };

  const getPropertyById = (id: string) => {
    return propertyList.find((p) => p.id === id);
  };

  return (
    <PropertyContext.Provider
      value={{
        properties: propertyList,
        addProperty,
        updateProperty,
        deleteProperty,
        getPropertyById,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export default PropertyProvider; 