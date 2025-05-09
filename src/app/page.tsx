import "./styles.css";
import SwiperPopularPackages from "@/components/Swiper/popularPackages";
import SwiperFixedPackages from "@/components/Swiper/fixedPackages";
import SwiperInternationalPackages from "@/components/Swiper/internationalPackages";
import SwiperLastMinutePackages from "@/components/Swiper/lastMinutePackages";
import SwiperHeroPackages from "@/components/Swiper/heroPackages";
import Image from "next/image";
import {
  getFixedPackages,
  getHomeData,
  getInternationalPackages,
  getLastMinutePackages,
  getPopularPackages,
} from "@/payload";
import Marquee from "react-fast-marquee";

// swiper navigation and pagination css files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Package } from "@/payload-types";
import { CircularSlider } from "@/components/ImageCircularSlider";
import { IconItineraries, IconLuxury, IconPlanning, IconTrust } from "@/assets/icons/IconsWhyTydd";

export const revalidate = 60;

export default async function HomePage() {
  const [packages, fixedPackages, lastMinutePackages, homeData, internationalPackages] =
    await Promise.all([
      getPopularPackages(),
      getFixedPackages(),
      getLastMinutePackages(),
      getHomeData(),
      getInternationalPackages(),
    ]);

  const whyTydd = [
    {
      title: "Affordable Luxury",
      icon: <IconLuxury />,
    },
    {
      title: "Custom Itineraries",
      icon: <IconItineraries />,
    },
    {
      title: "Seamless Planning",
      icon: <IconPlanning />,
    },
    {
      title: "Affordable Luxury",
      icon: <IconTrust />,
    },
  ];
  return (
    <div className="layout">
      {/* Hero packages will redirect to same as popular packages */}
      <SwiperHeroPackages data={(homeData?.hero_Packages as Package[]) || []} />
      {/* packages with popular boolean marked as true */}
      <SwiperPopularPackages title="Popular Packages" data={packages} />
      {/* last minute date packages with discount */}
      {homeData?.last_minute_date?.show_last_minute_packages && (
        <SwiperLastMinutePackages
          title="Last Minute Deals"
          data={lastMinutePackages}
          dates={homeData?.last_minute_date}
        />
      )}
      {/* fixed date packages */}
      {homeData?.show_fixed_departures_packages && (
        <SwiperFixedPackages title="Fixed Departures" data={fixedPackages} />
      )}
      {/* packages with international type */}
      <SwiperInternationalPackages
        title="International Budget-Friendly Packages"
        data={internationalPackages}
      />
      <div className="px-4 lg:px-20">
        <h2 className="text-darkBlue ">Why TYDD</h2>
        <div className="mt-8 lg:mt-14 flex gap-6 lg:gap-32 lg:flex-row flex-col">
          <div className="flex flex-col gap-6 lg:gap-14">
            <p className="text-sm lg:text-xl">
              At TYDD, we go beyond ordinary travel experiences to create extraordinary memories.
              Our dedication to personalized service and seamless journeys ensures your trip is
              unforgettable. With expert planning and attention to detail, every aspect of your
              travel is in safe hands. Let us turn your dream vacation into a reality, stress-free
              and memorable.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 lg:gap-y-10 gap-x-16">
              {whyTydd?.map((item, index) => (
                <div key={index} className="lg:py-2 flex items-center gap-2 lg:gap-6">
                  {item.icon}
                  <h4 className="text-black h4 font-bold">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[412px] h-[468px] relative shrink-0">
            <Image
              src="/whytydd.webp"
              alt="image"
              fill
              className="object-cover"
              sizes="(max-width: 450px) 100vw, (max-width: 1920px) 40vw"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-darkBlue px-4 lg:px-20">Our Partners</h2>
        <Marquee className="marqueeContainer">
          {[
            "/partner1.webp",
            "/partner2.webp",
            "/partner3.webp",
            "/partner4.webp",
            "/partner2.webp",
            "/partner3.webp",
          ]?.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="image"
              width={0}
              height={156}
              className="mx-4 lg:mx-10 lg:h-[156px] h-14 w-auto object-contain"
              sizes="(max-width: 450px) 50vw, (max-width: 1920px) 40vw"
              loading="lazy"
            />
          ))}
        </Marquee>
      </div>
      <CircularSlider data={homeData?.testimonials_home ?? []} />
    </div>
  );
}
