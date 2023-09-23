import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex gap-4 my-4">
      <a
        className="text-white/70 transition hover:text-blue-600"
        href="https://www.linkedin.com/in/mlrprananta/"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        className="text-white/70 transition hover:text-blue-600"
        href="https://github.com/mlrprananta"
      >
        <FaGithub size={24} />
      </a>
    </div>
  );
}
