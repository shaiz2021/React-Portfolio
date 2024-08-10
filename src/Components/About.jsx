const About = () => {
    const about = [
        {image: "/src/assets/ForCV.png"}
        ]
    return (
        <div className="lg-mx-12 mx-4" id='about'>
            <div className='flex flex-col sm:flex-row md:gap-12 gap-12 items-center justify-between py-20'>
                <div className='sm:w-1/2'>
                <img src={about.image} alt="aboutimage" className='w-90 sm:w-11/12 rounded-full' />
                </div>
                <div className="text-headingColor mb-20 sm:w-1/2 bg-bgShade rounded-lg shadow-xl p-7">
                    <h2 className="md:text-5xl text-4xl font-bold">About Me</h2><br />
                    <p className="text-xl mb-5">Im an enthusiastic and detail-orientedfinal-year student, 
                        I am passionately seeking opportunities to further my personal and professional growth. <br /><br />
                        Eager to leverage my academic foundation and enthusiastic approach, I am committed to contributing 
                        valuable skills and learning from diverse experiences as I embark on the next phase of my journey</p>
                </div>
            </div>
        </div>
    )
}

export default About
