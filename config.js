module.exports = {
  title: "这是第一个在线文档示例",
  description: "这是一个示例",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api/" },
      { text: "框架", link: "/frame/" },
      { text: '在线demo', link: "http://www.baidu.com" },
    ],
    sidebar: {
      "/guide/": [
        ["", "介绍"],
        ["quick", "快速上手"],
        ["information", "资料"]
      ],
      "/api/": [["", "接口"]],
      "/frame/": [["", "框架"]]
    }
  },
  plugins: [
    // 'vuepress-plugin-element-tabs'
  ]
};
