import IconCalendar from "@/assets/icons/calendar";
import { getMediaUrl } from "@/lib/utils";
import { FixedPackage } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

// fixed packages have a pill requirement, this can be shifted to pill file later on
const Pill = ({ text }: { text: string }) => {
  return (
    <button className="text-sm py-1 px-3 rounded-full bg-blue text-white">
      {text}
    </button>
  );
};

export default function FixedDeparture({ data }: { data: FixedPackage }) {
  return (
    <Link
      href={`/package/fixed-packages/${data?.destination}`}
      className="flex flex-col lg:w-[300px] w-[260px] border border-offWhite rounded-lg"
    >
      <div className="relative rounded-lg overflow-hidden">
        <div className="w-[300] h-56 relative">
          <Image
            src={
              typeof data.image === "object" && data.image?.url
                ? getMediaUrl(data.image.url)
                : ""
            }
            alt={
              typeof data.image === "object" && data.image?.alt
                ? data.image.alt
                : ""
            }
            fill
            className="object-cover"
            sizes="(max-width: 450px) 50vw, (max-width: 1920px) 25vw"
            loading="lazy"
          />
          <div className="w-full h-full bg-[#00000026] z-10 absolute"></div>
        </div>
        <p className="absolute lg:bottom-3 lg:left-3 bottom-2 left-2 z-20 text-white font-semibold b2reg">
          {data?.destination}
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flexCenter">
          <p className="text-black">{data?.package}</p>
          <Pill text={data?.category as string} />
        </div>
        <p className="text-black font-semibold">
          ₹{data?.cost?.toLocaleString("en-IN")} per person
        </p>
        <div className="text-black font-semibold flex items-center gap-1.5">
          <IconCalendar />
          <p className="text-black">
            {new Date(data?.start_date as string).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}{" "}
            -{" "}
            {new Date(data?.end_date as string).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}
