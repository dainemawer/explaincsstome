import Highlight from "react-highlight";
import React from "react";

import styles from './Intro.module.css';

const Intro = () => (
    <section>
        <h3>💁🏼‍♂️ <a href="#definition">Definition</a></h3>
        <hr />

        <div id="definition">
            <p>Cascading Style Sheets, otherwise known as CSS is a frontend language used for describing the presentational layer of web document. Like HTML and JavaScript, CSS is considered a cornerstone technology when it comes to building web pages.</p>
        </div>

        <h3>🔮 <a href="#purpose">Purpose</a></h3>
        <hr />

        <div id="purpose">
            <p>CSS, is only concerned withe presentational layer of a website. Formatting, styling, aesthetics, layout, fonts and color is generally associated with style sheets.</p>
        </div>


        <h3>📖 <a href="#history">History</a></h3>
        <hr />

        <div id="history">
            <p>CSS was originally proposed by Hakon Wium Lie in 1994. This coincided with the work of Tim Berners Lee who was working at CERN at the time.
                The first release of CSS was in 1996, after the World Wide Web Consortium released the W3C CSS Recommodation (CSS Level 1). Bert Bos is considered to have been the most influential co-author of CSS1</p>
            <p>The concept of Stylesheets have existed since the 1980's where languages like Standard Generalized Markup Language(SGML) were used. As HTML became more popular, attempts at using HTML to style web layouts become more common, however this made HTML more complex and thus provided limited control to engineers.</p>
            <p>A total of nine different style sheet languages were proposed, of these nine, two were considered: CSS: Cascading HTML Style Sheets or CHSS and Steam-based Style Sheet Proposal or SSP. In 1996, Netscape presented a further alternative known as JavaScript Style Sheets, the spec was never finished and deprecated.</p>
            <p>CSS Level 2 was released in 1998 and CSS Level 3 which was started in 1998 is still under development as of 2014.</p>
        </div>


        <h3>🗂 <a href="#implementation">Implementation</a></h3>
        <hr />

        <div id="implementation">
            <p>CSS can be implemented into an HTML document in 3 ways:</p>
            <div>
                <div className={styles.implementation}>
                    <p><strong>Embedded directly into an HTML document using the style tag:</strong></p>
                    <Highlight language="html">
                        {` <style> .foo { bar: baz } </style> `}
                    </Highlight>
                </div>
                <div className={styles.implementation}>
                    <p><strong>Linked from the server using the link tag:</strong></p>
                    <Highlight language="html">
                        {` <link href="./style.css" rel="stylesheet" /> `}
                    </Highlight>
                </div>
                <div className={styles.implementation}>
                    <p><strong>Added as an inline style declaration on an HTML element:</strong></p>
                    <Highlight language="html">
                        {` <div style="display: block;"></div> `}
                    </Highlight>
                </div>
            </div>
        </div>
    </section>
);

export default Intro