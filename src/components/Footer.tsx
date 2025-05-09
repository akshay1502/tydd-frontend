import IconFaceBook from '@/assets/icons/facebook'
import IconInstagram from '@/assets/icons/instagram'
import IconLogo from '@/assets/icons/logo'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerData = [
    {
      header: 'Destination',
      links: [
        { name: 'Maldives', href: '/package/packages/Maldives' },
        { name: 'Mauritius', href: '/package/packages/Mauritius' },
        { name: 'Sri Lanka', href: '/package/packages/Sri-Lanka' },
      ],
    },
    {
      header: 'General',
      links: [
        { name: 'Domestic packages', href: '/all-packages?type=domestic' },
        { name: 'International packages', href: '/all-packages?type=international' },
        { name: 'Cruise packages', href: '/all-packages?type=cruise' },
        { name: 'About us', href: '/about' },
        { name: 'Contact us', href: '/contact-us' },
      ],
    },
    {
      header: 'Reach us',
      links: [
        { name: 'info@tydd.in', href: 'mailto:info@tydd.in' },
        { name: 'Connect over Whatsapp', href: 'https://wa.me/919987159008' },
        { name: '+91-9987159008', href: 'tel:+9199871 59008' },
      ],
    },
  ]
  return (
    <footer className="relative px-4 pt-10 lg:px-20 lg:pt-12">
      <Image
        src="/footerBackground.webp"
        alt="footer"
        fill
        className="object-cover -z-10 lg:block hidden"
      />
      <Image
        src="/footerBackgroundMobile.webp"
        alt="footer"
        fill
        className="object-cover -z-10 block lg:hidden"
      />
      <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-0">
        <div>
          <Link href="/" aria-label="Home">
            <IconLogo />
          </Link>
          <div className="mt-4 lg:mt-8 flex gap-10">
            {[
              {
                icon: <IconFaceBook />,
                title: 'Facebook',
                link: 'https://www.facebook.com/profile.php?id=61570062492405',
              },
              {
                icon: <IconInstagram />,
                title: 'Instagram',
                link: 'https://www.instagram.com/travelyourdreamdestination?igsh=MWppM2JwMmJ1OXpqag==',
              },
            ]?.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" aria-label={item?.title}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        {footerData.map((item, index) => (
          <div key={index} className="lg:py-2">
            <h4 className="text-white h4 font-bold">{item.header}</h4>
            <ul className="mt-4">
              {item.links.map((link, index) => (
                <li key={index} className="lg:py-2 py-0.5">
                  <Link href={link.href} className="b2reg text-offWhite" target="_blank">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs lg:text-xl py-2 lg:py-4 text-center border-t border-offWhite mt-12 lg:mt-14 text-white">
        @2023 Travel Your Dream Destination. All rights reserved.
      </p>
    </footer>
  )
}
