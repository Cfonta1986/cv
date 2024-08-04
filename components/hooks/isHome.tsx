'use client'
 
import { usePathname } from 'next/navigation'
 
export function IsHome() {
  const path = usePathname()
  const isHome = path === '/';
  
  return isHome
}