import path from 'path';
// import axios from 'axios';

export default {
  siteRoot: 'https://wassermann.xyz',
  basePath: 'hp',
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
};