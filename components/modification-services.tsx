'use client'
import { Car, PaintBucket, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const services = [
  {
    icon: Car,
    title: "Modification Car",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
  },
  {
    icon: PaintBucket,
    title: "Car Painting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
  },
  {
    icon: Wrench,
    title: "Car Repair",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
  },
]

export const ModificationServices = () => {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Modification Your Car</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.2}}
             key={service.title} className="text-center">
              <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Button variant="link" className="text-primary">
                Learn More →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

