

const Home = () => {
    return (
        <div className='mt-32 bg-bgShade p-20' id="home">
            <div className='lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5 animate-text-reveal '>                             
                <div className='md:w-1/2 w-full mt-5'>
                    <h3 className='text-2xl text-headingColor font-semibold mb-5'>
                        Hey, Iam <span className=' text-3xl text-primary capitalize hover:text-5xl duration-300 '>Shahzaib</span>
                    </h3>
                    <h1 className='md:text-5xl text-4xl font-bold text-headingColor leading-tight md:leading-[56px] mb-5'>
                        Computer Systems Engineering Student <span className='text-primary'> and </span> Development Enthuasiast</h1>
                    <p className='text-body text-2xl leading-9 mb-8'>I am passionately seeking opportunities to further my personal and professional growth.
                        Eager to leverage my academic foundation and enthusiastic approach</p>
                    <a href="../assets/Shahzaib_Resume.pdf" className='outlineBtn' download="Shahzaib_Resume.pdf">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Home
