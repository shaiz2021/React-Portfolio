import { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import { HiMenu } from "react-icons/hi";
import {Link} from 'react-scroll'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, [])
    return (
        <div>
            <header className='w-full fixed top-0 left-0 right-0 z-10' >
                <nav className= {`py-4 md:px-12 px-4 bg-white ${isSticky? "sticky top-0 left-0 right-0 bg-white": "" }`}>
                    <div className='flex items-center justify-between'>
                        <div className='cursor-pointer'>
                            <img src={logo} alt="" className='h-10 rounded-2xl' />
                        </div>
                        <div className='lg:flex items-center gap-5 hidden text-body'>
                            <Link to='home' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 text-xl' >Home</Link>
                            <Link to='skills' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer  hover:text-gray-400' >Skills</Link>
                            <Link to='about' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer  hover:text-gray-400' >About Me</Link>
                            <Link to='projects' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer  hover:text-gray-400' >Projects</Link>
                        </div>
                        <div className='lg:block hidden '>
                            <Link to='contact' spy={true} activeClass='active' smooth={true} offset={-100}><button className='outlineBtn'>Contact Me</button></Link>
                        </div>
                        <button onClick={toogleMenu} className='lg:hidden text-body text-3xl'>
                            <HiMenu />
                        </button>
                    </div>
                    {
                        isMenuOpen && <div className=' mt-5 p-4 bg-body rounded-lg text-white'>
                            <a href="home" className='block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 text-xl' >Home</a>
                            <a href="about" className='block py-2 px-4 cursor-pointer  hover:text-gray-400' >About Me</a>
                            <a href="skills" className='block py-2 px-4 cursor-pointer  hover:text-gray-400' >Skills</a>
                            <a href="projects" className='block py-2 px-4 cursor-pointer  hover:text-gray-400' >Projects</a>
                            <a href="contact" className='block py-2 px-4 cursor-pointer  hover:text-gray-400' >Contact</a>
                        </div>
                    }
                </nav>
            </header>
        </div>
    )
}

export default Navbar
