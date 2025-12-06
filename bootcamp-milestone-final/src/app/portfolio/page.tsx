/*
 Displays Portfolio; consistent of two projects : personal blog and bikejog
 @author Amelia Harris
 @version 3.0
*/

import PortfolioPreview from "@/components/portfolio";
import connectDB from "@/database/db";
import PortfolioModel, {Portfolio} from "@/database/portfolioSchema";
import ProjectLoop from "@/components/projectLoop";

async function getPortfolio() {
  await connectDB();

  try {
    const projects = await PortfolioModel.find()
      .sort({ date: -1 })
      .lean()
      .exec();
    // Strip out Mongo fields like _id, __v so it's safe for Client Components
    return projects.map((proj: any) => {
      const { _id, __v, ...rest } = proj;
      return rest as Portfolio;
    });
  } catch (err) {
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getPortfolio();
  return (
    <div className="flex flex-col items-center gap-2">
      <title>Portfolio</title>
      <h1>
        <u>Portfolio</u>
      </h1>
      <div className="gap-10 px-8 py-12 text-secondary">
        <ProjectLoop items={projects} />
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
