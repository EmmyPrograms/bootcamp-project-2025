import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: Promise<{ slug: string }>;
};

export async function POST(req: NextRequest, { params }: IParams) {
  try {
    const { slug } = await params;

    await connectDB();

    const body = await req.json();
    if (!body || !body.user || !body.comment) {
      return NextResponse.json(
        { error: "Invalid comment data" },
        { status: 400 }
      );
    }

    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(),
    };

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: slug },
      { $push: { comments: newComment } },
      { new: true }
    );
    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    console.log(
      updatedBlog._id.toString()
    );
    console.log(

      updatedBlog.comments?.length
    );
    return NextResponse.json(newComment, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
