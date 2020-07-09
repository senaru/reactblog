import React from 'react';
import articleContent from './article-content';
import articlesList from '../components/ArticlesList'
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name == name)
    const recommendations = articleContent.filter(article => article.name != name)

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
            <h2>Recommendations:</h2>
            <ArticlesList articles={recommendations} />
        </>
    );
}

export default ArticlePage;