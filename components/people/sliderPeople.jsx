import React from 'react'
import Slider from 'react-slick'
import { PrevArrow, NextArrow } from '../general/arrows';
import PeopleCard from './peopleCard';

export default function SliderPeople({data}) {
	console.log(data.items)
	const settings = {
		dots: false,
		infinite: false,
		speed: 1000 ,
		slidesToShow: 3,
		slidesToScroll: 1,
		className: "mt-6",
		arrows: true,
		nextArrow : <NextArrow/>,
		prevArrow  : <PrevArrow/>,
		responsive: [
		 
		//   {
		// 	breakpoint: 883,
		// 	settings: {
		// 	  slidesToShow: 3,
		// 	  slidesToScroll: 2,
		// 	},
		//   },
		  {
			breakpoint: 712,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			},
		  },
		  {
			breakpoint: 430,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			},
		  },
		],
	  };
  return (
	<section className='my-10'>
		<h2 className='h2'>Struktur Organisasi</h2>
		<Slider {...settings}>
		{data.items.map(item => {
			const {nama, jabatan, fotoProfile} = item.fields
			return (
				<PeopleCard name={nama} position={jabatan} imageURL={fotoProfile.fields.file.url}/>
			)
		})}
		</Slider>
	</section>
  )
}
