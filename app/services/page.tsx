import { FAQ } from "@/components/faq"
import { ModificationServices } from "@/components/modification-services"
import { PricingCard } from "@/components/pricing-card"

const ServicesPage = () => {
    return (
        <div className="py-20 px-4">
        <ModificationServices/>
        <FAQ/>
        <PricingCard/>
        </div>
    )
}

export default ServicesPage