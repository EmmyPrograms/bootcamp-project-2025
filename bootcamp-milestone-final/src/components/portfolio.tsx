/*
    based on portfolio data, generates a portfolio project component
    @author Amelia Harris
    @version 1.1
*/

import React from "react";
import Image from "next/image";
import  type {Portfolio}  from "@/database/portfolioSchema";

export default function PortfolioPreview(props: Portfolio) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3>
        <u> {props.title} </u>
      </h3>
      <div className=" mx-auto">
        <Image
        src={props.image}
        alt={props.imageAlt || "Portfolio Image"}
        width={600}
        height={500}
        className="rounded-3xl animate-floatUp shadow-lg left-0 w-full h-auto"
        />
      </div>
      
      <p className="panel">
        {props.description}
      </p>
    </div>
  );
}
