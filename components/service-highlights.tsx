import { SERVICES } from "@/constant";

    export const  ServiceHighlights = () =>  {
    return (
      <section className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.number} className="flex items-start space-x-4 border-r-primary border-[1px] p-1">
                <span className="text-4xl font-bold text-primary">{service.number}</span>
                <div>
                  <h3 className="text-xl font-semibold  mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  