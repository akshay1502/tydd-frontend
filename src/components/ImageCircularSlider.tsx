"use client";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import { Media } from "@/payload-types";
import { useGSAP } from "@gsap/react";

import dynamic from "next/dynamic";
import { SkeletonCircularSlider } from "@/lib/skeleton";
import { getMediaUrl } from "@/lib/utils";

export const CircularSlider = dynamic(() => import("@/components/ImageCircularSlider"), {
  ssr: false, // Ensures the component is only rendered on the client-side
  loading: () => <SkeletonCircularSlider />, // Custom loading fallback
});

gsap.registerPlugin(MotionPathPlugin);

export type Testimonial = {
  name?: string | null;
  review?: string | null;
  image?: (number | null) | Media;
  id?: string | null;
};

export default function CircularSliderWithGSAP({ data }: { data: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const items = gsap.utils.toArray(".item") as HTMLElement[];
    const numItems = items.length;

    gsap.set(items, {
      motionPath: {
        path: "#circlePath",
        align: "#circlePath",
        alignOrigin: [0.5, 0.5],
        end: (i) => 0.5 + i / numItems,
      },
    });

    const itemStep = 1 / numItems,
      wrapProgress = gsap.utils.wrap(0, 1),
      snap = gsap.utils.snap(itemStep),
      wrapTracker = gsap.utils.wrap(0, numItems),
      tracker = { item: 0 };

    const tl = gsap.timeline({ paused: true });

    tl.to(".wrapper", {
      rotation: 360,
      transformOrigin: "center",
      duration: 1,
      ease: "none",
    });

    tl.to(
      items,
      {
        rotation: "-=360",
        transformOrigin: "center",
        duration: 1,
        ease: "none",
      },
      0
    );

    tl.to(
      tracker,
      {
        item: numItems,
        duration: 1,
        ease: "none",
        modifiers: {
          item(value) {
            const newIndex = wrapTracker(numItems - Math.round(value));
            setActiveIndex(newIndex); // Update activeIndex state
            scaleActiveImage(newIndex);
            return newIndex;
          },
        },
      },
      0
    );

    items.forEach((el, i) => {
      el.addEventListener("click", () => {
        const current = tracker.item;

        if (i === current) return;

        const diff = current - i;

        if (Math.abs(diff) < numItems / 2) {
          moveWheel(diff * itemStep);
        } else {
          const amt = numItems - Math.abs(diff);
          moveWheel(current > i ? amt * -itemStep : amt * itemStep);
        }
      });
    });

    function moveWheel(amount: number) {
      gsap.to(tl, {
        progress: snap(tl.progress() + amount),
        modifiers: {
          progress: wrapProgress,
        },
      });
    }

    function scaleActiveImage(index: number) {
      gsap.to(items, {
        scale: (i) => (i === index ? 1.5 : 1),
        filter: (i) => (i === index ? "grayscale(0)" : "grayscale(1)"),
        duration: 0.3,
        ease: "power2.out",
      });
    }
    // 🟢 Ensure first image is scaled properly on mount
    scaleActiveImage(0);

    return () => {
      tl.kill(); // cleanup GSAP animation
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".testimonial-name",
      { height: 0 },
      { height: "auto", duration: 0.6, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".testimonial-review",
      { height: 0 },
      { height: "auto", duration: 0.6, ease: "power2.inOut" }
    );
  }, [activeIndex]);

  return (
    <div className="relative lg:h-[730px] h-[320px] items-center overflow-hidden">
      <div className="absolute w-full h-full -z-10 opacity-10">
        <Image src="/map.webp" alt="dummy" fill className="object-cover" />
      </div>
      <h2 className="px-4 lg:px-20 text-darkBlue ">What our customer says</h2>
      <div className="absolute lg:top-[250px] top-[80px] left-4 lg:left-20 w-1/2">
        <div className="lg:mb-8 mb-4 lg:h-10 h-5">
          <h3 className="testimonial-name overflow-hidden text-black lg:text-[32px] lg:leading-[40px] text-sm font-semibold">
            {data[activeIndex]?.name}
          </h3>
        </div>
        <p className="testimonial-review overflow-hidden text-black lg:text-2xl text-xs tracking-wide">
          {data[activeIndex]?.review}
        </p>
      </div>
      <div className="wrapper absolute right-0 translate-x-[40%] top-1/2 -translate-y-1/2 flex lg:h-[550px] lg:w-[550px] h-[164px] w-[164px]">
        <svg viewBox="0 0 550 550" className="lg:w-[550px] lg:h-[550px] w-[164px] h-[164px]">
          <path
            d="M 549,275 A 274,274 0 1,1 1,275 A 274,274 0 1,1 549,275"
            stroke="black"
            strokeWidth="2.5"
            fill="none"
            id="circlePath"
          />
        </svg>

        {data?.map((testimonial: Testimonial, index: number) => (
          <div
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className="lg:h-40 lg:w-40 w-12 h-12 absolute rounded-full overflow-hidden item cursor-pointer grayscale"
            key={index}
          >
            <Image
              src={
                typeof testimonial?.image === "object"
                  ? getMediaUrl(testimonial?.image?.url ?? "")
                  : ""
              }
              alt={typeof testimonial?.image === "object" ? testimonial?.image?.alt ?? "" : ""}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
