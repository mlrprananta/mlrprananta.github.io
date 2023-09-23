import Position from "./Position";

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex w-full px-6 md:px-0 mb-8 justify-center"
    >
      <div className="md:max-w-xl">
        <h1 className="text-xl font-semibold">Experience</h1>
        {/* <Position
        company="DPG Media"
        title="Java / Kotlin Developer"
        startDate="Nov 2023"
        endDate="Present"
      >
        Developed new features for the DPG Selectives platform, a digital news delivery platform powering dozens of mobile applications and websites.
      </Position> */}
        <Position
          company="Picnic Technologies"
          title="Java Developer"
          startDate="Jan 2022"
          endDate="Present"
          url="https://picnic.app/nl/"
        >
          Developed new features for the backend powering the customer-facing
          mobile app. Involved in all stages of the software development
          lifecycle and contributed to several impactful projects. Day-to-day
          responsibilities included the maintanenance, deployment and monitoring
          of the main backend application behind the mobile app.
        </Position>
        <Position
          company="Netcompany"
          title="Software Developer"
          startDate="Dec 2019"
          endDate="Dec 2021"
          url="https://netcompany.com/"
        >
          Designed and implemented frontend components and contributed to
          backend applications for on-going web application projects commisioned
          by government organisations. Developed internal tooling to synchronize
          items between two issue tracking systems, streamlining the workflow
          and reducing manual workload.
        </Position>
        <Position
          company="Netherlands Aerospace Center"
          title="Intern"
          startDate="Apr 2018"
          endDate="Jul 2018"
          url="https://www.nlr.nl/"
        >
          Developed internal tooling to visualize the load paths on wings from
          recorded flight and sensor data.
        </Position>
      </div>
    </div>
  );
}
