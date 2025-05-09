'use client'
import dynamic from 'next/dynamic'

import animationData from '@/assets/lottie/loader2.json'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function Loading() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-white flex items-center justify-center z-[110]">
      <Lottie animationData={animationData} loop={true} className="w-[200px] h-[200px]" autoplay />
    </div>
  )
}
