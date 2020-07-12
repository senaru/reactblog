import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import UpvotesSection from '../components/UpvotesSection';

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
            <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} />

            <h2>Recommendations:</h2>
            <ArticlesList articles={recommendations} />
        </>
    );
}

export default ArticlePage;