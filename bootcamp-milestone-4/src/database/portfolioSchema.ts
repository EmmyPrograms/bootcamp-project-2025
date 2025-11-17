/*
 Establishes portfolio schema for portfolio page
 @author Amelia Harris
 @version 1.0
*/

import mongoose, { Schema } from "mongoose";

type Portfolio = {
  title: string;
  description: string;
  image: string;
  image_alt: string;
};

const portfolioSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
});
const Portfolio =
  mongoose.models["projects"] || mongoose.model("projects", portfolioSchema);
export default Portfolio;
