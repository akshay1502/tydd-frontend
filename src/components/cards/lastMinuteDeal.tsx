import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LastMinutePackage } from "@/payload-types";
import IconLastMinuteFeature from "@/assets/icons/lastMinuteFeature";
import { getMediaUrl } from "@/lib/utils";

export default function LastMinuteDeal({ data }: { data: LastMinutePackage }) {
  return (
    <Link
      href={`/package/last-minute-packages/${data?.destination}`}
      className="flex flex-col lg:w-[300px] w-[250px] p-2 rounded-2xl backdrop-blur-md"
      style={{
        background:
          "linear-gradient(112.61deg, rgba(255, 255, 255, 0.32) -3.49%, rgba(255, 255, 255, 0.1) 114.11%)",
      }}
    >
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className="w-[284px] h-52 relative">
          <Image
            src={
              typeof data.image === "object" && data.image?.url ? getMediaUrl(data.image.url) : ""
            }
            alt={typeof data.image === "object" && data.image?.alt ? data.image.alt : ""}
            fill
            className="object-cover"
            sizes="(max-width: 450px) 50vw, (max-width: 1920px) 25vw"
          />
          <div className="w-full h-full bg-[#00000026] z-10 absolute"></div>
        </div>
        <p className="rounded-br-lg py-1 px-2 z-20 text-white text-xs font-semibold absolute top-0 left-0 bg-last-minute-discount-gradient">
          {data?.discount}% OFF
        </p>
        <p className="absolute lg:bottom-3 lg:left-3 bottom-2 left-2 z-20 text-white font-semibold b2reg">
          {data?.destination}
        </p>
      </div>
      <div className="flex flex-col gap-2 my-3">
        <p className="text-white">{data?.package}</p>
        {data?.features?.map((item) => {
          return (
            <div className="text-white font-semibold flex items-center gap-2" key={item?.id}>
              <IconLastMinuteFeature />
              <p className="text-white text-sm">{item?.feature}</p>
            </div>
          );
        })}
        <div className="text-white font-semibold flex items-center gap-2">
          <p className="text-white font-semibold">
            ₹
            {(
              (data?.cost as number) -
              (data?.cost as number) * ((data?.discount as number) / 100)
            )?.toLocaleString("en-IN")}{" "}
            per person
          </p>
          <p className="text-white text-xs line-through">₹{data?.cost?.toLocaleString("en-IN")}</p>
        </div>
      </div>
      <Button className="cta">Explore</Button>
    </Link>
  );
}
