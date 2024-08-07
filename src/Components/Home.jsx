import { motion } from "framer-motion"


const Home = () => {
    return (
        <div className='mt-32 bg-bgShade p-16' id="home">
            <div className='lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5 '>
                <div className='md:w-1/2 sm:w-4/5 w-full'>
                    <motion.h3 className='text-2xl text-headingColor font-semibold mb-5'
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate", delay: 0.2 }}
                    >
                        Hey, Iam <span className=' text-3xl text-primary capitalize hover:text-5xl duration-300'>Shahzaib</span>
                    </motion.h3>
                    <motion.h1 className='md:text-5xl text-4xl font-bold text-headingColor leading-tight md:leading-[56px] mb-5'
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "anticipate", delay: 0.4 }}>
                        Computer Systems Engineering Student <span className='text-primary'> and </span> Development Enthuasiast</motion.h1>
                    <motion.p className='text-body text-2xl leading-9 mb-8'
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "anticipate", delay: 0.6 }}>I am passionately seeking opportunities to further my personal and professional growth.
                        Eager to leverage my academic foundation and enthusiastic approach</motion.p>
                    <motion.a href="../assets/Shahzaib_Resume.pdf" className='outlineBtn'
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate", delay: 0.8 }} download="Shahzaib_Resume.pdf">Resume</motion.a>
                </div>
            </div>
        </div>
    )
}

export default Home
