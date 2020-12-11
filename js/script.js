var app = new Vue({
  el: '#app',
  data: {
    logo: 'img/logo.png',
    searchIcon: 'fas fa-search',
    cartIcon: 'fas fa-shopping-cart',
    login: 'LOGIN',
    linkHeader: [
      'HOME',
      'COURSES',
      'PAGES',
      'APP'
    ],
    greatApp: 'We make great app.',
    categorieFooter: [
      {
        nome: 'About Company',
        links: [
          'Register',
          'Activate',
          'All Courses',
          'Groups Directory',
          'Members Directory'
        ]
      },
      {
        nome: 'Top Courses',
        links: [
          'Design Dynamics',
          'Internet of Things Security',
          'Deep Virtual Reality',
          'Artificial Intelligence',
          'Machine Learning Toolsy'
        ]
      },
      {
        nome: 'Populare Categories',
        links: [
          'Register',
          'Activate',
          'All Courses',
          'Groups Directory',
          'Members Directory'
        ]
      }
    ]
  }

});
