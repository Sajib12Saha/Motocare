import { PARTNERS } from "@/constant"
import Image from "next/image"

export const  Partners  = () => {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={220}
                height={160}
                className="h-36 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

