import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import {Layout} from '../../components/Layout';
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdown'

export default function Post({ post, morePosts, preview }) {

    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return(
        <Layout>
            <Head>
                <title>
                    {post.title} | Explain To ME | CSS
                </title>
            </Head>
            <article>
                <ul>
                    <li>{post.author.name}</li>
                    <li>{post.date}</li>
                </ul>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </Layout>
    );

}

export async function getStaticProps({ params }) {

    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
    ])

    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}

