'use client' // Error components must be Client Components
 
import { useEffect } from 'react'

 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 className='text-3xl m-8'>Ocurrió un ERROR!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        RECARGAR
      </button>
    </div>
  )
}