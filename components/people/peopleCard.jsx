import React from 'react'
import Image from 'next/image'

export default function PeopleCard({name, position, imageURL}) {
  return (
	<div className='h-fit p-2 border-[1px] grid place-items-center mr-2 rounded-md'>
	<Image
		src={`https:${imageURL}`}
		width={130}
		height={130}
		alt={name}
		className='w-[130px] h-[130px] object-cover rounded-md skeleton-bg'
	/>
	<p className='capitalize my-2 text-xl font-semibold'>{name}</p>
	<p className='uppercase'>{position}</p>
	</div>
  )
}
