'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import IconLastMinuteSwiperLeft from '@/assets/icons/lastMinuteSwiperLeft'
import LastMinuteDeal from '../cards/lastMinuteDeal'
import { LastMinutePackage } from '@/payload-types'

export default function SwiperLastMinutePackages({
  title,
  data,
  dates = {},
}: {
  title: string
  data: LastMinutePackage[]
  dates?: {
    show_last_minute_packages?: boolean | null
    start_date?: string | null
    end_date?: string | null
  }
}) {
  return (
    <div className="lg:mx-20">
      <div className="py-16 lg:py-20 relative lg:rounded-3xl overflow-hidden">
        <Image
          src="/last_minute_bg.webp"
          alt="image"
          fill
          className="object-cover -z-10 lg:block hidden"
        />
        <Image
          src="/last_minute_bg_mobile.webp"
          alt="image"
          fill
          className="object-cover -z-10 block lg:hidden"
        />
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-[#00000099] -z-10"></div>
        <div className="lg:px-16 px-4 flexCenter">
          <h2 className="text-white ">{title}</h2>
          <div className="flex lg:gap-6 gap-4">
            <button className="lastMinuteSwiperLeft" aria-label="Previous Slide">
              <IconLastMinuteSwiperLeft />
            </button>
            <button className="lastMinuteSwiperRight rotate-180" aria-label="Next Slide">
              <IconLastMinuteSwiperLeft />
            </button>
          </div>
        </div>
        <h4 className="lg:px-16 px-4 text-white mt-2 mb-6 lg:mt-6 lg:mb-8">
          Deals for :{' '}
          <b>
            {new Date(dates?.start_date as string).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
            })}{' '}
            -{' '}
            {new Date(dates?.end_date as string).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </b>
        </h4>
        <Swiper
          spaceBetween={24}
          modules={[Navigation]}
          slidesPerView="auto"
          slidesPerGroup={1}
          navigation={{
            nextEl: '.lastMinuteSwiperRight',
            prevEl: '.lastMinuteSwiperLeft',
          }}
          breakpoints={{
            // When the window width is 640px or smaller (mobile)
            320: {
              spaceBetween: 16, // 10px space between slides
            },
            // For larger screens (desktop)
            1024: {
              spaceBetween: 24, // 20px space between slides
            },
          }}
          className="mySwiper lg:!px-16 !px-4"
        >
          {data.map((data) => (
            <SwiperSlide key={data?.id} className="!w-auto">
              <LastMinuteDeal data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
