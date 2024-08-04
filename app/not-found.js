import Link from 'next/link'

 
export default function NotFound() {
  return (
    <div className='m-8'>
      <h2 className='text-5xl'>Página no encontrada!!!</h2>
      <p className='text-xl'>No pudimos encontrar el recurso</p>
      <Link href="/">VOLVER</Link>
    </div>
  )
}