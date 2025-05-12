"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import IconHeroSwiperRight from "@/assets/icons/heroSwiperRight";
import { Package } from "@/payload-types";
import { getMediaUrl } from "@/lib/utils";

export default function SwiperHeroPackages({ data }: { data: Package[] }) {
  return (
    <div className="lg:mx-20">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item: Package) => (
          <SwiperSlide
            key={item?.id}
            className="!w-full !h-[700px] relative lg:rounded-3xl overflow-hidden"
          >
            <Image
              src={
                typeof item.image === "object" && item.image?.url ? getMediaUrl(item.image.url) : ""
              }
              alt={typeof item.image === "object" && item.image?.alt ? item.image.alt : ""}
              fill
              className="object-cover -z-10"
              priority
              sizes="(max-width: 450px) 50vw, (max-width: 1920px) 100vw"
            />

            <div className="flex flex-col gap-5 absolute left-4 lg:left-24 top-1/2 -translate-y-1/2">
              <h4 className="text-white">{item?.title}</h4>
              <h1 className="text-white font-bold text-5xl">{item?.destination}</h1>
              <Button variant="explore" size="sm" asChild className="cta">
                <Link href={`/package/packages/${item?.destination}`}>
                  Explore Now <IconHeroSwiperRight />
                </Link>
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
