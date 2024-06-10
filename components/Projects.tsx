import Paragraph from "./Paragraph";
import Project from "./Project";
import Subheader from "./Subheader";

export default function Projects() {
  return (
    <section id="projects" className="w-full p-6 mb-8">
      <Subheader>Recent Projects</Subheader>
      <div className="md:max-w-xl flex flex-col gap-8">
        <Project
          title="mlrprananta.github.io"
          url="https://github.com/mlrprananta/mlrprananta.github.io"
          skills={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
        >
          <Paragraph>
            My latest personal website built with Next.js and Tailwind CSS that
            serves as a nice refresher for frontend web development.
          </Paragraph>
        </Project>
      </div>
    </section>
  );
}
