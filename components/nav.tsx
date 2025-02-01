'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/constant"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"


export const  Nav = () => {

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const nextPage = (href:string) => {
    router.push(href)
    setIsSheetOpen(false)
  }

  return (
    <nav className="bg-background/95 fixed w-full z-50 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Motocare Logo"
              width={150}
              height={40}
              className="h-10 w-auto "
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
           {ROUTES.map(({href, name}, index)=> (
              <Link href={href} className="relative group" key={index}>
                {name}
                <div className={cn(
                  "abosulute w-0 h-[2px] bg-primary left-0 bottom-0 group-hover:w-full transition-all duration-700 ease-in-out",
                  pathname === href ? "w-full" :"w-0"
                  )}/>
              </Link>
           ))}
            <Button variant="default" onClick={()=> router.push('/contact')}>
              Contact
            </Button>
          </div>

          <div className="flex md:hidden items-center  pl-2">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
    <SheetTrigger className=""><Menu/></SheetTrigger>
    <SheetContent>
    <SheetHeader>
      <SheetTitle>Hey How are you?</SheetTitle>

    </SheetHeader>
    <div className="h-screen w-full  items-center justify-center flex flex-col gap-y-4">
      {ROUTES.map(({href, name}, index)=> (
        <Button variant={'outline'} onClick={()=> nextPage(href)} key={index}>{name}</Button>
      ))}

    </div>
  </SheetContent>
</Sheet>
          </div>
         
        </div>
      </div>
    </nav>
  )
}

