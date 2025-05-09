'use client'
import LightboxComponent from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { Button } from './ui/button'
import { useState } from 'react'
import Image from 'next/image'

import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from 'yet-another-react-lightbox'

const isNextJsImage = (slide: any) => {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number'
}

export function NextJsImage({ slide, offset, rect }: any) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps()

  const { currentIndex } = useLightboxState()

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  if (!isNextJsImage(slide)) return undefined

  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
    : rect.width

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
    : rect.height

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=""
        src={slide}
        loading="eager"
        draggable={false}
        placeholder={slide.blurDataURL ? 'blur' : undefined}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  )
}

export default function LightBoxWrapper({ slides }: any) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        className="absolute bottom-5 right-5 text-sm font-medium py-3 px-5"
        onClick={() => setOpen(true)}
      >
        See all photos
      </Button>
      <LightboxComponent
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Thumbnails]}
        carousel={{
          preload: 5,
          // making false creates infinite scrolling
          finite: true,
        }}
        render={{
          slide: NextJsImage,
        }}
      />
    </>
  )
}
