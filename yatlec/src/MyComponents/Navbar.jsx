import React from 'react'
import yatleclogo from '../resources/yatlec.jpeg'

export default function Navbar() {
  return (
    <>
        <div className='flex items-center justify-around py-3 h-24 bg-white  w-full'>
            <section className='flex items-center gap-2'>
                    <img src={yatleclogo} alt="" className='w-10' />
                    <span className='font-semibold text-2xl'>Yatlec</span>
            </section>
            <ul className='flex gap-10 font-semibold'>
                <li className='hover:text-orange-700 hover:border-b-2'>Home</li>
                <li className='hover:text-orange-700 hover:border-b-2'>Who we are</li>
                <li className='hover:text-orange-700 hover:border-b-2'>Our Assemblies</li>
                <li className='hover:text-orange-700 hover:border-b-2'>Our Services</li>
                <li className='hover:text-orange-700 hover:border-b-2'>The Youth Church</li>
                <li className='hover:text-orange-700 hover:border-b-2'>Give</li>
            </ul>
            <section>
                <span className='btn bg-transparent border-2 p-3 font-semibold rounded-3xl'>Contact us</span>
            </section>
        </div>
    </>
  )
}
