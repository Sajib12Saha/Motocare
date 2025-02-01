import { About } from "@/components/about";
import { GoodCars } from "@/components/good-cars";
import { Hero } from "@/components/hero";
import { HomeBlog } from "@/components/home-blog";
import { ImageCanva } from "@/components/image-canva";
import { ModificationServices } from "@/components/modification-services";
import { Newsletter } from "@/components/newsletter";
import { Partners } from "@/components/partners";
import { ServiceHighlights } from "@/components/service-highlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <About />
      <Newsletter />
      <ModificationServices />
      <GoodCars />
      <Partners />
      <HomeBlog />
      <ImageCanva/>
      </>
  
  )
}

