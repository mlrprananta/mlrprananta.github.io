import Paragraph from "./Paragraph";
import Project from "./Project";
import Subheader from "./Subheader";

export default function Projects() {
  return (
    <section id="projects" className="w-full p-6 mb-8">
      <Subheader>Projects</Subheader>
      <div className="md:max-w-xl flex flex-col gap-8">
        <Project
          title="mlrprananta.github.io"
          url="https://github.com/mlrprananta/mlrprananta.github.io"
          skills={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
        >
          <Paragraph>
            My latest personal website built with Next.js and Tailwind CSS. This
            little project was a good way to refresh my web development
            fundamentals, and it also gave me the opportunity to learn more
            about the latest frontend frameworks.
          </Paragraph>
        </Project>
      </div>
    </section>
  );
}
