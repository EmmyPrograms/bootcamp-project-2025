/*
 Data for Portfolio components; consists of portfolio projects
 @author Amelia Harris
 @version v1.2
*/

export interface PersonalProject {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}
export const personalProjects: PersonalProject[] = [
  {
    image: "/Personal-Website.png",
    imageAlt: "Personal Website",
    title: "Personal Website",
    description:
      "A personal website with pages containing my about section, portfolio, blogs, resume, and contact information.",
  },
  {
    image: "/Bikejog.jpg",
    imageAlt: "BikeJog Mobile Application",
    title: "BikeJog Mobile Application",
    description:
      "An excersice based mobile application that would allow users to track routes that were biked or jogged and view stats based off routes.",
  },
];
