import React from 'react'

export default function ContentInfoLink({title, info, link}) {
  return (
	<p className="p">
	<span className="font-semibold text-[1.1rem] md:text-3xl">{title} : </span>
	<a className='underline' href={link}>{info}</a>
  </p>
  )
}
