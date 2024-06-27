import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Created websites</AccordionTrigger>
          <AccordionContent>
            <Link href="/">Desishub Docs</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/">Inventory System</Link>
          </AccordionContent>
        </AccordionItem>
        </Accordion>
    )
  }
  