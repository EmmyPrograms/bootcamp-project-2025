
/*
    based on blog comments data, generates a comment section in the blog component
    @author Amelia Harris
    @version 1.0
*/

import {IComment} from "@/database/blogSchema";

interface CommentProps  {
    comment: IComment;
}



function parseCommentTime(time: Date){
	return time.toDateString();
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;