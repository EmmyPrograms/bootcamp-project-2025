/*
    based on blog comments data, generates a comment section in the blog component
    @author Amelia Harris
    @version 1.0
*/

import React from "react";
import { IComment } from "@/database/blogSchema";

interface CommentProps {
  comment: IComment;
}

function Comment({ comment}: CommentProps) {

  function parseCommentTime(time: Date) {
    const d = time instanceof Date ? time : new Date(time);
    return isNaN(d.getTime()) ? "Unknown date" : d.toDateString();
  }
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
