import React from 'react';
import Head from 'next/head';
import Highlight from "react-highlight";
import dynamic from "next/dynamic";

const Loading = () => (
    <p>Loading...</p>
);

const Layout = dynamic(() => import('../components/Layout/Layout'), { loading: () => <Loading />});

function Levels() {
    return (
        <>
            <Head>
                <title>Levels | Explain To Me | CSS</title>
            </Head>
            <Layout>
                <h2>Levels</h2>
                <hr />
                <h3>CSS Level 1</h3>

                <div>
                    <h4>Fonts</h4>
                    <div>
                        <p>
                            <Highlight language="css">
                                { `font-size: <length> | <percentage> | <Highlight> | xx-small | x-small | small | medium | large | x-large | xx-large` }
                            </Highlight>
                        </p>
                        <p>
                            <Highlight language="css">
                                { `font-size: [ <family-name> | <generic-family> ]` }
                            </Highlight>
                        </p>
                        <p>
                            <Highlight language="css">
                                { `font-weight: extra-light | light | demi-light | medium | demi-bold | bold | extra-bold | <number> | <percetnage>` }
                            </Highlight>
                        </p>
                        <p>
                            <Highlight language="css">
                                { `font-style: italic | oblique | small-caps | normal` }
                            </Highlight>
                        </p>
                        <p>
                            <Highlight language="css">
                                { `font-leading: <length> | <percentage>` }
                            </Highlight>
                        </p>
                        <p>
                            <Highlight language="css">
                                { `font: size [ / line-height ] family [ weight ] [ style ]` }
                            </Highlight>
                        </p>
                    </div>
                </div>
                <h3>CSS Level 2</h3>
                <h3>CSS Level 3</h3>
                <h3>CSS Level 4</h3>
                <h3>Experimental</h3>
            </Layout>
        </>
    );
}

export default Levels