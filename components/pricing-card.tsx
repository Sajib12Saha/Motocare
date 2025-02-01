import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    title: "Modification Car",
    price: "94",
    features: ["Best Modification", "Best Price", "Best Services", "Body Repair"],
    isPopular: false,
  },
  {
    title: "Car Painting",
    price: "96",
    features: ["Best Modification", "Best Price", "Best Services", "Body Repair"],
    isPopular: true,
  },
  {
    title: "Car Repair",
    price: "87",
    features: ["Best Modification", "Best Price", "Best Services", "Body Repair"],
    isPopular: false,
  },
]

export const  PricingCard = () => {
  return (
    <section className=" py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className={`rounded-lg p-8 ${plan.isPopular ? "bg-primary" : "bg-secondary"}`}>
              <h3 className="text-2xl font-bold  mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold ">${plan.price}</span>
              </div>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center ">
                    <Check className="h-5 w-5 mr-2 " />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.isPopular
                    ? "bg-background "
                    : ""
                }`}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

