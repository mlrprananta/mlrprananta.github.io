import Paragraph from "./Paragraph";
import Position from "./Position";
import Subheader from "./Subheader";

export default function Experience() {
  return (
    <section id="experience" className="w-full p-6">
      <Subheader>Experience</Subheader>
      <div className="md:max-w-xl flex flex-col gap-8">
        <Position
          company="DPG Media"
          title="Software Engineer"
          startDate="Nov 2023"
          endDate="Present"
          url="https://www.dpgmediagroup.com/nl-NL"
          skills={[
            "Java",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "MongoDB",
            "Docker",
            "AWS",
            "REST API",
            "CI/CD",
            "Microservices",
          ]}
        >
          <Paragraph>
            DPG Media is a leading media company operating in Belgium and the
            Netherlands, involved in newspapers, magazines, television, radio,
            and digital media.
          </Paragraph>
          <Paragraph>
            Enhanced and maintained a digital news platform that serves content
            to readers via web and mobile apps, and empowers eight different
            newspapers (such as de Volkskrant) with tools to create and manage
            content.
          </Paragraph>
        </Position>
        <Position
          company="Picnic Technologies"
          title="Software Engineer"
          startDate="Jan 2022"
          endDate="July 2023"
          url="https://picnic.app/nl/"
          skills={[
            "Java",
            "Spring Boot",
            "MongoDB",
            "Docker",
            "Kubernetes",
            "RabbitMQ",
            "Python",
            "REST API",
            "CI/CD",
          ]}
        >
          <Paragraph>
            Picnic is a fast-growing online grocery delivery scale-up seeking to
            revolutionize the way people buy groceries.
          </Paragraph>
          <Paragraph>
            Collaborated with a cross-functional team and various business
            stakeholders to develop new end-to-end features for the
            customer-facing mobile app.
          </Paragraph>
          {/* <p className="my-2">
           I led the development of email-based 2FA from implementation to
              release, which decreased the egress of SMS messages and improved
              UX for customers. 
          </p>
          <p className="my-2">
          I also steered the development and migration of a centralized service
              that facilitates the gifting of free articles to customers.
            </p> */}
        </Position>
        <Position
          company="Netcompany"
          title="Consultant"
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
          <Paragraph>
            Netcompany is a global IT consultancy that specializes in providing
            digital transformation and software development services.
          </Paragraph>
          <Paragraph>
            Contributed to both frontend and backend development for projects
            commisioned by the public sector.
          </Paragraph>
          {/* <p className="my-2">
          I also built an internal tool to synchronize items between two issue
              tracking systems, reducing the manual workload for end-users.
          </p> */}
        </Position>
        {/* <Position
          company="Netherlands Aerospace Centre"
          title="Intern"
          startDate="Apr 2018"
          endDate="Jul 2018"
          url="https://www.nlr.nl/"
          skills={["MATLAB"]}
        >
          <Paragraph>
            The Netherlands Aerospace Centre (NLR) is an independent aerospace
            research and technology organization.
          </Paragraph>
          <Paragraph>
            Developed a visualization tool for aeroelastic analysis.
          </Paragraph>
        </Position> */}
      </div>
    </section>
  );
}
