import React from 'react'
import Slider from 'react-slick'
import { PrevArrow, NextArrow } from '../general/arrows';
import PeopleCard from './peopleCard';

export default function SliderPeople({dataOrang}) {
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
	<section className='my-16'>
		<h2 className='h2'>Struktur Organisasi</h2>
		<Slider {...settings}>
		{dataOrang.map(item => {
			const {nama, jabatan, fotoProfile} = item.fields
			return (
				<PeopleCard key={nama} name={nama} position={jabatan} imageURL={fotoProfile.fields.file.url}/>
			)
		})}
		</Slider>
	</section>
  )
}
