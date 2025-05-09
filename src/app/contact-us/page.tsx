import Image from 'next/image'
import IconEmail from '@/assets/icons/email'
import IconCall from '@/assets/icons/call'
import Link from 'next/link'
import ContactUsForm from '@/components/contactUsForm'
import IconFaceBook from '@/assets/icons/facebook'
import IconInstagram from '@/assets/icons/instagram'

export default function ContactUsPage() {
  return (
    <div>
      <div className="w-full h-96 relative">
        <Image src="/contact.webp" alt="image" fill className="object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 lg:left-1/2 left-4 lg:-translate-x-1/2 lg:w-[1062px]">
          <h2 className="text-white  mb-2">Get in touch</h2>
          <p className="text-lg text-white">Say Hello to New Adventures</p>
        </div>
      </div>
      <div className="rounded-2xl lg:p-6 p-4 lg:w-[1062px] flex flex-col lg:flex-row gap-10 lg:shadow-[0px_4px_13px_4px_rgba(0,0,0,0.15)] mx-auto -translate-y-20 lg:bg-white bg-transparent">
        <div className="bg-[#6CC1E8] lg:p-8 px-4 py-6 rounded-lg flex-1">
          <h3 className="text-white lg:text-4xl text-2xl font-semibold lg:mb-10 mb-5">
            Contact Information
          </h3>
          <div className="flex flex-col lg:gap-8 gap-4">
            <div className="flex flex-col lg:gap-4 gap-2">
              <h4 className="text-white">Address</h4>
              <p className="b2reg text-white">
                H4-1903, Vihang Valley Phase 3, Kasarvadavali, Thane West, Maharashtra - 400615
              </p>
            </div>
            <div className="flex flex-col lg:gap-4 gap-2">
              <h4 className="text-white">Contact</h4>
              <div className="flex items-center gap-2">
                <IconEmail />
                <p className="b2reg text-white">- info@tydd.in</p>
              </div>
              <div className="flex items-center gap-2">
                <IconCall />
                <p className="b2reg text-white">- +91 99871 59008</p>
              </div>
            </div>
            <div className="flex flex-col lg:gap-4 gap-2">
              <h4 className="text-white">Find us on</h4>
              <div className="flex gap-2">
                {[
                  {
                    icon: <IconFaceBook />,
                    link: 'https://www.facebook.com/profile.php?id=61570062492405',
                  },
                  {
                    icon: <IconInstagram />,
                    link: 'https://www.instagram.com/travelyourdreamdestination?igsh=MWppM2JwMmJ1OXpqag==',
                  },
                ]?.map((item, index) => (
                  <Link key={index} href={item.link} target="_blank">
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  )
}
