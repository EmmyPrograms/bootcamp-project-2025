var Blogs = [
    {
        title: "First Blog Post",
        date: "10/10/2025",
        description: "This is my first blog post",
        image: "nothing rn",
        imageAlt: "No image yet",
        slug: "slug",
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
var blogContainer = document.getElementById("blog");
Blogs.forEach(function (blog) {
    var div = document.createElement("div");
    div.className = "blog-post";
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var h1 = document.createElement("h1");
    h1.textContent = blog.title;
    var p = document.createElement("p");
    p.textContent = blog.description;
    div.appendChild(image);
    div.appendChild(h1);
    div.appendChild(p);
    if (blogContainer)
        blogContainer.appendChild(div);
});
