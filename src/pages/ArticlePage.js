import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articleContent.find(article => article.name == name)
    const recommendations = articleContent.filter(article => article.name != name)

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);

        }
        fetchData();
    })

    if (!article) {
        return (
            <NotFoundPage />
        )
    }

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((p, k) => (<p key={k}>{p}</p>))}
            <em>Upvotes: {articleInfo.upvotes}</em>
            <h2>Recommendations:</h2>
            <ArticlesList articles={recommendations} />
        </>
    );
}

export default ArticlePage;