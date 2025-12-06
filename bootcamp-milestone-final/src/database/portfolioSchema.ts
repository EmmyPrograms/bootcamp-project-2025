/*
 Establishes portfolio schema for portfolio page
 @author Amelia Harris
 @version 1.0
*/
import mongoose, { Schema } from "mongoose";

export type Portfolio = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const portfolioSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
});

const PortfolioModel =
  mongoose.models["projects"] ||
  mongoose.model<Portfolio>("projects", portfolioSchema);

export default PortfolioModel;

