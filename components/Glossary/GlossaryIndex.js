import React from 'react';
import dynamic from "next/dynamic";

const Loading = () => (
    <p>Loading...</p>
);

const GlossaryItem = dynamic(() => import('./GlossaryItem'), { loading: () => <Loading />});

const GlossaryIndex = ({ terms }) => (
    <div itemScope itemType="http://schema.org/DefinedTermSet">
        {terms && terms.map( term => {
            const { id, title, description } = term;
            return (
                <GlossaryItem key={id} title={title} description={description} />
            )
        })}
    </div>
);

export default GlossaryIndex;