import React from 'react';
import { useRouter } from "next/router";
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Header.module.css';

const Moon = () => (
    <>
        <span role="img" aria-hidden="true">🌕</span>
        <span className="sr-only">Toggle Dark Mode On</span>
    </>

);

const Sun = () => (
    <>
        <span role="img" aria-hidden="true">☀️</span>
        <span className="sr-only">Toggle Dark Mode Off</span>
    </>
);

const Header = ({darkMode}) => {
    const {toggle, value} = darkMode;
    const router = useRouter();
    return(
        <header className={clsx(styles.grid, styles.header)}>
            <div className={clsx(styles.logo)}>
                <Link href="/">
                    <a className={clsx(styles.logoLink)}>
                        <svg className={clsx(styles.logoSvg)} width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1610 1206">
                            <path d="M805 990.764l-321.933 214.89L.944 885.042V322.163L483.067.346 805 213.626 1126.933.346l482.123 321.817v562.879l-482.123 320.612L805 990.764zM644.81 859.72v-32.431L478.246 710.272 286.602 835.624l196.465 130.174L644.81 859.72zM805 697.213l326.754-215.949 279.632 178.386V427.025l-284.453-185.617-321.817 201.286-.116-.089-.116.089-321.817-201.286-284.453 185.617V659.65l279.632-178.386L805 697.213zm160.19 130.076v32.431l161.743 106.078 196.465-130.174-191.644-125.352L965.19 827.289z" fill="#f92300" fillRule="nonzero"/>
                        </svg>
                        <span className={clsx(styles.logoText)}>explain <strong>css</strong></span>
                    </a>
                </Link>

            </div>
            <div className={clsx(styles.darkMode)}>

                <nav className={clsx(styles.navigation)} itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation">
                    <ul className={clsx(styles.menu)}>
                        <li className={clsx(styles.menuItem, router.pathname === '/almanac' ? 'active' : '')}>
                            <Link href="/almanac">
                                <a>almanac</a>
                            </Link>
                        </li>
                        <li className={clsx(styles.menuItem, router.pathname === '/glossary' ? 'active' : '')}>
                            <Link href="/glossary">
                                <a>glossary</a>
                            </Link>
                        </li>
                        <li className={clsx(styles.menuItem, router.pathname === '/versions' ? 'active' : '')}>
                            <Link href="/levels">
                                <a>levels</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button className={clsx(styles.darkModeButton)} onClick={toggle}>
                    {value ? <Sun /> : <Moon />}
                </button>
            </div>
        </header>
    );
}

export default Header;