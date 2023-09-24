import profilePicture from "@/public/pfp.jpeg";
import Image from "next/image";
import Subheader from "./Subheader";
import Socials from "./Socials";

export default function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:justify-normal pt-20 flex flex-col p-6 justify-center">
      <div className="flex items-center gap-x-4 mb-4 justify-center lg:justify-normal">
        <Image
          className="rounded-full h-24 w-24 md:h-24 md:w-24"
          src={profilePicture}
          alt="Itsa me"
        ></Image>
        <div className="flex flex-col justify-center">
          <h1 className="tracking-tight text-xl text-white/90 sm:text-4xl font-extrabold">
            Luke Prananta
          </h1>
          <h2 className="tracking-tight text-base text-white/90 sm:text-xl">
            Software Engineer
          </h2>
        </div>
      </div>
      <Subheader>About Me</Subheader>
      <p className="text-sm leading-relaxed tracking-normal font-normal text-white/70 my-2 md:max-w-xl">
        Passionate software engineer specialized in backend development, with
        experience in e-commerce and customer-facing applications.
      </p>
      <p className="text-sm leading-relaxed tracking-normal font-normal text-white/70 my-2 md:max-w-xl">
        Having dabbled in data science and speech technology during my studies,
        I am now fully commited to the art and science of software engineering.
      </p>
      <Socials></Socials>
    </header>
  );
}
