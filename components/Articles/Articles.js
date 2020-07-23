import React from "react";
import dynamic from "next/dynamic";
import { calculateReadTime } from '../../utils/reading';

import styles from './Articles.module.css';

const Loading = () => (
    <p>Loading...</p>
);

const Article = dynamic(() => import('../Article/Article'), { loading: () => <Loading />});

const Articles = ({ posts }) => (
    <section className={styles.section}>
        <h3>📰 Articles</h3>
        <hr />

        <div className={styles.articles}>
            {posts && posts.map( post => {
                const { title, date, excerpt, author, slug, content } = post;
                const { name } = author;
                return (
                    <Article key={`key-${title}`} title={title} excerpt={excerpt} date={date} author={name} slug={slug} readTime={calculateReadTime(content)} />
                )
            })}
        </div>
    </section>
);

export default Articles;