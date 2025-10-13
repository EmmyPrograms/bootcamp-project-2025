var Blogs = [
    {
        title: "JumpStart Program",
        date: "10/12/2025",
        description: "A program offered to incoming transfers to curve the transfer shock phenomenon.",
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
var blogContainer = document.getElementById("blog-content");
console.log(blogContainer);
Blogs.forEach(function (blog) {
    var div = document.createElement("div");
    div.className = "blog-post";
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.width = 650;
    image.height = 300;
    var h1 = document.createElement("h1");
    var a = document.createElement("a");
    a.textContent = blog.title;
    a.href = "/blogs/".concat(blog.slug, ".html");
    h1.appendChild(a);
    var h2 = document.createElement("h2");
    h2.textContent = blog.date;
    var p = document.createElement("p");
    p.textContent = blog.description;
    div.appendChild(image);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(p);
    if (blogContainer)
        blogContainer.appendChild(div);
});
