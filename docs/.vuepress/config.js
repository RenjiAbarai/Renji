const {getChildren} = require('./utils/auto-sidebar');

module.exports = {
    title: 'Johnny',
    description: '每天进步一点点',
    publicPath: '/',
    head: [
        ['link', {rel: 'icon', href: '/images/logo.png'}]
    ],
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'docker', link: '/docker/docker'},
            {text: '工具软件', link: '/software/django'},
            {text: '百度', link: 'https://www.baidu.com'},
            // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
        ],
        sidebar: {
            '/software/': [{
                title: '工具软件',
                collapsable: false,
                sidebarDepth: 2,
                children: getChildren('./docs', 'software')
            }],
        }
    },
    plugins: {
        '@vuepress/back-to-top': true,
    }
}