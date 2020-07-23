import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";

import terms from '../lib/glossary';
import { dynamicSort } from '../utils/sort';

const Loading = () => (
    <p>Loading...</p>
);

const Layout = dynamic(() => import('../components/Layout/Layout'), { loading: () => <Loading />});
const GlossaryIndex = dynamic(() => import('../components/Glossary/GlossaryIndex'), { loading: () => <Loading />});

function Glossary() {
    const alphaTerms = terms.sort(dynamicSort('title'))
    return (
        <>
            <Head>
                <title>Explain To Me | CSS</title>
            </Head>
            <Layout>
                <h2>Glossary</h2>
                <hr />
                <GlossaryIndex terms={alphaTerms} />
            </Layout>
        </>
    );
}

export default Glossary