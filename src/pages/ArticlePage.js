import React from 'react';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name == name)

    if (!article) {
        return (
            <h1>
                Article Does not exist!
            </h1>
        )
    }

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((p, k) => (<p key={k}>{p}</p>))}
        </>
    );
}

export default ArticlePage;