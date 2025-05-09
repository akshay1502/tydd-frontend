'use client'
import {
  Accordion,
  AccordionContent2,
  AccordionItem2,
  AccordionTrigger2,
} from '@/components/ui/accordion'
import IconTick from '@/assets/icons/tick'
import { useState } from 'react'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Corporate & Group Travel',
    description:
      'Specialized booking services for corporate events, team retreats, and large group travel with customized itineraries and exclusive rates.',
    points: [
      'Corporate team building retreats',
      'Exclusive group booking discounts',
      'Customized corporate travel management',
    ],
    image: '/services1.webp',
  },
  {
    id: 2,
    title: 'Packages & Cruises',
    description:
      'Comprehensive international and domestic travel packages including luxury cruise experiences to destinations worldwide.',
    points: [
      'Luxury cruise experiences worldwide',
      'All-inclusive international packages',
      'Domestic heritage and adventure tours',
    ],
    image: '/services2.webp',
  },
  {
    id: 3,
    title: 'Flight Booking',
    description:
      'Seamless international and domestic flight booking services with access to exclusive deals and premium airline partnerships.',
    points: [
      'International flight booking with premium airlines',
      'Domestic air travel at competitive rates',
      'Special airfare deals and seasonal promotions',
    ],
    image: '/services3.webp',
  },
  {
    id: 4,
    title: 'Travel Documentation',
    description:
      'Expert assistance with visa applications, passport renewals, and all travel documentation requirements for hassle-free international travel.',
    points: [
      'Visa application assistance for all countries',
      'Passport renewal and application support',
      'Travel insurance and documentation guidance',
    ],
    image: '/services4.webp',
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <h2 className="mb-14">Services we offer</h2>
      <div className="flex lg:flex-row flex-col lg:gap-44 gap-6 items-end">
        <div className="grow order-2 lg:order-1">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
            onValueChange={(value) => {
              const index = Number(value?.split('-')[1]) || 0
              setActiveIndex(index)
            }}
          >
            {services?.map((service, index) => (
              <div key={service?.id} className="flex w-full">
                <AccordionItem2 value={`item-${index}`}>
                  <AccordionTrigger2>
                    <h3>{service.title}</h3>
                  </AccordionTrigger2>
                  <AccordionContent2>
                    <div>
                      <p className="mb-6 text-borderStroke b2reg">{service.description}</p>
                      <div className="flex flex-col gap-3">
                        {service?.points?.map((point, index) => (
                          <div key={index} className="flex gap-4 items-center">
                            <IconTick />
                            <p className="text-black b2sb">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent2>
                </AccordionItem2>
              </div>
            ))}
          </Accordion>
        </div>
        <div className="relative w-[320px] h-[320px] shrink-0 order-1 lg:order-2 self-center lg:self-end mt-8 lg:mt-0">
          {services.map((service, index) => {
            const isHidden = index < activeIndex

            return (
              <div
                key={index}
                className={`w-[320px] h-[320px] absolute transition-all duration-700 overflow-hidden`}
                style={{
                  bottom: `${(3 - index) * 16}px`,
                  transform: isHidden
                    ? `translateY(-100%) scale(${1 + (4 * (3 - index)) / 100})`
                    : `translateY(0) scale(${1 + (4 * (3 - index)) / 100})`,
                  zIndex: (3 - index) * 20,
                  opacity: isHidden ? 0 : 1,
                }}
              >
                <div>
                  <Image
                    src={service.image}
                    alt="image"
                    fill
                    className="object-cover brightness-75"
                  />
                </div>
                <h4 className="h4b absolute bottom-6 left-6 text-white">{service.title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
