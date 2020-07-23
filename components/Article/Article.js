import React from 'react';
import Link from 'next/link';

import styles from './Article.module.css';

const Article = ({ title, date, excerpt, author, slug, readTime }) => (
    <article className={styles.article}>
        <h4 className={styles.title}>
            <Link as={`/articles/${slug}`} href="/articles/[slug]"><a className={styles.anchor}>{title}</a></Link>
        </h4>
        <span className={styles.readTime}>🧑‍💻 {readTime}</span>
        <p className={styles.excerpt}>{excerpt}</p>
    </article>
);

export default Article;