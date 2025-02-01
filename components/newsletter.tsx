import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import Image from "next/image"

export const  Newsletter  = () => {
  return (
    <section className="relative h-auto w-full">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-30 z-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/10 border-0 text-white placeholder:text-gray-400"
            />
            <Button className="items-center flex ">Send <Send className="size-7"/></Button>
          </form>
        </div>
      </div>
      <Image
      src={'/stand-by-red-car.jpg'}
      alt="Email-section"
      fill
      className="object-cover z-0 opacity-15"
      />
    </section>
  )
}

