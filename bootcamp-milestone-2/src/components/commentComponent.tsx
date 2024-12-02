import React from 'react';
import { IComment } from "@/database/blogSchema";

type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date){

    return time.toDateString();
}

export default function Comment({comment}: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.content}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    )
}