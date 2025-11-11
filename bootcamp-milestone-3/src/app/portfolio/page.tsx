/*
 Displays Portfolio; consistent of two projects : personal blog and bikejog
 @author Amelia Harris
 @version 3.0
*/

import PortfolioPreview from "@/components/portfolio";
//import { personalProjects } from "@/app/portfolioData";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";

async function getPortfolio() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Portfolio.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
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
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <PortfolioPreview
              key={project.title}
              image={project.image}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
