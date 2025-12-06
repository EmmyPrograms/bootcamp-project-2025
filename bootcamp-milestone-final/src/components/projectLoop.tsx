"use client";

import React from "react";
import PortfolioPreview from "./portfolio";
import type {Portfolio} from "@/database/portfolioSchema";

interface LoopProps {
  items: Portfolio[];
}

export default function ProjectLoop({ items }: LoopProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  if (!items || items.length === 0) {
    return <p>No projects to display.</p>;
  }

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrev() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }
  const currItem = items[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <PortfolioPreview
        key={currItem.title}
        image={currItem.image}
        imageAlt={currItem.imageAlt}
        title={currItem.title}
        description={currItem.description}
      />
      <div className="mt-4 space-x-4">
        <button onClick={handlePrev} className="btn-secondary">
          Previous
        </button>
        <span className="text-sm text-secondary">
          {currentIndex + 1} / {items.length}
        </span>
        <button onClick={handleNext} className="btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
}
