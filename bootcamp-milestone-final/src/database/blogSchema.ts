/*
 Establishes blog schema for blog page (and later dynamic api)
 @author Amelia Harris
 @version 1.2
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
  imageSecondary: string;
  imageAlt: string;
  slug: string;
  content: string;
  comments: IComment[];
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true},
  imageSecondary: { type: String, required: true},
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  content: { type: String, required: true },
  comments: { type: [commentSchema], required: false, default: [] },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
