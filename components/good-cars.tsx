'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"
import { motion } from "framer-motion";
import { usereSize } from "@/hooks/use-resize";

export const GoodCars = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative w-full">
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8  relative z-20 ">

            <motion.div initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.2}}
          className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Good Cars</h2>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <Button > Learn More</Button>
        
            </motion.div>

            <motion.div initial={{opacity:0,y:-100, skewX: -12}}
            whileInView={{opacity:1, y:0, skewX: -12}}
            transition={{duration:1, delay:0.2}}
            className="relative hidden md:block">
              <Image
                src="/sports-red-car.jpg"
                alt="Car service"
                width={300}
                height={200}
                className="rounded-lg"
              />
         
            </motion.div>

            <motion.div initial={{opacity:0, x: 20}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.2}}
            className="rounded-lg p-6 flex flex-col items-center  w-full justify-center text-center">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Top Modification</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           
            </motion.div>

          </div>

          {/* Full-Screen Background Image */}
          <Image
            src={"/stand-by-red-car.jpg"}
            alt="Full cover Image"
            fill
            className="object-cover z-0 opacity-5"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/20 z-10" />
        </div>
      </div>
    </section>
  );
};
