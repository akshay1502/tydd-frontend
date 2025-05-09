'use client'
import Packages from '@/components/cards/package'
import { CircularSlider, Testimonial } from '@/components/ImageCircularSlider'
import Pill from '@/components/pill'
import { Package } from '@/payload-types'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function FilterPackages({
  allPackages,
  testimonial_data,
}: {
  allPackages: Package[]
  testimonial_data: {
    id: number
    testimonials_domestic?: Testimonial[] | null
    testimonials_international?: Testimonial[] | null
    testimonials_cruise?: Testimonial[] | null
  }
}) {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') || 'domestic'
  const [activePill, setActivePill] = useState('All')

  const testimonial =
    activeTab === 'domestic'
      ? testimonial_data?.testimonials_domestic
      : activeTab === 'international'
        ? testimonial_data?.testimonials_international
        : testimonial_data?.testimonials_cruise

  const setOfLocations = [
    ...new Set(
      allPackages
        .flatMap((item) =>
          item?.type === activeTab &&
          item.location &&
          typeof item.location === 'object' &&
          item.location !== null
            ? [item.location.name] // Extract the name field if location is an object
            : [],
        )
        .filter(Boolean),
    ),
  ]

  return (
    <>
      <div className="lg:px-20 px-4">
        <h2 className="text-darkBlue capitalize">Explore {activeTab}</h2>
        <div className="flex lg:gap-6 gap-4 lg:my-9 my-6 overflow-x-scroll scrollbar-hide">
          <Pill text="All" isActive={'All' === activePill} setActivePill={setActivePill} />
          {setOfLocations.map((location: string, index: number) => (
            <Pill
              key={index}
              text={location ?? ''}
              setActivePill={setActivePill}
              isActive={location === activePill}
            />
          ))}
        </div>
        <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(193px,193px))] grid-cols-2 lg:gap-6 gap-4 gap-y-6">
          {allPackages
            .filter(
              (item) =>
                item?.type === activeTab &&
                (activePill === 'All' ||
                  (item?.location &&
                    typeof item.location === 'object' &&
                    'name' in item.location &&
                    item.location.name === activePill)),
            )
            .map((item: Package) => (
              <Packages key={item?.id} data={item} smallVariant={true} />
            ))}
        </div>
      </div>
      <CircularSlider data={testimonial ?? []} />
    </>
  )
}
