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
    title: "Second Blog Post",
    date: "XX/XX/XXXX",
    description: "N/A",
    image: "N/A",
    imageAlt: "N/A",
    slug: "slug",
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
  image.width = 650;
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
