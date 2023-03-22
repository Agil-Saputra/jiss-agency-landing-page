import Image from "next/image"
import bannerImage from "./assets/Dashboard - Medicare.webp"

export default function banner() {
  return (
    <Image 
        priority={true}
        src={bannerImage}
        width="100%" 
        alt="screen demo image"
        height="auto" 
    />

  )
}
