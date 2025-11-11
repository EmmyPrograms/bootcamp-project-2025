/*
    based on passed in props, generates a blog component for a blog page
    @author Amelia Harris
    @version 1.1
*/

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/app/blogData";

export default function BlogPage(props: Blog) {
  return (
    <div>
      <Image
        src={props.image}
        alt={props.imageAlt}
        width={500}
        height={500}
        className="rounded-3xl animate-floatUp shadow-lg left-0"
      ></Image>
      <div className="panel transform -translate-y-12">
        <h3 className="text-xl font-medium leading-normal"> {props.title} </h3>
        <p>{props.description}</p>
        <p>
          <i>{props.date}</i>
        </p>
      </div>
      <Link
        href="/blog"
        className="text-sm font-medium leading-relaxed text-secondary flex flex-col items-center "
      >
        Back to Blog Page
      </Link>
    </div>
  );
}
