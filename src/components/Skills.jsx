import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import python from '../images/python.png'
import jslogo from '../images/jslogo.webp'
import nodejs from '../images/nodejs.png'
import postgresql from '../images/postgresql.png'

function Skills() {
  return (
    <section id='skills' className='flex flex-col items-center justify-between w-[100%] h-screen bg-gray-300 bg-opacity-25 gap-5'>
        <div className='flex flex-col items-center justify-end w-full h-[9rem] text-white text-[2rem]'>
            Skills
        </div>
        <div className='flex flex-col w-full h-screen gap-5'>
            <div className='flex items-center justify-center w-full gap-20 h-fit'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-white text-[1.5rem]'>Frontend Development</h1>
                    <div className='flex items-center justify-center'>
                        <img src={html} alt="html" className='w-[10rem] h-[8rem] opacity-80'/>
                        <img src={css} alt="css" className='w-[8rem] h-[8rem] opacity-80'/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 pb-3'>
                    <h1 className='text-white text-[1.5rem]'>Frameworks</h1>
                    <img src={react} alt="react" className='w-[100px] h-[100px] opacity-80'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 pb-3'>
                    <h1 className='text-white text-[1.5rem]'>Styles</h1>
                    <img src={tailwind} alt="tailwind" className='w-[100px] h-[100px] opacity-80'/>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-5'>
                <h1 className='text-white text-[1.5rem]'>Backend Development</h1>
                <div className='flex gap-5'>
                    <img src={python} alt="python" className='w-[100px] h-[100px] opacity-80'/> 
                    <img src={jslogo} alt="javascript" className='w-[100px] h-[100px] opacity-80'/> 
                    <img src={nodejs} alt="nodejs" className='w-[100px] h-[100px] opacity-80'/> 
                </div>

            </div>
            <div className='flex flex-col items-center justify-center w-full gap-3 h-fit'>
                <h1 className='text-white text-[1.5rem]'>Database</h1>
                <img src={postgresql} alt="postgresql" className='w-[170px] h-[120px] opacity-80'/> 
            </div>
        </div>

    </section>
  )
}

export default Skills