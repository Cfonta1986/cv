"use client"
import { useState, useEffect } from "react"

const SCROLL_UP = "up"
const SCROLL_DOWN = "down"

export const useScrollDirection = ({initialDirection, thresholdPixels, off} = {}) => {
    const  [ scrollDir, setScrollDir ] = useState(initialDirection)

    useEffect(()=>{
        const threshold = thresholdPixels || 0
        let lastScrollY = window.scrollY
        let ticking = false

        const updateScrollDir = () => {
            const scrollY = window.scrollY

            if(Math.abs(scrollY - lastScrollY) < threshold){
                ticking = false
                return
            }

            setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
            lastScrollY = scrollY > 0 ? scrollY : 0
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir)
                ticking = true
            }
        }
        !off ? window.addEventListener("scroll", onScroll) : setScrollDir(initialDirection)

        return () => window.removeEventListener("scroll", onScroll)
    }, [initialDirection, thresholdPixels, off])
    return scrollDir
} 

