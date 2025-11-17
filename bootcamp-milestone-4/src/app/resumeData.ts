/*
 Data for Resume components; consists of experience projects, skills, schools, and work experience
 @author Amelia Harris
 @version 1.2
*/

export interface Project {
  title: string;
  entry: string[];
}

export const projects: Project[] = [
  {
    title: "Mobile App Development (React Native, Firebase, Git/Github):",
    entry: [
      "Utilizing Agile project management, worked in a team to develop a fitness tracking app",
      "Specialized on navigation logic, database integration, and resolving Git Merge conflicts",
    ],
  },
  {
    title: "Personal Website (HTML, CSS):",
    entry: [
      "Utilizing Hack4Impact bootcamp, developed a personal websiteusing HTML and CSS",
    ],
  },
  {
    title: "RSA Lab (Python):",
    entry: [
      "Encrypted various phrases with the RSA encryption method. Additionally, using given keys, decrypted peers encrypted phrases",
      "Acquired hands-on experience with cryptography and websecurity principles",
    ],
  },
];

export interface Skill {
  title: string;
  entry: string;
}

export const skills: Skill[] = [
  {
    title: "Languages: ",
    entry: "C++, Java, JavaScript, Html, CSS,ARM, Python, LaTeX",
  },
  {
    title: "Technologies: ",
    entry:
      "React Native, Git, GitHub, Firebase, Realtime-Database, Visual Studio Code, Visual Studio(Community), JGrasp, PyCharm, ExpoGO, Figma",
  },
  {
    title: "Concepts: ",
    entry:
      "Dynamic Programming, Data Structures, Algorithms, Discrete Structures, Object-Oriented Design, Agile/SCRUM, Creative Problem Solving, Communication",
  },
];

export interface School {
  name: string;
  location: string;
  years: string;
  majorAmount: string;
  major: string;
  coursework: string;
}
export const schools: School[] = [
  {
    name: "Cal Poly",
    location: "San Luis Obispo, CA",
    years: "(2025-2027)",
    majorAmount: "Major",
    major: "B.S - Software Engineering",
    coursework: "Databases, Algorithms, Individual Software Design",
  },
  {
    name: "Sierra College",
    location: "Rocklin, CA",
    years: "(2022-2025)",
    majorAmount: "Major(s)",
    major: "A.S - Computer Science, Mathematics, Physics, Natural Science",
    coursework:
      " Discrete Structures, Object Orientated C++, Computer Architecture and Assembly Language, Differential Equations and Linear Algebra, Discrete Mathematics",
  },
];

export interface Work {
  title: string;
  employer: string;
  location: string;
  time: string;
  description: string;
}
export const jobs: Work[] = [
  {
    title: "Tutor/Pass Peer",
    employer: "Sierra College",
    location: "Rocklin, CA",
    time: "(Spring 2023- Summer 2025)",
    description:
      " Selected by faculty to tutor in Differential Equations, Linear Algebra, Calculus, and Physics. Conducted weekly sessions designed to reinforce problem-solving and conceptual understanding. Hosted lecture styled exam review sessions for groups of 30+ students. Developed strong communication and mentoring that enhance my collaboration in technical settings.",
  },
];
