/*
    based on portfolio data, generates a portfolio project component
    @author Amelia Harris
    @version 1.1
*/

import React from "react";
import Image from "next/image";
import { PersonalProject } from "@/app/portfolioData";

export default function PortfolioPreview(props: PersonalProject) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3>
        <u> {props.title} </u>
      </h3>
      <Image
        src={props.image}
        alt={props.imageAlt || "Portfolio Image"}
        width={300}
        height={300}
        className="rounded-3xl animate-floatUp shadow-lg left-0 "
      ></Image>
      <p className="bg-white rounded-2xl top-50 right-40 text-secondary p-6 max-w-2xl ml-12 font‑mono animate-floatUp shadow-lg">
        {props.description}
      </p>
    </div>
  );
}
