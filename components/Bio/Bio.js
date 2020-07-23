import React from 'react';
import clsx from 'clsx';
import styles from './Bio.module.css'
import dynamic from "next/dynamic";

const Loading = () => (
    <p>Loading...</p>
);

const RelatedProjects = dynamic(() => import('../RelatedProjects/RelatedProjects'), { loading: () => <Loading />});

const Bio = () => {
    return(
        <section className={clsx(styles.bio)}>

            <RelatedProjects />

            <p className={clsx(styles.explainer)}>
                I've been writing Frontend code for a little over 10 years now.
                This micro-site intends to document fundamentals and concepts of HTML for beginners, however, it is
                also intended for more advanced CSS enthusiasts who want to go back to basics.
            </p>

            <p className={clsx(styles.explainer)}>
                Throughout this website you will find bite-sized, easily understandable information about CSS so that
                it can better help you in your career. I would very much appreciate any contributions, amendments, changes
                and rephrasing of fundamental concepts and information in general.
            </p>

            <figure className={clsx(styles.figure)}>
                <img className={clsx(styles.image)} src="/dainemawer.jpg" alt="Daine Mawer" />
                <figcaption className={clsx(styles.figcaption)}>
                    <h2>Daine Mawer | Senior Front-end Engineer</h2>
                    <h3>@ <a href="https://10up.com">10up.com</a></h3>
                </figcaption>
            </figure>

            <hr />

        </section>
    );
}

export default Bio;