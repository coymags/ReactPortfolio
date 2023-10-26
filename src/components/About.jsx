import React from 'react'

function About(){
  return (
    <section id='about' className='flex flex-col items-center justify-between w-[100%] h-screen bg-gray-500 bg-opacity-25'>
        <div className='flex flex-col items-center justify-end w-full h-[9rem] text-white text-[2rem]'>
            About Me
        </div>
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='bg-black w-[50%] h-[80%] rounded-lg bg-opacity-30 flex flex-col items-center justify-start p-3'>
                <div className=' bg-amber-100 w-[90%] h-fit rounded-lg p-2'>
                    <p>I'm a dedicated Full-Stack Developer with a passion for crafting seamless web experiences. With a solid foundation in HTML, CSS, and JavaScript, I bring web designs to life with responsive and user-friendly interfaces. I specialize in building dynamic web applications using React, ensuring interactive and engaging user interactions. Tailwind CSS is my go-to for creating modern and efficient designs that align with the latest design trends. When it comes to data management, I'm well-versed in PostgreSQL, ensuring that applications are both functional and performant. My commitment to clean code and attention to detail guarantees that every project I undertake meets the highest standards of quality and user satisfaction.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About