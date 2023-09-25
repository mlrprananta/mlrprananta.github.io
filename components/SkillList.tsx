import Skill from "./Skill";

export default function SkillList({
  skills,
  textSize,
}: {
  skills: string[];
  textSize: "text-xs" | "text-sm";
}) {
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <span key={skill} className="inline-block">
            <Skill name={skill} textSize={textSize}></Skill>
            {index !== skills.length - 1 ? (
              <span className={`mx-2 ${textSize}`}>·</span>
            ) : (
              ""
            )}
          </span>
        );
      })}
    </>
  );
}
