import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.css'
import dynamic from "next/dynamic";

const Newsletter = dynamic(() => import('../Newsletter/Newsletter'), { loading: () => <Loading />});

const Loading = () => (
    <p>Loading...</p>
);

const Footer = () => {
    return(
        <>
            <footer itemScope itemType="http://schema.org/WPFooter" role="contentinfo">
                <Newsletter />
                <div className={clsx(styles.grid)}>
                    <nav itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" aria-label="Related Footer Navigation">
                        <ul className={styles.menu}>
                            <li className={clsx(styles.menuItem)}>
                                <a className={clsx(styles.menuItemAnchor)} href="https://explainhtmlto.me" rel="noopener noreferrer">
                                    explain <strong>html</strong>
                                    <span className="sr-only">(Opens in A New Tab)</span>
                                </a>
                            </li>
                            <li className={clsx(styles.menuItem)}>
                                <a className={clsx(styles.menuItemAnchor)} href="https://explainjavascriptto.me" rel="noopener noreferrer">
                                    explain <strong>javascript</strong>
                                    <span className="sr-only">(Opens in A New Tab)</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" aria-label="Useful Links Footer Navigation">
                        <ul className={clsx(styles.menu, styles.menuEnd)}>
                            <li className={clsx(styles.menuItem)}>
                                <a className={clsx(styles.menuItemAnchor)} href="https://explaincssto.me/rss" rel="noopener noreferrer">
                                    rss
                                    <span className="sr-only">(Opens in A New Tab)</span>
                                </a>
                            </li>
                            <li className={clsx(styles.menuItem)}>
                                <a href="https://github.com/dainemawer/explaincsstome/issues" className={clsx(styles.menuItemAnchor)} rel="noopener noreferrer">
                                    contribute <span className="sr-only">to the explain to me series (Opens in A New Tab)</span>
                                </a>
                            </li>
                            <li className={clsx(styles.menuItem)}>
                                <a href="https://twitter.com/dainemawer" className={clsx(styles.menuItemAnchor)} rel="noopener noreferrer">
                                    twitter <span className="sr-only">(Opens in A New Tab)</span>
                                </a>
                            </li>
                            <li className={clsx(styles.menuItem)}>
                                <a href="https://github.com/dainemawer" className={clsx(styles.menuItemAnchor)} rel="noopener noreferrer">
                                    github <span className="sr-only">(Opens in A New Tab)</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className={clsx(styles.credits)}>Given 🤟🏼 with <a href="https://nextjs.org">NextJS</a> and <a href="https://vercel.com">Vercel</a></p>
            </footer>
        </>
    );
}

export default Footer;