import { useState, useCallback, memo } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Photo {
  id: number
  url: string
  alt: string
}

interface PropertyGalleryProps {
  photos: Photo[]
}

const PhotoItem = memo(({ photo, onClick }: { photo: Photo; onClick: () => void }) => (
  <div
    key={photo.id}
    className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
    onClick={onClick}
  >
    <img
      src={photo.url}
      alt={photo.alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
  </div>
))

PhotoItem.displayName = 'PhotoItem'

export default function PropertyGallery({ photos }: PropertyGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const handleClose = useCallback(() => {
    setSelectedPhoto(null)
  }, [])

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      <Dialog
        open={!!selectedPhoto}
        onClose={handleClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/80" />
        {selectedPhoto && (
          <div className="relative max-w-4xl w-full">
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 rounded-full bg-white p-2 text-gray-900 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        )}
      </Dialog>
    </div>
  )
} 