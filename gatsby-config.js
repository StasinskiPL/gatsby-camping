require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato']
        }
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API, 
        concurrency: 5, 
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `services`,
            mapping:{image:"fileNode"}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `prices`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `contact`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `ratesInfo`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `facilities`,
          },
        ]
      }
    }
  ],
}
