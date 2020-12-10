var app = new Vue({
  el: '#app',
  data: {
    linkHeader: [
      'HOME',
      'COURSES',
      'PAGES',
      'APP'
    ],
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
