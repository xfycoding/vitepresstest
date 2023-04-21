export default {
  // 定义在浏览器标签上显示的标题
  title: "xfycoding",
  // 大部分主要的主题配置都在里面了
  description: '一枚努力学习的程序员',
  //根路径
  base: '/blog/',
  //开启最后编辑时间
  lastUpdated: true,
  themeConfig: {
    //网页logo
    logo: '/img/home/Xfycoding.jpg',
    // 导航上显示的内容
    siteTitle: 'XfyCoding博客',
    // 配置顶部的文字(不配置则是英文)
    outlineTitle: '文章目录',
    // 表示显示h2-h6的标题
    outline: 'deep',
    //最后编辑时间内容
    lastUpdatedText: 'Updated Date',
    socialLinks: [
      { icon: "github", link: "https://github.com/Xfycoding" }
    ],
    //页脚
    footer: {
      message: 'XfyCoding',
      copyright: 'Copyright ©2023-present XfyCoding 版权所有'
    },
    //上（下）一篇
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '搭建个人博客', link: '/articles/搭建个人博客/基于VitePress搭建个人博客' },
      {
        text: '下拉菜单',
        items: [
          { text: '项目A', link: '/articles/下拉菜单/a' },
          { text: '项目B', link: '/articles/下拉菜单/b' }
        ]
      },
      {
        text: '分组下拉菜单',
        items: [
          {
            // 可以省略标题
            text: '标题A',
            items: [
              { text: '标题A项目A', link: '/articles/组合下拉菜单/组合a/a' },
              { text: '标题A项目B', link: '/articles/组合下拉菜单/组合a/b' },
            ]
          },
          {
            // 可以省略标题
            text: '标题B',
            items: [
              { text: '标题B项目A', link: '/articles/组合下拉菜单/组合b/a' },
              { text: '标题B项目B', link: '/articles/组合下拉菜单/组合b/b' },
            ]
          }
        ]
      }
    ],
    //侧边栏
    sidebar: {
      '/articles/搭建个人博客/': [
        {
          text: 'Guide',
          items: [
            { text: '搭建个人博客1', link: '/articles/搭建个人博客/基于VitePress搭建个人博客' },
            { text: '搭建个人博客2', link: '/articles/搭建个人博客/测试' }, 
          ]
        }
      ],
    },
    // 简洁化URL，即我们访问文件时不需要加后缀了，直接 /xxx/xxx即可，不要/xxx/xxx.md
    cleanUrls: true,
  }
};