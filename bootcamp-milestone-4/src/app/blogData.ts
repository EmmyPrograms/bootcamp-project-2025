/*
 Data for blog components; consists of title, date, description, image, image alt, and slug
 @author Amelia Harris
 @version 2.0
*/

export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "JumpStart Program",
    date: "7/28/2025 - 8/30/2025",
    description:
      "A program offered to incoming transfers to curve the transfer shock phenomenon.",
    image: "/Jumpstart.jpg",
    imageAlt: "Jumpstart Program",
    slug: "jumpstartBlog",
  },
  {
    title: "Technology Innovation Course",
    date: "1/16/2022 - 5/24/2022",
    description:
      "A technology driven course offered to juniors and seniors at Roseville Highschool, CA",
    image: "/Technology.jpg",
    imageAlt: "Technology Innovations Presentation",
    slug: "bikeJogBlog",
  },
];
export default blogs;
