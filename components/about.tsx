'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export const  About = () => {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative flex items-center justify-center space-x-4">

  <motion.div 
  initial={{opacity:0, y:-100, rotate:-5}}
  whileInView={{opacity:1, y:0, rotate:-5}}
  transition={{delay:0.2, duration:1}}
    className="relative shadow-lg">
    <Image
      src="/sports-red-car.jpg"
      alt="Red Sports Car"
      width={400}
      height={200}
      className="rounded-lg"
    />
  
  </motion.div>
  


  <motion.div  
  initial={{ opacity: 0, y: 100, rotate: 5 }} 
   whileInView={{ opacity: 1, y: 0, rotate: 5 }} 
  transition={{ delay: 0.2, duration: 1 }}
  className="relative shadow-lg"
>
  <Image
    src="/stand-by-red-car.jpg"
    alt="Red Sports Car"
    width={400}
    height={200}
    className="rounded-lg"
  />

</motion.div>
</div>


        <motion.div
          initial={{opacity:0, x:20}}
          whileInView={{opacity:1, x:0}}
          transition={{delay:0.2, duration:1}} 
           className="flex flex-col items-start  gap-y-4">
            <h2 className="md:text-3xl text-2xl font-bold text-white">About Motocare</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <Button className="">Learn More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

