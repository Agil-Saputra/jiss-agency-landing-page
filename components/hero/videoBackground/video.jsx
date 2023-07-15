import React, {useState} from "react";

export default function VideoBackground({videoSrc}) {

	// const [load, setLoad] = useState(true)∏

  return (
    <video className="absolute top-0 -z-10 w-full md:h-[600px] h-[450px] object-cover" autoPlay loop muted>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
