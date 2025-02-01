'use client'
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/constant"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
export const  Hero = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=> {
 const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BLOG_POSTS.length);
        }, 5000); 
  }, [])

  return (
    <section className="relative pt-20 overflow-hidden w-full h-auto ">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary to-transparent opacity-50 z-10  w-full h-full" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        <div  className="pt-12 pb-16 lg:pt-32 lg:pb-48 text-center">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }} 
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay:0.2 }}

        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
      >
        Building Your
        <br />
        Dream Car
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button size="lg">Learn More</Button>
      </motion.div>
    </div>
          <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8, delay:0.4}}
           className="relative">
            <Image
              src="/red-4wheler.png"
              alt="Red sports car"
              width={600}
              height={400}
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full z-20">
      <svg viewBox="0 0 1440 320">
        <path className="bg-background/10" d="M0,288L26.7,293.3C53.3,299,107,309,160,298.7C213.3,288,267,256,320,234.7C373.3,213,427,203,480,197.3C533.3,192,587,192,640,202.7C693.3,213,747,235,800,250.7C853.3,267,907,277,960,272C1013.3,267,1067,245,1120,229.3C1173.3,213,1227,203,1280,213.3C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">

        </path>
          </svg>
      </div>
      {BLOG_POSTS.map(({image, title}, index)=> (
               <Image
               key={index}
               src={image}
               alt={title}
               fill
               className={cn(
                "object-cover z-0 transition-opacity duration-1000",
                index === currentImageIndex ? "opacity-35" : "opacity-0"
              )}/>
      ))}
 
    </section>
  )
}


  