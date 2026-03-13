"use client"

import { LucideIcon } from "lucide-react"
import { usePathname } from "next/dist/client/components/navigation"
import Link from "next/link"

type NavItemProps = {
    icon: LucideIcon
    label : string
    href : string
}

export default function NavItem({icon:Icon,label,href}:NavItemProps){
    const pathname = usePathname()

    const active = pathname === href
     
    return(
         <Link
      href={href}
      className="flex items-center gap-1 px-2 py-1 group bg-gray-100 rounded-full hover:text-blue-600"
    >
      <Icon
        className={`w-5 h-5 ${
          active ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"
        }`}
      />

      <span
        className={`text-sm ${
          active ? "text-blue-600 block" : "hidden group-hover:block"
        }`}
      >
        {label}
      </span>
    </Link>
    )
}