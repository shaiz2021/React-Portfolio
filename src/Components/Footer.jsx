import { FaInstagram, FaLinkedin, FaWhatsapp, FaMailBulk } from 'react-icons/fa'
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {

    const logosfooter = [
        {
            id: "1", image: "/src/assets/Logo.png"
        }
    ]

    return (
        <div className='bg-bgShade py-28 md:px-12 px-4' id='contact'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20'>
                {
                    logosfooter.map(logos =>
                        <img key={logos.id} src={logos.image} alt="aboutimage" className='h-10 rounded-2xl' />
                    )}
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4'>Home</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4' >About Me</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4' >Skills</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4' >Projects</a>
                </div>
                <div className='flex items-center gap-4'>
                    <a href="https://github.com/shaiz2021"><IoLogoGithub className='cursor-pointer hover:-translate-y-3 transition-all duration-200 text-2xl hover:text-primary' /></a>
                    <a href="https://www.instagram.com/shahzaib_kaim_khani1/"><FaInstagram className='cursor-pointer hover:-translate-y-3 transition-all duration-200 text-2xl hover:text-primary' /></a>
                    <a href="https://www.linkedin.com/in/muhammad-shahzaib-khan-114b16235/"><FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-200 text-2xl hover:text-primary' /></a>
                </div>
            </div>
            <div className='flex flex-col md:items-center justify-between '>
                <a href="mailto:meersahab353@gmail.com" className='cursor-pointer hover:-translate-y-3 transition-all duration-200 text-xl flex gap-2 py-1'> <FaMailBulk className='text-2xl' /> meersahab353@gmail.com</a>
                <a href="https://wa.me/message/2UVCACRRDVHVF1" className='cursor-pointer hover:-translate-y-3 transition-all duration-200 text-xl flex gap-2 py-1'> <FaWhatsapp className='text-2xl' /> +92 3118167853</a>
            </div>
        </div>
    )
}

export default Footer
