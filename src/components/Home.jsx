import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import fbmyself from '../images/fbmyself.jpg'

const pdfFile = 'http://localhost:5173/Resume.pdf'

function Home() {

  function downloadFile(url){
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName )
    document.body.appendChild(aTag)
    console.log(url)
    aTag.click()
    aTag.remove()
  }

  return (
    <section id='home' className='flex flex-col items-center justify-between w-[100%] h-screen'>
        <div className='flex gap-5 text-white'>
            <div className='flex flex-col items-center justify-center h-screen gap-10'>
            <a href="https://web.facebook.com/coy.maghanoy"><FaFacebookSquare size={30} className='hover:text-orange-700' /></a>
            <FaLinkedin size={30} className='hover:text-orange-700' />
            <a href="https://github.com/coymags"><FaGithub size={30} className='hover:text-orange-700' /></a>
            </div>
            <div className='flex flex-col items-center justify-center h-screen w-[30rem] gap-3'>
              <h1 className='text-[3rem]'>Hi! I'm Romeo</h1>
              <h3 className='text-[1.5rem]'>I'm a Full-Stack Developer</h3>
              <div className='text-white '>
                <button onClick={() => {downloadFile(pdfFile)}} className='flex flex-col items-center justify-center w-[10rem] h-[3rem] bg-gray-500 rounded hover:bg-orange-700'>Download CV <FaFileDownload /></button>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='bg-black w-[26rem] h-[26rem] flex items-center justify-center rounded-[50%] bg-opacity-25'>
                <div className='bg-black w-[18rem] h-[18rem] flex items-center justify-center rounded-[50%] bg-opacity-30'>
                  <img src={fbmyself} alt="Photo of me" className='w-[12rem] h-[12rem] rounded-[50%]'/>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Home
