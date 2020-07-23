import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { TypographyStyle } from "react-typography"
import typography from "../utils/typography"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <TypographyStyle typography={typography} />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument