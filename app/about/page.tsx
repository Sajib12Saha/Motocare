import { About } from "@/components/about";
import { Achievements } from "@/components/achivements"
import { ServicesMetrics } from "@/components/services-metrics";
import { Testimonials } from "@/components/testimonials"

const AboutPage = () => {
    return (
       <>
         <About />
       <ServicesMetrics />
       <Achievements />
       <Testimonials />
       </>
    )
}

export default AboutPage;