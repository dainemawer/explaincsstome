import React from 'react';

import styles from './RelatedProjects.module.css';

const RelatedProjects = () => (
    <div className={styles.container}>
        <a className={styles.button} href="https://explainhtmlto.me">Explain HTML</a>
        <a className={styles.button} href="https://explainjavascriptto.me">Explain JavaScript</a>
        <a className={styles.button} href="https://explainreactto.me">Explain React</a>
    </div>
);

export default RelatedProjects;