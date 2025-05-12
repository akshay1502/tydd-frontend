import { HighlightPill } from "@/components/pill";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import IconLocation from "@/assets/icons/location";
import Link from "next/link";
import { getDetailPage } from "@/payload";
import IconFeature from "@/assets/icons/feature";
import IconBreakFast from "@/assets/icons/breakfast";
import DetailPageForm from "@/components/detailPageForm";
import LightBoxWrapper from "@/components/Lightbox";
import OpenForm from "./OpenForm";
import IconMapLocation from "@/assets/icons/mapLocation";
import { getMediaUrl } from "@/lib/utils";

type CustomCollectionSlug = "packages" | "fixed-packages" | "last-minute-packages";

type DetailPageProps = Promise<{
  collection: CustomCollectionSlug;
  destination: string;
}>;

export default async function DetailPage({ params }: { params: DetailPageProps }) {
  const { collection, destination } = await params;

  const data = await getDetailPage(collection, destination?.replace(/-/g, " "));

  const slides = data?.gallery?.map((image) => {
    if (typeof image === "object" && image !== null) {
      return { src: image.url ?? "", alt: image.alt ?? "" };
    }
    return { src: "", alt: "" };
  });

  return (
    <div className="px-4 lg:px-20 lg:pt-4 pt-3 layout">
      <OpenForm
        destination={data?.destination ?? ""}
        discount={data && "discount" in data ? data.discount ?? 0 : 0}
        cost={data?.cost as number}
        type={collection}
      />
      <div>
        <p className="text-darkBlue text-xs capitalize">{`Home > ${collection.replaceAll(
          "-",
          " "
        )} > ${destination.replaceAll("-", " ")}`}</p>
        <h2 className="text-darkBlue lg:mt-6 lg:mb-8 my-4">{data?.destination}</h2>

        {/* Image section */}
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-[250px_250px] grid-rows-[250px] gap-6 relative">
          {/* Image 1 */}
          <div className="relative col-span-2 row-span-2">
            <Image
              src={
                typeof data?.gallery?.[0] === "object"
                  ? getMediaUrl(data.gallery[0]?.url ?? "")
                  : ""
              }
              alt={typeof data?.gallery?.[0] === "object" ? data.gallery[0]?.alt ?? "" : ""}
              fill
              className="object-cover rounded-xl"
              priority
              sizes="(min-width: 1280px) 70vw, (max-width: 1920px) 80vw"
            />
          </div>

          {/* Image 2 */}
          <div className="relative col-span-2 row-span-1 hidden lg:block">
            <Image
              src={
                typeof data?.gallery?.[1] === "object"
                  ? getMediaUrl(data.gallery[1]?.url ?? "")
                  : ""
              }
              alt={typeof data?.gallery?.[1] === "object" ? data.gallery[1]?.alt ?? "" : ""}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 450px) 50vw, (max-width: 1920px) 50vw"
            />
          </div>

          {/* Image 3 */}
          <div className="relative col-span-1 row-span-1 hidden lg:block ">
            <Image
              src={
                typeof data?.gallery?.[2] === "object"
                  ? getMediaUrl(data.gallery[2]?.url ?? "")
                  : ""
              }
              alt={typeof data?.gallery?.[2] === "object" ? data.gallery[2]?.alt ?? "" : ""}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 450px) 50vw, (max-width: 1920px) 25vw"
            />
          </div>

          {/* Image 4 */}
          <div className="relative col-span-1 row-span-1 hidden lg:block">
            <Image
              src={
                typeof data?.gallery?.[3] === "object"
                  ? getMediaUrl(data.gallery[3]?.url ?? "")
                  : ""
              }
              alt={typeof data?.gallery?.[3] === "object" ? data.gallery[3]?.alt ?? "" : ""}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 450px) 50vw, (max-width: 1920px) 25vw"
            />
          </div>

          <LightBoxWrapper slides={slides} />
        </div>
      </div>

      <div className="flex lg:gap-24">
        <div className="flex flex-col gap-16 grow overflow-hidden">
          <div>
            <h2 className="text-darkBlue ">Overview</h2>
            <p className="lg:text-xl text-sm text-black lg:mt-8 mt-6">{data?.overview}</p>
          </div>

          <div className="flex flex-col lg:gap-8 gap-4">
            <h2 className="text-darkBlue ">Highlights</h2>
            <div className="flex lg:gap-6 gap-2 lg:flex-wrap overflow-x-scroll lg:overflow-hidden">
              {data?.highlights?.chips?.map((chip) => (
                <HighlightPill key={chip?.id} text={chip?.chip ?? ""} />
              ))}
            </div>
            <ul className="flex flex-col lg:gap-4 gap-2 list-disc list-outisde pl-6">
              {data?.highlights?.pointers?.map((pointer) => (
                <li key={pointer?.id} className="text-darkBlue b3reg">
                  {pointer?.pointer}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-darkBlue lg:mb-10 mb-6">Day-Wise</h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {data?.day_breakup?.days?.map((day, index) => (
                <div key={day?.id} className="flex w-full">
                  <IconLocation />
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>
                      <p>
                        <b className="mr-2">
                          {"date" in day && day.date
                            ? new Date(day.date).toLocaleDateString("en-GB", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                              })
                            : `Day ${index + 1}`}
                          :{" "}
                        </b>
                        {day?.title}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4">
                        {day?.break_up?.map((breakup) => (
                          <div key={breakup?.id}>
                            <p className="text-darkBlue font-semibold lg:text-xl text-sm mb-3">
                              {breakup?.title}
                            </p>
                            <p className="text-black">{breakup?.subtitle}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="hidden md:block shrink-0">
          <div className="sticky top-16">
            <DetailPageForm
              destination={data?.destination ?? ""}
              discount={data && "discount" in data ? data.discount ?? 0 : 0}
              cost={data?.cost as number}
              type={collection}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-darkBlue lg:mb-10 mb-6">Accommodations</h2>
        <div className="flex lg:gap-6 gap-4 lg:flex-wrap overflow-x-scroll lg:overflow-hidden">
          {data?.accomodations?.locations?.map((accomodation) => (
            <div key={accomodation?.id} className="border border-offWhite rounded-xl">
              <div className="lg:w-[412px] lg:h-[232px] w-[250px] h-[140px] rounded-lg overflow-hidden relative">
                <Image
                  src={
                    typeof accomodation.image === "object" && accomodation.image?.url
                      ? getMediaUrl(accomodation.image.url)
                      : ""
                  }
                  alt={
                    typeof accomodation.image === "object" && accomodation.image?.alt
                      ? accomodation.image.alt
                      : ""
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 450px) 50vw, (max-width: 1920px) 50vw"
                />
              </div>
              <div className="flex flex-col lg:gap-4 gap-2 lg:p-4 p-2">
                <div className="flex flex-col lg:gap-2 gap-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-black font-bold h4">{accomodation?.name}</h4>
                    <Link href={accomodation?.link as string}>
                      <IconMapLocation />
                    </Link>
                  </div>
                  <p className="text-black b2reg">{accomodation?.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconFeature color="#1A1A1A" />
                  <p className="text-black text-sm">{accomodation?.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconBreakFast />
                  <p className="text-black text-sm">{accomodation?.whats_included}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
