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
      menu: "Berita",
      path: "/#berita",
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
      menu: "JISS Tactical",
      path: "/jiss-tactical",
    },
    {
      menu: "Kontak",
      path: "/#contact",
    },
  ];

  const setIcon = {
    size: 25,
    className: "mxl:hidden z-20 relative",
    onClick: handleToggle,
  };

  function handleToggle() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    document.body.classList = showNav
      ? "max-mxl:overflow-hidden"
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
              ? "translate-x-0 max-mxl:bg-primary bg-opacity-50"
              : "max-mxl:translate-x-full") +
            " smooth flex gap-8 max-mxl:gap-4 items-center max-mxl:fixed max-mxl:flex-col top-0 right-0 max-mxl:z-10 max-mxl:w-[60%] max-mxl:h-full max-mxl:pt-20"
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

        <div className="mxl:hidden items-center gap-8 block">
          {showNav ? <GrClose {...setIcon} /> : <FaBars {...setIcon} />}
        </div>
      </header>
      {children}
    </>
  );
}
