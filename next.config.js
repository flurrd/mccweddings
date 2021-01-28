const glob = require('glob')

// next.config.js
const withSCSS = require('@zeit/next-sass')

module.exports = withSCSS({

  cssLoaderOptions: {
    url: false
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
   exportPathMap: async function() {
    const routes = {
      '/': { page : '/'},
      "/about": { page: "/about"},
      "/404": { page: "/404"}
    }
    //get all .md files in the posts dir
    const blogs = glob.sync('src/posts/**/*.md')
    //get all .md files in the posts dir
    const projects = glob.sync('src/projects/**/*.md')

    //remove path and extension to leave filename only
    const blogSlugs = blogs.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())
    //remove path and extension to leave filename only
    const projectSlugs = projects.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())

    //add each blog to the routes obj
    blogSlugs.forEach(blog => {
      routes[`/blog/${blog}`] = { page: '/blog/[slug]', query: { slug: blog } };
    });

    //add each blog to the routes obj
    projectSlugs.forEach(project => {
      routes[`/project/${project}`] = { page: '/project/[slug]', query: { slug: project } };
    });

    return routes
  }
})