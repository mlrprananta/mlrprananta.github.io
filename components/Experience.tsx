import Pill from "./Pill";
import Position from "./Position";
import Subheader from "./Subheader";

export default function Experience() {
  return (
    <section id="experience" className="w-full p-6 mb-8 justify-center">
      <Subheader>Experience</Subheader>
      <div className="md:max-w-xl flex flex-col gap-8">
        <Position
          company="DPG Media"
          title="Java / Kotlin Developer"
          startDate="Nov 2023"
          endDate="Present"
          url="https://www.dpgmediagroup.com/nl-NL"
          skills={["Java", "Kotlin", "AWS"]}
        >
          <p className="my-2">
            DPG Media is the largest media company in the Netherlands. The DPG
            Selectives platform is a digital news delivery platform powering
            dozens of mobile applications and websites.
          </p>
        </Position>
        <Position
          company="Picnic Technologies"
          title="Java Developer"
          startDate="Jan 2022"
          endDate="Oct 2023"
          url="https://picnic.app/nl/"
          skills={[
            "Java 17",
            "Spring Webflux",
            "MongoDB",
            "Kubernetes",
            "Python",
          ]}
        >
          <p className="my-2">
            Picnic is a fast-growing tech company that has developed a
            mass-market home delivery system for fast moving consumer goods.
          </p>
          <ul className="list-outside list-disc">
            <li>
              Developed new features end-to-end for the customer-facing mobile
              app.
            </li>
            <li>
              Involved in all stages of the software development lifecycle and
              contributed to several impactful projects.
            </li>
            <li>
              Led the development of email-based 2FA from implementation to
              release, which decreased the egress of SMS messages and improved
              UX for customers.
            </li>
            <li>
              Steered the development and migration of a centralized service
              that facilitates the gifting of free articles to customers.
            </li>
          </ul>
        </Position>
        <Position
          company="Netcompany"
          title="Software Developer"
          startDate="Dec 2019"
          endDate="Dec 2021"
          url="https://netcompany.com/"
          skills={[
            "TypeScript",
            "React",
            "Node.js",
            "C#",
            ".NET Core",
            "Docker",
          ]}
        >
          <ul className="list-outside list-disc">
            <li>
              Designed and implemented frontend components and contributed to
              backend applications for ongoing projects commisioned by
              government organisations.
            </li>
            <li>
              Developed an internal tool to synchronize items between two issue
              tracking systems, reducing the manual workload for end-users.
            </li>
          </ul>
        </Position>
        <Position
          company="NLR"
          title="Intern"
          startDate="Apr 2018"
          endDate="Jul 2018"
          url="https://www.nlr.nl/"
          skills={["MATLAB"]}
        >
          <ul className="list-disc">
            <li>
              Developed an internal tool to visualize the load paths on wings
              from recorded flight and sensor data.
            </li>
          </ul>
        </Position>
      </div>
    </section>
  );
}
