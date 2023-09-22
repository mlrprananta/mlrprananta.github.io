import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import profilePicture from "@/public/pfp.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col w-full min-h-screen p-12 justify-center md:items-center">
      <div className="grow"></div>
      <div className="">
        <div className="flex items-center gap-x-4 my-2">
          <Image
            className="rounded-full h-16 w-16 md:h-24 md:w-24"
            src={profilePicture}
            alt="Itsa me"
          ></Image>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
              Luke Prananta
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl ">Software Engineer</h2>
          </div>
        </div>

        <p className="text-xs md:text-sm text-white/50 py-2 md:max-w-xl">
          Passionate software engineer specialized in backend development, with
          experience in e-commerce and consumer-facing applications.
        </p>
        <p className="text-xs md:text-sm text-white/50 py-2 md:max-w-xl">
          Having dabbled in data science and speech technology during my
          studies, I am now fully commited to the art and science of software
          engineering.
        </p>
        <div className="flex gap-2 my-2">
          <a href="https://www.linkedin.com/in/mlrprananta/">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/mlrprananta">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="grow"></div>
      <div className="w-full flex justify-center my-2">
        <a
          href="#experience"
          className="border border-white/50 rounded-full p-2"
        >
          <FaArrowDown></FaArrowDown>
        </a>
      </div>
    </div>
  );
}
