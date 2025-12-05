"use client";

import React from "react";
import { IComment } from "@/database/blogSchema";
import Comment from "@/components/comment";

interface CommentSectionProps {
  comments: IComment[];
  slug: string;         
}

export default function CommentSection({
  comments: initialComments,
  slug,
}: CommentSectionProps) {

  const [showForm, setShowForm] = React.useState(false);
  //no need to constantly reload comments from server, so we manage them here
  const [comments, setComments] = React.useState<IComment[]>(initialComments ?? []);
  const [newComment, setNewComment] = React.useState<IComment>({
    user: "Anonymous",
    comment: "",
    time: new Date(),
  });

  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const toSend = {
      user: newComment.user.trim() === "" ? "Anonymous" : newComment.user,
      comment: newComment.comment,
    };

    const res = await fetch(`/api/blog/${slug}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toSend),
    });

    if (!res.ok) {
      console.error("Failed to post comment");
      return;
    }

    const created: IComment = await res.json();

    setComments((prev) => [...prev, created]);

    setNewComment((prev) => ({
      ...prev,
      comment: "",
    }));

    setShowForm(false);
  }

  return (
    <div className="left-0 panel mt-4">
      <h3 className="text-xl font-medium leading-normal">Comments:</h3>

      {comments.length === 0 && (
        <p className="text-sm text-gray-500 mb-3">No comments yet.</p>
      )}

      {comments.map((c, index) => (
        <Comment key={index} comment={c} />
      ))}

      <button
        onClick={toggleForm}
        className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
      >
        {showForm ? "Cancel" : "Post Comment"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          <textarea
            className="border rounded p-2 w-full"
            placeholder="Type your name (or leave blank for Anonymous)"
            value={newComment.user}
            onChange={(e) =>
              setNewComment((prev) => ({
                ...prev,
                user: e.target.value,
              }))
            }
          />

          <textarea
            className="border rounded p-2 w-full"
            placeholder="Write your comment:"
            value={newComment.comment}
            onChange={(e) =>
              setNewComment((prev) => ({
                ...prev,
                comment: e.target.value,
              }))
            }
            required
          />

          <button
            type="submit"
            className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
