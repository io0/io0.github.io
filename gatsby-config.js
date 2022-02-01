module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Text",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/markdown/",
        ignore: [`**/\.*`, `**/.obsidian/**`, `./src/pages/.obsidian/*`, `**/.obsidian/*`,
        `**/`, `**/.obsidian`, `**/.obsidian`, "main.js", "./src/pages/.obsidian/plugins/nldates-obsidian/main.js"], // ignore files starting with a dot
      },
      __key: "pages",
    },
    `gatsby-transformer-remark`,
  ],
};
