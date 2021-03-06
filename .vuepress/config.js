module.exports = {
  base: '/data/',
  serviceWorker: {
    updatePopup:
      true | { message: 'New content is available.', buttonText: 'Refresh' }
  },
  title: 'Deparment of Mathematics & Statistics',
  description: 'This website is to provide data for our visitors.',
  themeConfig: {
    //sidebar: ['/', '/pages/faculty/'],
    navbar: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Faculty', link: '/pages/faculty/' },
      { text: 'Previous Exams', link: '/pages/coursefiles/' },
      { text: 'Publications', link: '/pages/publications/' },
      { text: 'Technical Reports', link: '/pages/technicalreports/' },
      { text: 'Syllabi', link: '/pages/syllabi/' },
      { text: 'Projects', link: '/pages/projects/' }
      //{ text: 'External', link: 'https://google.com' }
    ]
  },
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]]
}
