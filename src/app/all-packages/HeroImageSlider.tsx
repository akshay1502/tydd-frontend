'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { Suspense } from 'react'
import PackagesTab from './PackagesTab'
import { useSearchParams } from 'next/navigation'

const packagesImages = [
  {
    type: 'domestic',
    images: [
      '/domestic1_compressed.webp',
      '/domestic2_compressed.webp',
      '/domestic3_compressed.webp',
      '/domestic4_compressed.webp',
      '/domestic5_compressed.webp',
      '/domestic6_compressed.webp',
      '/domestic7_compressed.webp',
      '/domestic8_compressed.webp',
    ],
  },
  {
    type: 'international',
    images: [
      '/international1_compressed.webp',
      '/international2_compressed.webp',
      '/international3_compressed.webp',
      '/international4_compressed.webp',
      '/international5_compressed.webp',
      '/international6_compressed.webp',
      '/international7_compressed.webp',
      '/international8_compressed.webp',
    ],
  },
  {
    type: 'cruise',
    images: [
      '/cruise1_compressed.webp',
      '/cruise2_compressed.webp',
      '/cruise3_compressed.webp',
      '/cruise4_compressed.webp',
      '/cruise5_compressed.webp',
      '/cruise6_compressed.webp',
      '/cruise7_compressed.webp',
      '/cruise8_compressed.webp',
    ],
  },
]
export default function HeroImageSlider() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') || 'domestic'

  const packageDetails = [
    {
      type: 'domestic',
      description:
        'Discover the beauty of India with our curated travel packages, covering breathtaking destinations from the Himalayas to the beaches of Goa.',
    },
    {
      type: 'international',
      description:
        'Explore the world beyond borders with our handpicked international packages - whether its the charm of Europe, the wonders of Asia, or island escapes in the tropics.',
    },
    {
      type: 'cruise',
      description:
        'Set sail on unforgettable journeys with our cruise packages - luxurious stay, ocean views, and adventures that drift beyond the ordinary.',
    },
  ]
  useGSAP(() => {
    gsap.fromTo(
      '.firstImage',
      { x: '-100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.secondImage',
      { y: '100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.thirdImage',
      { y: '100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.fourthImage',
      { x: '-100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.fifthImage',
      { x: '-100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.sixthImage',
      { y: '-100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.seventhImage',
      { y: '-100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.eightImage',
      { x: '100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )
  }, [activeTab])

  const activeImages = packagesImages.find((item) => item.type === activeTab)?.images || []

  return (
    <div className="lg:h-[516px] h-[260px] flex gap-4 relative lg:mx-20 lg:rounded-3xl overflow-hidden bg-[#373535]">
      <div className="flex-[1.5] h-full grid grid-cols-2 grid-rows-[7fr_10fr] gap-4 relative">
        {/* Image 1 */}
        <div className="relative col-span-2 row-span-1 rounded-br-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[0]} alt="Image 1" fill className="firstImage object-cover" />
        </div>

        {/* Image 2 */}
        <div className="relative col-span-1 row-span-1 rounded-tr-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[1]} alt="Image 2" fill className="secondImage object-cover" />
        </div>

        {/* Image 3 */}
        <div className="relative col-span-1 row-span-1 rounded-t-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[2]} alt="Image 3" fill className="thirdImage object-cover" />
        </div>
      </div>
      <div className="lg:flex-[1.5] flex-[1] h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-[10fr_7fr] gap-4 relative">
        {/* Image 1 */}
        <div className="relative col-span-2 lg:col-span-1 row-span-1 rounded-b-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[3]} alt="Image 1" fill className="fourthImage object-cover" />
        </div>

        {/* Image 2 */}
        <div className="hidden lg:block relative col-span-1 row-span-1 rounded-b-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[4]} alt="Image 2" fill className="fifthImage object-cover" />
        </div>

        {/* Image 3 */}
        <div className="relative col-span-2 row-span-1 rounded-t-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[5]} alt="Image 3" fill className="sixthImage object-cover" />
        </div>
      </div>
      <div className="hidden flex-1 h-full lg:grid grid-cols-1 grid-rows-2 gap-4 relative">
        {/* Image 1 */}
        <div className="relative col-span-1 row-span-1 rounded-bl-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[6]} alt="Image 1" fill className="seventhImage object-cover" />
        </div>

        {/* Image 2 */}
        <div className="relative col-span-1 row-span-1 rounded-tl-lg overflow-hidden bg-[#1E1F23]">
          <Image src={activeImages[7]} alt="Image 2" fill className="eightImage object-cover" />
        </div>
      </div>
      <div className="bg-all-packages-images-gradient z-10 absolute w-full h-full top-0 bottom-0 left-0 right-0"></div>
      <Suspense fallback={<div>Loading...</div>}>
        <PackagesTab activeTab={activeTab} />
      </Suspense>
      <div className="absolute lg:left-28 left-4 top-32 z-10 lg:w-[512px] lg:top-1/2 lg:-translate-y-1/2">
        <h2 className="text-white lg:mb-4 mb-2 capitalize">{activeTab}</h2>
        <p className="text-white lg:text-xl text-xs">
          {packageDetails.find((item) => item.type === activeTab)?.description}
        </p>
      </div>
    </div>
  )
}
