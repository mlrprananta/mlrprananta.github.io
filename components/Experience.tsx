import Position from "./Position";

export default function Experience() {
  return (
    <div id="experience" className="w-full px-8 mb-8">
      <h1 className="text-2xl font-bold">Experience</h1>
      <Position
        company="DPG Media"
        title="Java / Kotlin Developer"
        startDate="November 2023"
        endDate="Now"
      >
        Individual contributor of the DPG Selectives platform.
      </Position>
      <Position
        company="Picnic Technologies"
        title="Java Developer"
        startDate="January 2022"
        endDate="July 2023"
      >
        Core contributor of backend services for the consumer-facing app.
      </Position>
      <Position
        company="Netcompany"
        title="Software Developer"
        startDate="December 2019"
        endDate="December 2021"
      >
        Individual contributor for various government projects.
      </Position>
      <Position
        company="Netherlands Aerospace Center"
        title="Intern"
        startDate="April 2018"
        endDate="July 2018"
      >
        {" "}
      </Position>
    </div>
  );
}
