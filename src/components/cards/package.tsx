import { getMediaUrl } from "@/lib/utils";
import { Package } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export default function Packages({
  data,
  smallVariant,
}: {
  data: Package;
  smallVariant?: boolean;
}) {
  return (
    <Link
      href={`/package/packages/${data?.destination?.replace(/\s+/g, "-")}`}
      className={`group flex flex-col lg:gap-2 gap-1 ${smallVariant ? "w-auto" : "w-48"}`}
    >
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className={`${smallVariant ? "w-full aspect-square" : "w-48 h-48"} relative`}>
          <Image
            src={
              typeof data.image === "object" && data.image?.url ? getMediaUrl(data.image.url) : ""
            }
            alt={typeof data.image === "object" && data.image?.alt ? data.image.alt : ""}
            fill
            className="object-cover group-hover:scale-110 ease-linear duration-300"
            sizes="(max-width: 450px) 50vw, (max-width: 1920px) 20vw"
          />
          <div className="w-full h-full bg-[#00000026] z-10 absolute"></div>
        </div>
        <p className="absolute lg:bottom-3 lg:left-3 bottom-2 left-2 z-20 text-white font-semibold b2reg">
          {data?.destination}
        </p>
      </div>
      <p className="text-black lg:text-base text-xs mt-1 lg:mt-0">{data?.package}</p>
      <p className="text-black font-semibold lg:text-base text-sm">
        ₹{data?.cost?.toLocaleString("en-IN")} per person
      </p>
    </Link>
  );
}
