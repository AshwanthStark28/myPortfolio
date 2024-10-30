import websiteImg1 from '../assets/udemy-clone.jpg';
import websiteImg2 from '../assets/greenden.jpg';
import websiteImg3 from '../assets/weather.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Udemy clone webpage built using HTML and CSS',
                link: 'https://ashwanthstark28.github.io/UDemy/'
            },
            {
                image: websiteImg2,
                description: 'Greenden website built using HTML, Tailwind CSS and Javascript ',
                link: 'https://ashwanthstark28.github.io/Greenden-clone/'
            },
            {
                image: websiteImg3,
                description: 'A Weather app built using react and API',
                link: 'https://weather-app-two-orcin-63.vercel.app/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[250px] w-[500px]' alt='project-img' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}