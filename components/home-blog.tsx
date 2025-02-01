'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/constant"
import { motion } from "framer-motion"
export const  HomeBlog = () => {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Blog & Article</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {BLOG_POSTS.slice(0, 4).map((post, index) => (
  <motion.div
  initial={{opacity:0, y:100}}
  whileInView={{opacity:1, y:0}}
  transition={{duration:1, delay:0.2}}
   key={index} className="bg-secondary rounded-lg overflow-hidden">
    <Image
      src={post.image || "/placeholder.svg"}
      alt={post.title}
      width={300}
      height={200}
      className="w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">{post.title}</h3>
      <p className="text-gray-400 mb-4">{post.description}</p>
      <Button variant="default" >
        Learn More
      </Button>
          </div>
  </motion.div>


))}
        </div>
      </div>
    </section>
  )
}

