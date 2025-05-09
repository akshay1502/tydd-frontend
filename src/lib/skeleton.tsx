import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCircularSlider() {
  return (
    <div className="lg:h-[730px] h-[320px] flex flex-col w-full lg:px-20 px-4 relative">
      <Skeleton className="lg:h-12 h-8 lg:w-[500px] w-[300px]" />
      <div className="flex justify-between items-center absolute lg:top-[250px] top-[80px] w-[90%]">
        <div>
          <Skeleton className="lg:h-10 h-5 w-[250] lg:mb-10 mb-5" />
          <Skeleton className="lg:h-40 h-28 w-[250px]" />
        </div>
        <Skeleton className="lg:h-40 lg:w-40 h-20 w-20 rounded-full" />
      </div>
    </div>
  )
}
