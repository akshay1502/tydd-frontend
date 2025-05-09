'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Pill from '../pill'
import Packages from '../cards/package'
import { useState } from 'react'
import { Package } from '@/payload-types'
import IconRight from '@/assets/icons/swiperRight'

type SwiperPopularPackagesProps = {
  title: string
  data: Package[]
}
export default function SwiperPopularPackages({ title, data }: SwiperPopularPackagesProps) {
  const [activePill, setActivePill] = useState('All')

  const setOfCategories = [
    ...new Set(
      data
        .flatMap((item) =>
          (item.category || []).map((element) =>
            typeof element === 'object' && element !== null ? element.name : null,
          ),
        )
        .filter(Boolean),
    ),
  ]

  return (
    <div className="px-4 lg:px-20">
      <div className="flexCenter">
        <h2 className="text-darkBlue ">{title}</h2>
        <div className="flex gap-6">
          <button
            className="custom-prev flex justify-center items-center lg:h-12 lg:w-12 h-8 w-8 bg-white rounded-full shadow-[1.33px_1.33px_8px_2.67px_rgba(0,0,0,0.2)] lg:shadow-[2px_2px_12px_4px_rgba(0,0,0,0.1)] rotate-180"
            aria-label="Previous Slide"
          >
            <IconRight />
          </button>
          <button
            className="custom-next flex justify-center items-center lg:h-12 lg:w-12 h-8 w-8 bg-white rounded-full shadow-[1.33px_1.33px_8px_2.67px_rgba(0,0,0,0.2)] lg:shadow-[2px_2px_12px_4px_rgba(0,0,0,0.1)]"
            aria-label="Next Slide"
          >
            <IconRight />
          </button>
        </div>
      </div>
      <div className="flex gap-4 mt-6 mb-6 lg:gap-6 lg:mt-10 lg:mb-8 overflow-x-scroll scrollbar-hide">
        <Pill text="All" isActive={'All' === activePill} setActivePill={setActivePill} />
        {(setOfCategories as string[])?.map((category: string, index: number) => (
          <Pill
            key={index}
            text={category ?? ''}
            setActivePill={setActivePill}
            isActive={category === activePill}
          />
        ))}
      </div>
      <Swiper
        // spaceBetween={24}
        modules={[Navigation]}
        slidesPerView="auto"
        slidesPerGroup={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        breakpoints={{
          // When the window width is 640px or smaller (mobile)
          320: {
            spaceBetween: 12, // 10px space between slides
          },
          // For larger screens (desktop)
          1024: {
            spaceBetween: 24, // 20px space between slides
          },
        }}
        className="mySwiper"
      >
        {data
          ?.filter(
            (packages: Package) =>
              activePill === 'All' ||
              packages?.category?.some(
                (item) =>
                  typeof item === 'object' &&
                  item !== null &&
                  'name' in item &&
                  item.name === activePill,
              ),
          )
          .map((data: Package) => (
            <SwiperSlide key={data?.id} className="!w-auto">
              <Packages data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
