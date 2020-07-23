import Typography from 'typography'
import SutroTheme from 'typography-theme-sutro'

delete SutroTheme.googleFonts;

SutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(1 / 2),
    },
    h1: {
        fontWeight: 900,
        letterSpacing: "-1px",
    },
    a: {
        color: '#E61F00',
    }
});

SutroTheme.scaleRatio = 5 / 2;
SutroTheme.baseFontSize = '16px';

const typography = new Typography(SutroTheme);

if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;