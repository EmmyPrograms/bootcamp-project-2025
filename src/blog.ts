type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};
const Blogs: Blog[] = [
  {
    title: "JumpStart Program",
    date: "7/28/2025 - 8/30/2025",
    description:
      "A program offered to incoming transfers to curve the transfer shock phenomenon.",
    image: "./images/Jumpstart.jpg",
    imageAlt: "Jumpstart Program",
    slug: "jumpstart",
  },
  {
    title: "Technology Innovation Course",
    date: "1/16/2022-5/24/2022",
    description:
      "A technology driven course offered to juniors and seniors at Roseville Highschool, CA",
    image: "./images/Technology.jpg",
    imageAlt: "Technology Innovations Presentation",
    slug: "technology",
  },
];

const blogContainer = document.getElementById("blog-content");
console.log(blogContainer);
Blogs.forEach((blog) => {
  const div = document.createElement("div");
  div.className = "blog-post";
  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  image.width = 550;
  image.height = 300;
  const h2 = document.createElement("h2");
  const a = document.createElement("a");
  a.textContent = blog.title;
  a.href = `./blogs/${blog.slug}.html`;
  h2.appendChild(a);
  const h4 = document.createElement("h4");
  h4.textContent = blog.date;
  const p = document.createElement("p");
  p.textContent = blog.description;
  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(h4);
  div.appendChild(p);
  if (blogContainer) blogContainer.appendChild(div);
});
