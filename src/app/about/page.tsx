import Image from 'next/image'
import Services from './services'
import {
  IconExcellence,
  IconPassion,
  IconPersonalisation,
  IconTrust,
} from '@/assets/icons/standings'
import {
  IconItineraries,
  IconLuxury,
  IconPlanning,
  IconTrust as IconTrust2,
} from '@/assets/icons/IconsWhyTydd'

const standings = [
  {
    id: 1,
    title: 'Personalisation',
    description:
      'Your journey, your way—every itinerary is crafted to match your unique preferences and desires.',
    background: '#FFCB0014',
    icon: <IconPersonalisation />,
  },
  {
    id: 2,
    title: 'Trust',
    description:
      'Count on us for reliable service, seamless planning, and unforgettable travel experiences.',
    background: '#e300161a',
    icon: <IconTrust />,
  },
  {
    id: 3,
    title: 'Passion',
    description:
      'Our love for travel fuels our dedication to creating unforgettable journeys for every explorer.',
    background: '#6d91c61f',
    icon: <IconPassion />,
  },
  {
    id: 4,
    title: 'Excellence',
    description:
      'From start to finish, we aim for perfection, delivering top-notch service and memorable experiences.',
    background: '#0090351a',
    icon: <IconExcellence />,
  },
]

const whyTydd = [
  {
    title: 'Affordable Luxury',
    icon: <IconLuxury />,
  },
  {
    title: 'Custom Itineraries',
    icon: <IconItineraries />,
  },
  {
    title: 'Seamless Planning',
    icon: <IconPlanning />,
  },
  {
    title: 'Affordable Luxury',
    icon: <IconTrust2 />,
  },
]

export default function AboutPage() {
  return (
    <div className="lg:px-20 px-4 pt-3 lg:pt-10 layout">
      <div className="w-full h-[508px] relative rounded-3xl overflow-hidden">
        <Image src="/contact.webp" alt="image" fill className="object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 lg:left-24 left-4 right-4 lg:right-0 lg:w-[848px]">
          <h2 className="text-white  mb-5">About us</h2>
          <p className="b2reg text-white">
            At Travel Your Dream Destination (TYDD), we turn your travel dreams into reality with
            affordable yet luxurious experiences. Based in Mumbai, we specialize in personalized
            national and international trips crafted to suit your preferences. Our passion lies in
            creating unique journeys while ensuring hassle-free planning. Let us help you explore
            the world, one unforgettable adventure at a time.
          </p>
        </div>
      </div>
      <div className="flex lg:gap-24 gap-6 lg:flex-row flex-col">
        <div>
          <h2 className="text-black">Meet the founder</h2>
          <h3 className="h3 text-black font-semibold lg:mt-8 lg:mb-12 my-4">Eshant Ojha</h3>
          <p className="lg:text-2xl text-base text-black">
            With over a decade of diverse experience in the travel, event, and film industries,
            Eshant Ojha founded Travel Your Dream Destination in 2012 to turn his passion for travel
            into memorable experiences for others. A Commerce graduate with military training and a
            background in Cruise Management, Eshant has worked with top brands like Wizcraft and
            T-Series, managing MICE events and film productions across the globe.
            <br />
            His hands-on experience spans 6 years in the travel industry, 4 years in events, and a
            stint in film, equipping him with deep insights into crafting seamless journeys. From
            FIT and group bookings to product launches and DMC collaborations, he’s done it all.
            Outside work, Eshant finds joy in communicating, singing, traveling, and
            cooking—passions that continue to inspire his journey.
          </p>
        </div>
        <div className="lg:w-[508px] lg:h-[508px] w-full aspect-square relative rounded-2xl overflow-hidden shrink-0 self-center">
          <Image src="/contact.webp" alt="image" fill className="object-cover" />
        </div>
      </div>

      <Services />

      <div>
        <h2 className="text-darkBlue">What we Stand for</h2>
        <div className="lg:mt-12 mt-6 flex gap-6 lg:flex-row flex-col">
          {standings.map((item) => (
            <div
              key={item?.id}
              className="lg:p-6 p-4 flex lg:gap-6 gap-4 flex-col items-center shadow-about rounded-xl"
              style={{
                background: item?.background,
              }}
            >
              {item?.icon}
              <h4 className="text-black">{item?.title}</h4>
              <p className="text-black text-xl text-center">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-darkBlue ">Why TYDD</h2>
        <div className="lg:mt-14 mt-8 flex lg:gap-32 gap-6 lg:flex-row flex-col">
          <div className="flex flex-col lg:gap-14 gap-6">
            <p className="lg:text-xl text-sm">
              At TYDD, we go beyond ordinary travel experiences to create extraordinary memories.
              Our dedication to personalized service and seamless journeys ensures your trip is
              unforgettable. With expert planning and attention to detail, every aspect of your
              travel is in safe hands. Let us turn your dream vacation into a reality, stress-free
              and memorable.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-10 gap-y-4 gap-x-16">
              {whyTydd?.map((item, index) => (
                <div key={index} className="lg:py-2 flex items-center gap-2 lg:gap-6">
                  {item.icon}
                  <h4 className="text-black h4 font-bold">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[412px] h-[468px] w-full relative shrink-0">
            <Image src="/whytydd.webp" alt="image" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
