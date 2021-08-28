const codeTheme = require("prism-react-renderer/themes/vsDark");

const Prism = require("prismjs");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Decotix",
  tagline: "A decorator-focused typescript client for the Prisma schema file",
  url: "https://decotix.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Angshu31", // Usually your GitHub org/user name.
  projectName: "decotix", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Decotix",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://github.com/Angshu31/decotix",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Angshu31/decotix",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bedanta Mukhopadhay (Angshu31)`,
    },
    prism: {
      theme: codeTheme,
      darkTheme: codeTheme,
      // additionalLanguages: ["prisma"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Angshu31/decotix-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
