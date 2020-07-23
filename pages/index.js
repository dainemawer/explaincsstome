import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";

import { getAllPosts } from '../lib/api'

const Loading = () => (
    <p>Loading...</p>
);

const Articles = dynamic(() => import('../components/Articles/Articles'), { loading: () => <Loading />});
const Layout = dynamic(() => import('../components/Layout/Layout'), { loading: () => <Loading />});
const Bio = dynamic(() => import('../components/Bio/Bio'), { loading: () => <Loading />});
const Intro = dynamic(() => import('../components/Intro/Intro'), { loading: () => <Loading />});

function HomePage({ allPosts }) {
    return (
        <>
            <Head>
                <title>Explain To Me | CSS</title>
            </Head>
            <Layout>
                <h1 style={{ marginTop: 0, marginBottom: 0 }}>Welcome to the <em>Explain</em> series</h1>
                <Bio />
                <Intro />
                <Articles posts={allPosts} />
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'excerpt',
        'content',
        'icon',
        'published'
    ])

    return {
        props: { allPosts },
    }
}

export default HomePage