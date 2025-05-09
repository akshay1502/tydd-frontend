import localFont from 'next/font/local'

export const aileron = localFont({
  src: [
    {
      path: './Aileron-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Aileron-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Aileron-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-aileron',
})
