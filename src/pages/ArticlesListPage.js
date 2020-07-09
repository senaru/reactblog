import React from 'react';
import ArticleList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <p><ArticleList articles={articleContent} /></p>
    </>
);

export default ArticlesListPage;