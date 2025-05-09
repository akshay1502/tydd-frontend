'use client'
import DetailPageForm from '@/components/detailPageForm'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function OpenForm({
  destination,
  discount,
  cost,
  type,
}: {
  destination: string
  discount: number
  cost: number
  type: string
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      {!isOpen && (
        <Button
          className="fixed z-10 bottom-6 w-[calc(100vw-32px)] lg:hidden block"
          onClick={() => setIsOpen(true)}
        >
          Enquire Now
        </Button>
      )}
      <div
        className={`lg:hidden fixed bottom-0 left-0 w-full z-10 flex items-end flex-col transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="mb-4 mr-4 bg-[#737373cc] rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99927 17L16.9993 7"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9993 17L6.99927 7"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <DetailPageForm destination={destination} discount={discount} cost={cost} type={type} />
      </div>
    </>
  )
}
