module.exports = {
    title: 'Yu Niu',
    description: 'Life is beautiful',
    head: [
      ['link', { rel: 'icon', href: '/myicon.ico' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'}],
    ],
    base: '/YuNiuBlog/',
    markdown: {
      lineNumbers: true
    },
    port: 9494,
    permalink: "/:year/:i_month/:i_day/:regular",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Front End',
              items: [
                { text: 'JavaScript', link: '/'},
                { text: 'Vue全家桶',
                  items: [
                    { text: 'Vue.js', link: '/'},
                    { text: 'VueRouter', link: '/'},
                    { text: 'VuePress', link: '/'},
                  ]
                },
                { text: 'HTML', link: '/' },
                { text: 'CSS', link: '/' },
                { text: '其它', link: '/MarkDown and Typora.md' }
              ]
            },
            { text: 'Mini Program',
              items: [
                { text: '微信小程序', link: '' },
                { text: '支付宝小程序', link: '' }
              ]
            },
            { text: 'About Me', link: 'https://github.com/YuNiuyn' }
        ],
      lastUpdated: 'Last Updated',
      repo: 'YuNiuyn/YuNiuBlog',
      repoLabel: 'GitHub',
      docsRepo: 'YuNiuyn/YuNiuBlog',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页'
    },
    markdown: {
      config: md => {
        md.set({ breaks: true })
        md.use(require('markdown-it-xxx'))
      }
    }
};