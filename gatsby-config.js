module.exports = {
  siteMetadata: {
    title: `Samuel Dias`,
    name: `Samuel Dias`,
    siteUrl: `http://localhost:8000/`,
    description: `Minha pequena contribuição para o mundo de análise de dados e negócios.`,
    hero: {
      heading: `Minha pequena contribuição para o mundo de análise de dados e negócios.`,
      maxWidth: 800,
    },
    social: [
      {
        name: `email`,
        url: `mailto:samueldial@gmail.com`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/aldiasamu`,
      },
      {
        name: `github`,
        url: `https://github.com/Samueldial`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/samueldial/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/samueladias/`,
      },
      {
        name: `telegram`,
        url: `https://telegram.me/samueldial`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/mo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
