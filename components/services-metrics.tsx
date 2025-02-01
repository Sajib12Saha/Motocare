'use client'
import { Button } from "@/components/ui/button"
import { METRICS } from "@/constant"
import { motion } from "framer-motion"

export const  ServicesMetrics = () => {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold  mb-6">Why Choose Us</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="space-y-6">
            {METRICS.map((metric) => (
              <div key={metric.name}>
                <div className="flex justify-between mb-2">
                  <span>{metric.name}</span>
                  <span>{metric.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
              initial={{ width: "0%" }} 
              whileInView={{ width: `${metric.percentage}%` }} 
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

