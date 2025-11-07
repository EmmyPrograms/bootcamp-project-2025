/*
    based on Blog data, generates a blog section component in the blog page
    @author Amelia Harris
    @version 2.0
*/




import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/app/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <Link href={`/${props.slug}`} className="hover:secondary/60 transition-colors duration-200">
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
          className="rounded-3xl animate-floatUp shadow-lg left-0"
        ></Image>
      </Link>
      
      <div className="panel transform -translate-y-12">
        <h3 className="text-xl font-bold leading-normal"> {props.title} </h3>
        <p>{props.description}</p>
        <p><i>{props.date}</i></p>
      </div>
    </div>
  );
}
