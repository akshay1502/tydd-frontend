import { getAllPackagesTestimonials, getPackages } from '@/payload'
import FilterPackages from './FilterPackages'
import { Suspense } from 'react'
import HeroImageSlider from './HeroImageSlider'

export const dynamic = 'force-dynamic'

export default async function AllPackagesPage() {
  const allPackages = await getPackages()
  const testimonial_data = await getAllPackagesTestimonials(1)

  return (
    <div className="layout">
      {/* image gallery section */}
      <Suspense fallback={<div>Loading...</div>}>
        <HeroImageSlider />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterPackages allPackages={allPackages} testimonial_data={testimonial_data} />
      </Suspense>
    </div>
  )
}
