/*
 Displays Portfolio; consistent of two projects : personal blog and bikejog
 @author Amelia Harris
 @version 2.0
*/

import PortfolioPreview from "@/components/portfolio";
import { personalProjects } from "@/app/portfolioData";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col items-center gap-2">
      <title>Portfolio</title>
      <h1>
        <u>Portfolio</u>
      </h1>
      <div className="gap-10 px-8 py-12 text-secondary">
        {personalProjects.map((project) => (
          <PortfolioPreview
            key = {project.title}
            image={project.image}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
