import { Navbar } from "./navbar"
import { Footer } from "./footer"
interface props {
    children: React.ReactNode
}



export default function HomeLayout({ children }: props) {
    return <div>
        <Navbar />
        <div className="flex-1 bg-[#f4f4f0]">
            {children}
        </div>
        <Footer />
        </div>
}