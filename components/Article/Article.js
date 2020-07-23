import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Article.module.css';

const Article = ({ title, date, excerpt, author, slug, readTime, icon, published }) => (
    <article className={clsx(styles.article, published ? styles.published : styles.draft)}>
        <h4 className={styles.title}>
            {icon}
            <Link as={`/articles/${slug}`} href="/articles/[slug]">
                <a className={styles.anchor}>
                    {title}
                </a>
            </Link>
        </h4>
        <span className={styles.readTime}>🧑‍💻 {readTime}</span>
        <p className={styles.excerpt}>{excerpt}</p>
        {published && (<p className={styles.author}>Written by {author}</p>)}
    </article>
);

export default Article;