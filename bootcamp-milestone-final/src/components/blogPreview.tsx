/*
    based on Blog data, generates a blog section component in the blog page
    @author Amelia Harris
    @version 2.1
*/

import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/database/blogSchema";
import Scroll from "@/components/scroll";

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <Scroll>
        <Link href={`/blog/${props.slug}`}>
          <div className="imageHoverWrapper">
            <Image
              src={props.image}
              alt={props.imageAlt || "Blog Image"}
              width={800}
              height={800}
              className="rounded-3xl animate-floatUp shadow-lg left-0"
            />
            <div className="imageHoverOverlay" />
          </div>
        </Link>

        <div className="panel transform -translate-y-12">
          <h3 className="text-xl font-bold leading-normal"> {props.title} </h3>
          <p>{props.description}</p>
          <p>
            <i>{props.date.toDateString()}</i>
          </p>
        </div>
      </Scroll>
    </div>
  );
}
