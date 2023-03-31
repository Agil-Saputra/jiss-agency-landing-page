import React from 'react'

export default function button1({title, href}) {
  return (
    <a href={href} className='max-sm:w-full smooth text-center md:text-[18px] bg-primary text-white font-bold px-6 py-2 rounded-3xl shadow-lg shadow-primaryShadow hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary'>{title}</a>
  )
}
