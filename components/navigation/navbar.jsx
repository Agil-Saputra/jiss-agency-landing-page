import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import logo from "../assets/Logo.webp"
import Login from "./login"

import { FaBars } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

export default function Navbar() {
const [showNav, setShowNav] = useState(false)

const menus = [
  {
    menu : "Home",
    path : "#home",
  },
  {
    menu : "About Us",
    path : "#about",
  },
  {
    menu : "Our services",
    path : "#ourservices",
  },
  {
    menu : "Find doctors",
    path : "#doctors",
  },
  {
    menu : "Contact",
    path : "#contact",
  },
] 

const setIcon = {
  size: 25,
  className: "lg:hidden z-20 relative",
  onClick: handleToggle,
}

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

    <nav className={(showNav ? "translate-x-0 max-lg:bg-primary" 
    : "max-lg:-translate-x-full") + " smooth flex gap-8 max-xl:gap-4 items-center max-lg:fixed max-lg:flex-col top-0 right-0 max-lg:z-10 max-lg:w-full max-lg:h-full max-lg:justify-center"} 
    onClick={handleToggle}>
    
    {menus.map((item, i) => <Link href={item.path} scroll={false} className="hover:text-slate-400 smooth text-[18px] font-light" key={i}>{item.menu}</Link>)}
    <Login style={"lg:hidden items-center gap-8 flex"}/>
    </nav>
    

    <div>
    <Login style={"lg:flex items-center gap-8 hidden"}/>
    {showNav ? <GrClose {...setIcon} /> : <FaBars {...setIcon} />}
    </div>
    </header>
  )
}