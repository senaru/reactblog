import React from 'react';

const UpvotesSection = ({ upvotes, articleName, setArticleInfo }) => {

    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'POST'
        })
        const body = await result.json();
        setArticleInfo(body);
    }

    return (
        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}>Upvote</button>
            <em>Upvotes: {upvotes}</em>
        </div>
    )

};

export default UpvotesSection;