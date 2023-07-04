import React from 'react'
import Image from 'next/image'
import brosur from '../assets/brosur.jpeg'

const Banner = () => {
  return (
	<div >
	<h2 className='h2 capitalize mb-6'>Brosur</h2>
	<div className='flex flex-wrap gap-4'>
		<Image 
			src={brosur}
			alt='brosur'
			width={400}
			height={400}
		/>
	</div>
	</div>
  )
}

export default Banner