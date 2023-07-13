
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';


const iconSettings = {
    fontSize : 20,
    className : "p-[2px]"
}

export function NextArrow({onClick, className} ) {
    return (
      <div
        className={(className?.includes("slick-disabled") ? "arrow-disabled " : "") + "arrow arrow-right"}
        onClick={onClick}
      >
        <BsArrowRightShort {...iconSettings}/>
      </div>
    );
  }
  
  export function PrevArrow({onClick, className} ) {
    return (
      <div
        className={(className?.includes("slick-disabled") ? "arrow-disabled " : "") + "arrow arrow-left"}
        onClick={onClick}
      >
      <BsArrowLeftShort {...iconSettings}/>
      </div>
    );
  }