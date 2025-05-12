import { getAllPackagesTestimonials, getPackages } from "@/payload";
import FilterPackages from "./FilterPackages";
import { Suspense } from "react";
import HeroImageSlider from "./HeroImageSlider";
import { SkeletonHeroImageSlider, SkeletonPackages } from "@/lib/skeleton";

export const dynamic = "force-dynamic";

export default async function AllPackagesPage() {
  const [allPackages, testimonial_data] = await Promise.all([
    getPackages(),
    getAllPackagesTestimonials(),
  ]);

  return (
    <div className="layout">
      {/* image gallery section */}
      <Suspense fallback={<SkeletonHeroImageSlider />}>
        <HeroImageSlider />
      </Suspense>
      <Suspense fallback={<SkeletonPackages />}>
        <FilterPackages allPackages={allPackages} testimonial_data={testimonial_data} />
      </Suspense>
    </div>
  );
}
