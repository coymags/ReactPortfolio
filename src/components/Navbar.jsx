import {Link} from 'react-scroll'

function Navbar() {

    return(
        <>
            <div className="flex fixed top-0 justify-between items-center p-4 w-full h-[4rem] bg-black bg-opacity-20 ">            
                <ul className='flex items-center justify-center w-full gap-5 font-serif text-white'>
                    <li  className='flex item-center justify-center  w-[5%] h-[2rem] hover:text-orange-700 hover:cursor-pointer text-lg'>
                        <Link to="home" spy={true} smooth={true}  duration={500}>Home</Link>
                    </li>
                    <li className='flex item-center justify-center  w-[5%] h-[2rem] hover:text-orange-700 hover:cursor-pointer text-lg' >
                        <Link to="about" spy={true} smooth={true}  duration={500}>About</Link>
                    </li>
                    <li className='flex item-center justify-center  w-[5%] h-[2rem] hover:text-orange-700 hover:cursor-pointer text-lg' >
                        <Link to="skills" spy={true} smooth={true}  duration={500}>Skills</Link>
                    </li>
                    <li className='flex item-center justify-center  w-[10%] h-[2rem] hover:text-orange-700 hover:cursor-pointer text-lg'>
                        <Link to="contact" spy={true} smooth={true}  duration={500}>Contact Me</Link>
                    </li>
                </ul> 
            </div>
        </>
    )
}

export default Navbar;