"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
type toast ={title:string,description:string}
export function ToastComp({title,description}:toast) {
  const { toast } = useToast()

  return (
    <Button
    type="submit" 
    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 outline-none focus:none"
           onClick={() => {
        toast({
          description: `${description}`,
        })
      }}
    >
      {title}
    </Button>
  )
}
