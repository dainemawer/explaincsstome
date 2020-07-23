/**
 * 🔨 Layout
 *
 * Handles site layout globally.
 *
 * @file Layout
 * @author Daine Mawer
 * @since 1.0.0
 */

// 📦 NPM
import React from 'react';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';
import dynamic from "next/dynamic";

import styles from './Layout.module.css'

// 💎 Components
const Header = dynamic(() => import('../Header/Header'), { loading: () => <Loading />});
const Footer = dynamic(() => import('../Footer/Footer'), { loading: () => <Loading />});

const Loading = () => (
    <p>Loading...</p>
);

const Layout = ({children}) => {
    const darkMode = useDarkMode(false);

    return (
        <>
            <Header darkMode={darkMode} />
            <main className={styles.container} id="content" itemProp='mainContentOfPage' itemScope role='main'>
                {children && children}
            </main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;