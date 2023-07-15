import React from 'react'

export default function ContentInfo({title, info}) {
  return (
	<p className="p">
	<span className="font-semibold text-[1.1rem] md:text-3xl">{title} : </span>
	{info}
  </p>
  )
}
