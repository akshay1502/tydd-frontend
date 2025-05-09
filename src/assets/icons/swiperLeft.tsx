export default function IconSwiperLeft() {
  return (
    <svg width="48" height="48" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_360_5067)">
        <rect
          x="14"
          y="14"
          width="48"
          height="48"
          rx="24"
          fill="white"
          shapeRendering="crispEdges"
        />
        <path
          d="M35.165 30.9183L28.0834 38L35.165 45.0817"
          stroke="#2986FD"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47.9167 38H28.2817"
          stroke="#2986FD"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_360_5067"
          x="0"
          y="0"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_360_5067"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_360_5067" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_360_5067"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
