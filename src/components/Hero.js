import HeroImg from '../assets/hero.png';
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Front-end developer',
        social: {
            vercel: 'https://vercel.com/ashwanths-projects-2f771d8d',
            GitHub: 'https://github.com/AshwanthStark28',
            linkedin: 'https://www.linkedin.com/in/ashwanth-t-s-111269323/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>TS</span> Ashwanthraj
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.vercel} className='pr-5 hover:text-white'><IoLogoVercel size={40} /></a>
                <a href={config.social.GitHub} className='pr-5 hover:text-white'><FaGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}