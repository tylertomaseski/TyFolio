// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Tyler Tomaseski\'s Portfolio',
    tagline: 'Senior Engineer & Producer. Gameplay & Platform Porting.',
    url: 'https://tylertomaseski.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'tylertomaseski', // Usually your GitHub org/user name.
    projectName: 'TyFolio', // Usually your repo name.


    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
                switchConfig: {
                    darkIcon: '🌙',
                    darkIconStyle: {
                        marginLeft: '2px',
                    },
                    // Unicode icons such as '\u2600' will work
                    // Unicode with 5 chars require brackets: '\u{1F602}'
                    lightIcon: '☀️',
                    lightIconStyle: {
                        marginLeft: '1px',
                    },
                },
            },
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            navbar: {
                title: 'Tyler Tomaseski\'s Portfolio',
                logo: {
                    alt: 'TyFolio Logo',
                    src: 'img/logo.png',
                    href: '/',
                },
                items: [{
                        to: '/',
                        docId: 'intro',
                        position: 'left',
                        label: 'Portfolio',
                    },
                    { to: '/resume', label: 'Resume', position: 'left' },
                    { to: '/contact_me', label: 'Contact Me', position: 'left' },
                    {
                        href: 'https://github.com/tylertomaseski',
                        label: 'My GitHub',
                        position: 'right',
                    },
                ],
            },
            // footer: {
            //     style: 'dark',
            //     links: [{
            //             title: 'Docs',
            //             items: [{
            //                 label: 'Tutorial',
            //                 to: '/docs/intro',
            //             }, ],
            //         },
            //         {
            //             title: 'Community',
            //             items: [{
            //                     label: 'Stack Overflow',
            //                     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //                 },
            //                 {
            //                     label: 'Discord',
            //                     href: 'https://discordapp.com/invite/docusaurus',
            //                 },
            //                 {
            //                     label: 'Twitter',
            //                     href: 'https://twitter.com/docusaurus',
            //                 },
            //             ],
            //         },
            //         {
            //             title: 'More',
            //             items: [{
            //                     label: 'Blog',
            //                     to: '/blog',
            //                 },
            //                 {
            //                     label: 'GitHub',
            //                     href: 'https://github.com/facebook/docusaurus',
            //                 },
            //             ],
            //         },
            //     ],
            //     copyright: `Copyright © ${new Date().getFullYear()} Tyler Tomaseski`,
            // },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;