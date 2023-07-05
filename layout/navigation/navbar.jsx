import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import jissLogo from "../../components/assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function Navbar({ children }) {
  const [showNav, setShowNav] = useState(false);

  const menus = [
    {
      menu: "Beranda",
      path: "/",
    },
    {
      menu: "Layanan Kami",
      path: "/#layanan",
    },
    {
      menu: "Company Profile",
      path: "/company-profile",
    },
    {
      menu: "Mitra",
      path: "/mitra",
    },
    {
      menu: "Struktur Organisasi",
      path: "/struktur-organisasi",
    },
    {
      menu: "Kontak",
      path: "/#contact",
    },
  ];

  const setIcon = {
    size: 25,
    className: "lg:hidden z-20 relative",
    onClick: handleToggle,
  };

  function handleToggle() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    document.body.classList = showNav
      ? "max-lg:overflow-hidden"
      : "overflow-unset";
  }, [showNav]);

  return (
    <>
      <header className="flex-center gap-8 justify-between mt-5 mb-10">
        <Link href='/' className="flex items-center gap-2">
          <Image
            src={jissLogo}
            width={70}
            height={70}
            alt="Mediacare Logo"
            priority={true}
          />
          <p className="text-[2.5rem] uppercase">Jiss</p>
        </Link>

        <nav
          className={
            (showNav
              ? "translate-x-0 max-lg:bg-primary bg-opacity-50"
              : "max-lg:translate-x-full") +
            " smooth flex gap-8 max-xl:gap-4 items-center max-lg:fixed max-lg:flex-col top-0 right-0 max-lg:z-10 max-lg:w-[60%] max-lg:h-full max-lg:pt-20"
          }
          onClick={handleToggle}
        >
          {menus.map((item, i) => (
            <Link
              href={item.path}
              scroll={false}
              className="hover:text-slate-400 smooth text-[18px] font-light  max-lg:w-full max-lg:px-6 max-lg:py-2"
              key={i}
            >
              {item.menu}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden items-center gap-8 block">
          {showNav ? <GrClose {...setIcon} /> : <FaBars {...setIcon} />}
        </div>
      </header>
      {children}
    </>
  );
}
