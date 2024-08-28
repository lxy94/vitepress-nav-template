import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "尼豆",
  base:'/vitepress-nav-template/',
  description: "A VitePress Site",
  appearance:'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/nav/index' }
    ],
    socialLinks:[{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    siteTitle:'尼豆',
    sidebarMenuLabel:'目录',
    returnToTopLabel:'返回顶部',
    darkModeSwitchLabel:'深度模式',
    lastUpdated:{
      text:'最后更新于',
      formatOptions:{
        dateStyle:'short',
        timeStyle:'medium'
      }
    },
    
    search:{
      provider:'local',
    },
    docFooter:{
      prev:'上一页',
      next:'下一页'
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    

  }
})
