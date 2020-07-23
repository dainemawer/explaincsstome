import React from 'react';

import styles from './Glossary.module.css';

const GlossaryItem = ({ title, description }) => (
    <dl className={styles.list} itemScope itemType="http://schema.org/DefinedTerm">
        <dt className={styles.term} itemProp="name">💡 {title}</dt>
        <dd className={styles.definition} itemProp="description">{description}</dd>
    </dl>
);

export default GlossaryItem;