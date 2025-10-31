/*
  Displays Resume; consistent of Experience, Skills, Education, Work, and Hobbies
  @author Amelia Harris
  @version 2.0
*/


import ProjectPreview from "@/components/project";
import SkillPreview from "@/components/skill";
import SchoolPreview from "@/components/school";
import WorkPreview from "@/components/work";
import { projects, skills, schools, jobs } from "@/app/resumeData";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center">
      <title>Resume</title>
      <h1>
        <u>Resume</u>
      </h1>
      <div className="flex flex-col items-center panel">
        <section className="section">
          <h3>Experience</h3>
          <div className="entry">
            {projects.map((project) => (
              <ProjectPreview key = {project.title} title={project.title} entry={project.entry} />
            ))}
          </div>
        </section>
        <section className="section">
          <h3>Skills</h3>
          <div className="entry">
            <ul id="skills-list">
              {skills.map((skill) => (
                <SkillPreview  key = {skill.title} title={skill.title} entry={skill.entry} />
              ))}
            </ul>
          </div>
        </section>
        <section className="section">
          <h3>Education</h3>
          <div className="entry">
            <ul id="education">
              {schools.map((school) => (
                <SchoolPreview
                  key = {school.name}
                  name={school.name}
                  location={school.location}
                  years={school.years}
                  majorAmount={school.majorAmount}
                  major={school.major}
                  coursework={school.coursework}
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="section">
          <h3>Work</h3>
          <div className="entry">
            <ul>
              {jobs.map((job) => (
                <WorkPreview
                  key = {job.employer}
                  title={job.title}
                  employer={job.employer}
                  location={job.location}
                  time={job.time}
                  description={job.description}
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="section">
          <h3>Hobbies</h3>
            <ul>
              <li>
                Outside of class, I enjoy thrifting, experimenting with makeup,
                drinking various teas, playing videogames, hiking, and going out
                with friends.
              </li>
            </ul>
        </section>
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
