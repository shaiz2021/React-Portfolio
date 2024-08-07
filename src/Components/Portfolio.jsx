
import { IoLogoGithub } from "react-icons/io5";

const Portfolio = () => {
    const projects = [
        {
            id: 1, name: "Nike Landing Page", description: "Single Landing Page using HTML & CSS", image: "/src/assets/Screenshot(51).png", link: "https://pagefornike.netlify.app/"
        },
        {
            id: 2, name: "Spotify Clone", description: "One Page Clone using HTML & CSS", image: "/src/assets/Screenshot(52).png", link: "https://thecloneofspotify.netlify.app/"
        },
        {
            id: 3, name: "Ripper Enterprises", description: "E-Commerce Website using HTML & CSS", image: "/src/assets/Screenshot(54).png", link: "https://ripperenterprises.netlify.app/"
        },
        {
            id: 4, name: "Nexcent Website", description: "Nexcent Website using React Js and Tailwind CSS", image: "/src/assets/Screenshot(55).png", link: "https://github.com/shaiz2021/NEXCENT_REACT-TAILWIND_CSS_PROJECT"
        },
        {
            id: 5, name: "Portfolio Project", description: "My previous Portfolio using HTML & CSS", image: "/src/assets/image.png", link: "https://shahzaibkhanportfolio.netlify.app/"
        }
    ]
    return (
        <div className="lg:mx-12 mx-4 my-32" id="projects">
            <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center">
                <div className="text-headingColor">
                    <h2 className="md:text-5xl text-4xl font-bold">Projects</h2>
                </div>
                <div>
                    <button className="outlineBtn py-4 "><IoLogoGithub className="w-6 h-6 inline-block mr-2"/>Visit my Github</button>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {
                    projects.map(project => 
                    <div key={project.id} className="shadow-xl rounded-2xl cursor-pointer bg-bgShade">
                        <img src={project.image} alt="portfolioimages" className="hover:scale-90 transition-all duration-300 rounded-2xl" />
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-2 text-headingColor">{project.name}</h3>
                            <p className="text-body mb-4">{project.description}</p>
                            <a href={project.link} className="font-bold underline underline-offset-8 hover:text-primary "> View <img src="/src/assets/Vector.png" alt="vector" className="w-3 inline-block ml-3" /> </a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Portfolio
