import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
export const  Footer = () =>  {
  return (
    <footer className="bg-dark relative">
      <div className="absolute inset-0 bg-red-overlay opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center  z-30">
          <div className="flex flex-col justify-center w-full text-center">
            <Image
              src="/logo.jpg"
              alt="Motocare Logo"
              width={200}
              height={70}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex space-x-4 items-center w-full justify-center">
              <FaFacebookF className="h-5 w-5 hover:text-primary"/>
              <FaXTwitter className="h-5 w-5 hover:text-primary" />
              <FaInstagram className="h-5 w-5 hover:text-primary" />
            </div>
          </div>
          <div>
            <h3 className=" font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <a href={'mailto:sahasojib0155@gmail.com'}>sahasojib0155@gmail.com</a>
              <p>+789 555 555</p>
              <p>Khagrachari,Chittagong, Bangladesh</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">We Are Open</h3>
            <p className="text-gray-300">Monday - Saturday 9 AM - 10 PM</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 z-30">
          <p>© 2024 Sajib Template - All Rights Reserved</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-bl from-primary to-transparent w-full h-full opacity-30 z-10"/>
        <Image
        src={'/stand-by-red-car.jpg'}
        alt=""
        fill
        className="object-cover z-0 opacity-10"/>
      </div>
    </footer>
  )
}

