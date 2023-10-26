import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaPhoneSquareAlt, FaMapMarkerAlt, FaEnvelopeSquare, FaTelegramPlane } from 'react-icons/fa'


function ContactMe() {

    const form = useRef()

    async function handleSubmit(e) {
        
        e.preventDefault()
        
        try {
            const msgForm = await emailjs.sendForm('service_agrm5di', 'template_8nqmcql', form.current, 'rxgcFa4BNt-ZDHIOh')
            console.log(msgForm)
        } catch (error) {
            console.error(error.message)
        }

        e.target.reset()
    }


  return (
    <section id='contact' className='flex flex-col items-center w-[100%] h-screen bg-white bg-opacity-40'>
        <div className='flex flex-col items-center justify-end w-full h-[9rem] text-white text-[2rem]'>
            Contact Me
        </div>
        <div className='flex w-full h-[100%]'> 
            <div className='flex flex-col w-[50%] h[100%] items-center justify-center p-2 gap-10'>
                <div className='flex items-center justify-center'>
                    <FaPhoneSquareAlt size={40} />
                    <div>
                        <h1 className='text-black hover:text-white'>Call Me</h1>
                        <h1 className='text-black hover:text-white'>(+63) 915-511-5263</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <FaEnvelopeSquare size={40} />
                    <div>
                        <h1 className='text-black hover:text-white'>Email</h1>
                        <h1 className='text-black hover:text-white'>rmcocoy@gmail.com</h1>
                    </div>
                </div>
                <div className='flex justify-center first-letter:items-center'>
                    <FaMapMarkerAlt size={40} />
                    <div>
                        <h1 className='text-black hover:text-white'>Location</h1>
                        <h1 className='text-black hover:text-white'>Iligan City, Philippines</h1>    
                    </div>
                </div>
            </div>
            <div className='flex w-[50%] items-center'>
                <form ref={form} onSubmit={handleSubmit} className='w-[70%]'>
                    <div className='flex flex-col justify-center gap-2 '>
                        <div className='flex flex-col p-2 bg-gray-300 rounded-lg'>
                            <label htmlFor="">Name</label>
                            <input type="text" name='fullname' required className='p-2'/>
                        </div>
                        <div className='flex flex-col p-2 bg-gray-300 rounded-lg'>
                            <label htmlFor="">Email</label>
                            <input type="text" name='email' required className='p-2'/>
                        </div>
                        <div className='flex flex-col p-2 bg-gray-300 rounded-lg'>
                            <label htmlFor="">Subject</label>
                            <input type="text" name='subject' required className='p-2'/>
                        </div>
                        <div className='flex flex-col p-2 bg-gray-300 rounded-lg'>
                            <label htmlFor="">Message</label>
                            <textarea name="message" cols="30" rows="10"></textarea>
                        </div>
                        <div className='flex flex-col items-center justify-center h-[3rem]'>
                            <button type='submit' className='flex items-center justify-center w-[10rem] h-[3rem] bg-blue-950 rounded-lg hover:bg-orange-700 gap-2'>Send Message <FaTelegramPlane size={25}/></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactMe