'use client'
import Image from "next/image"
import { motion } from "framer-motion"
export const ImageCanva = () => {
    return (
<div className="py-10">

<div className="relative flex items-center justify-center   md:space-x-[-120px] w-full">
  {/* Image 1 */}
  <motion.div initial={{opacity:0, rotate:-15, skewY:6, x:100}}
  whileInView={{opacity:1, rotate:-15, skewY:6, x:0}}
  transition={{duration:1, delay:0.2}}
 className="relative shadow-lg">
    <Image
      src="/canva/canva.jpg"
      alt="Car 1"
      width={320}
      height={420}
      className="rounded-lg"
    />
 
  </motion.div>

  {/* Image 2 */}
  <motion.div initial={{opacity:0, rotate:-15, skewY:3, y:-100}}
  whileInView={{opacity:1, rotate:-15, skewY:3, y:0}}
  transition={{duration:1, delay:0.2}}
 className="relative  shadow-lg z-10">
    <Image
      src="/canva/canva5.jpg"
      alt="Car 2"
      width={320}
      height={420}
      className="rounded-lg"
    />

  </motion.div>

  {/* Image 3 */}
  <motion.div initial={{opacity:0, rotate:-4, skewY:2, y:100}}
  whileInView={{opacity:1, rotate:-4, skewY:2, y:0}}
  transition={{duration:1, delay:0.2}}
  className="relative  shadow-xl z-20">
    <Image
      src="/canva/canva4.jpg"
      alt="Car 3"
      width={340}
      height={440}
      className="rounded-lg"
    />

  </motion.div>

  {/* Image 4 */}
  <motion.div initial={{opacity:0, rotate:10, skewY:-3, y:-100}}
  whileInView={{opacity:1, rotate:10, skewY:-3, y:0}}
  transition={{duration:1, delay:0.2}}
  className="relative shadow-lg z-10">
    <Image
      src="/canva/canva3.jpg"
      alt="Car 4"
      width={320}
      height={420}
      className="rounded-lg"
    />

  </motion.div>

  {/* Image 5 */}
  <motion.div initial={{opacity:0, rotate:20, skewY:-6, y:20}}
  whileInView={{opacity:1, rotate:20, skewY:-6, y:0}}
  transition={{duration:1, delay:0.2}}
   className="relative  shadow-lg">
    <Image
      src="/canva/canva2.jpg"
      alt="Car 5"
      width={320}
      height={420}
      className="rounded-lg"
    />
  
  </motion.div>
</div>


  </div>
    )
}