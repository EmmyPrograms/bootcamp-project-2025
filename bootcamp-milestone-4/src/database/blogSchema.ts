/*
 Establishes blog schema for blog page (and later dynamic api)
 @author Amelia Harris
 @version 1.0
*/

import mongoose, { Schema } from "mongoose";

export interface IComment {
		user: string;
		comment: string;
		time: Date;
}

export interface Blog{
  title: string;
  date: Date;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content: string;
  comments: IComment[]; // array for comments
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  content: { type: String, required: true },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
