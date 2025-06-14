"use client"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { NavbarSidebar } from "./navbar-sidebar"
import { useState } from "react"
import { MenuIcon } from "lucide-react"
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
})

interface NavbarItemProps {
    href: string
    children: React.ReactNode,
    isActive?: boolean
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
    return (
        <Button variant="outline" className={cn("bg-transparent hover:bg-transparent hover:border-primary rounded-full border-transparent px-3.5 text-lg", isActive && "bg-black text-white hover:bg-black hover:text-white ")}>
            <Link href={href}>{children}</Link>
        </Button>
    )
}

const navbarItems = [
    { href: "/", children: <>Home</> },
    { href: "/about", children: <>About</> },
    { href: "/features", children: <>Features</> },
    { href: "/pricing", children: <>Pricing</> },
    { href: "/contact", children: <>Contact</> },
]

export const Navbar = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn("text-2xl font-semibold", poppins.className)}>
                    funroad
                </span>
            </Link>
            <div className="hidden md:flex items-center gap-x-4">
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href}  {...item} isActive={pathname === item.href} />

                ))}
            </div>

            <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={() => setIsSidebarOpen(!isSidebarOpen)} />
                
            <div className="flex md:hidden items-center justify-center">
                    <Button variant="ghost" className="size-12 border-transparent bg-white" onClick={()=>setIsSidebarOpen(true)}>
                        <MenuIcon className="size-6" />
                    </Button>
                </div>
            <div className="hidden md:flex">
                <Button 
                variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg">
                     <Link href="/login">
                     Login</Link>
                </Button>
                <Button variant="secondary"
                className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black hover:text-black text-white  hover:bg-pink-400 transition-colors text-lg">
                   <Link href="/sign-in">
                   Start Selling</Link>
                </Button>

            
            </div>
        </nav>
    )
}