'use client'
import { useRouter } from 'next/navigation'

export default function PackagesTab({ activeTab }: { activeTab: string }) {
  const router = useRouter()

  const tabs = [
    {
      value: 'domestic',
      key: 'Domestic',
    },
    {
      value: 'international',
      key: 'International',
    },
    {
      value: 'cruise',
      key: 'Cruise',
    },
  ]

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-lg lg:py-3 lg:px-6 py-2 px-4 flex lg:gap-10 gap-6 z-10 bg-all-packages-buttons backdrop-blur-[50px]">
      {tabs?.map((tab) => (
        <button
          key={tab?.value}
          className={`font-semibold lg:text-xl text-base ${tab?.value == activeTab ? 'text-blue pb-0.5 border-b border-blue' : 'text-white'}`}
          onClick={() => router.push(`/all-packages?type=${tab.value}`, { scroll: false })}
        >
          {tab?.key}
        </button>
      ))}
    </div>
  )
}
