import React from 'react';

const CommentsList = ({ comments }) => (
    <>
        <h3>Comments:</h3>
        {comments.map((c, k) => (
            <div className="comment" key={k} >
                <h4>{c.username}</h4>
                <p>{c.text}</p>
            </div>
        ))}
    </>
)

export default CommentsList;