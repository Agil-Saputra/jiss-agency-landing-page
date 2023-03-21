import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import logo from "../assets/Logo.webp"
import Login from "./login"

export default function Navbar() {
const [showNav, setShowNav] = useState(false)
const menus = ["Home", "About us", "Our services", "Find doctors", "Contact"] 

function handleToggle() {
  setShowNav(!showNav)
}

  useEffect(() => {
    document.body.classList = (showNav ? "max-lg:overflow-hidden" : "overflow-unset")
}, [showNav]) 

  return (
    <header className="flex-center gap-8 justify-between my-10">
    <Image
        src={logo}
        width={163}
        height={44}
        alt="Mediacare Logo"
        priority={true}
    />

    <nav className={(showNav ? "translate-y-0 max-lg:bg-secondary" 
    : "max-lg:-translate-y-full") + " flex gap-8 items-center  max-lg:fixed max-lg:flex-col top-0 right-0 max-lg:z-10 max-lg:w-full max-lg:h-full max-lg:justify-center"} 
    onClick={handleToggle}>
    
    {menus.map((menu, i) => <Link href="#" className="hover:text-slate-400 smooth" key={i}>{menu}</Link>)}
   
    </nav>
    

    <div>
    <Login style={"lg:flex items-center gap-8 hidden"}/>
    {/* {showNav ? <GrClose {...setIcon} /> : <FaBars {...setIcon} />} */}
    </div>
    </header>
  )
}