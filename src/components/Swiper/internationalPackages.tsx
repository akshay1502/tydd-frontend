'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Packages from '../cards/package'
import { Package } from '@/payload-types'
import IconRight from '@/assets/icons/swiperRight'

type SwiperInternationalPackagesProps = {
  title: string
  data: Package[]
}

export default function SwiperInternationalPackages({
  title,
  data,
}: SwiperInternationalPackagesProps) {
  return (
    <div className="px-4 lg:px-20">
      <div className="flexCenter mb-8 lg:mb-10">
        <h2 className="text-darkBlue ">{title}</h2>
        <div className="flex gap-6">
          <button
            className="internationalSwiperLeft flex justify-center items-center lg:h-12 lg:w-12 h-8 w-8 bg-white rounded-full shadow-[1.33px_1.33px_8px_2.67px_rgba(0,0,0,0.2)] lg:shadow-[2px_2px_12px_4px_rgba(0,0,0,0.1)] rotate-180"
            aria-label="Previous Slide"
          >
            <IconRight />
          </button>
          <button
            className="internationalSwiperRight flex justify-center items-center lg:h-12 lg:w-12 h-8 w-8 bg-white rounded-full shadow-[1.33px_1.33px_8px_2.67px_rgba(0,0,0,0.2)] lg:shadow-[2px_2px_12px_4px_rgba(0,0,0,0.1)]"
            aria-label="Next Slide"
          >
            <IconRight />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={24}
        modules={[Navigation]}
        slidesPerView="auto"
        slidesPerGroup={1}
        navigation={{
          nextEl: '.internationalSwiperRight',
          prevEl: '.internationalSwiperLeft',
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
        {data.map((data: Package) => (
          <SwiperSlide key={data?.id} className="!w-auto">
            <Packages data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
