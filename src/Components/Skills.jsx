const skills = [
    {id: 1, name: "Web Developer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
    {id: 2, name: "Front-End Developer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
    {id: 3, name: "React JS Developer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
    {id: 4, name: "Tailwind CSS Developer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
]

const Skills = () => {
    return (
        <div className="lg:mx-12 mx-4 my-40 p-15" id="skills">
            <div className="text-headingColor mb-20">
                <h2 className="md:text-5xl text-4xl text-center font-bold">My Expertise</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {
                    skills.map(skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer 
                    hover:-translate-y-4 transition-all duration-300 border border-b-primary">
                        <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div> )
                }
            </div>
        </div>
    )
}

export default Skills
