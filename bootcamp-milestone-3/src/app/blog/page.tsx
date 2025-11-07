/*
 Displays a list of blogs. 
 @author Amelia Harris
 @version 2.0
*/

import BlogPreview from "@/components/blogPreview";
//import blogs from "@/app/blogData";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <div className=" flex flex-col items-center">
      <title>Blog</title>
      <h1>
        <u>Blogs</u>
      </h1>
      <div id="blog-content" className="gap-8 px-6 py-12 text-secondary">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogPreview
              key={blog._id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              date={blog.date}
              imageAlt={blog.imageAlt}
              slug={blog.slug}
            />
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}


