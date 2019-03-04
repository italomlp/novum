module.exports = {
  siteMetadata: {
    title: 'Novum',
    author: 'Igor Zahir',
    description: `Futurologia, previsão de tendências em comportamento, consumo e lifestyle,
      e estudos culturais sobre transumanismo`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Novum Website',
        short_name: 'Novum',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
