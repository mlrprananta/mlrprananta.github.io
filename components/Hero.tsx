import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
    return (<div className="flex flex-col w-full min-h-screen p-12 md:justify-center">
        <div className=''>
            <div className='flex gap-x-4 my-2'>
                <img className='aspect-square rounded-full h-24' src="/pfp.jpeg" alt=""></img>
                <div className='flex flex-col justify-center'>
                    <h1 className="text-2xl md:text-4xl font-semibold">Luke Prananta</h1>
                    <h2 className="text-lg md:text-xl ">Software Engineer</h2>
                </div>
            </div>

            <p className="text-sm text-white/50 py-2 md:max-w-xl">
                Passionate software engineer specialized in backend development, with experience in e-commerce and consumer-facing applications.
            </p>
            <p className="text-sm text-white/50 py-2 md:max-w-xl">
                Having dabbled in data science and speech technology during my studies, I am now fully commited to the art and science of software engineering.
            </p>
            <div className='flex gap-2 my-2'>
                <a href='https://www.linkedin.com/in/mlrprananta/'><FaLinkedin size={24}/></a>
                <a href='https://github.com/mlrprananta'><FaGithub size={24} /></a>
            </div>

        </div>
        <div className="absolute w-full bottom-8 left-0 flex justify-center">
            <a href='#experience' className='animate-bounce border border-white/50 rounded-full p-2'>
                <FaArrowDown></FaArrowDown>
            </a>
        </div>
    </div>)
}