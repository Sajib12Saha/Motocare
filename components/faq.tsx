"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQITEMS } from "@/constant"


export const  FAQ = () =>  {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[150px] md:h-[220px] lg:h-[300px]">
            <Image
              src="/red-4wheler.png"
              alt="Red sports car"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <Accordion type="multiple"  className="w-full">
              {FAQITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="bg-primary px-2">{item.question}</AccordionTrigger>
                  <AccordionContent className="px-2 py-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

