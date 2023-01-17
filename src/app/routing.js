export const Routing = [
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<div>YES I DO</div>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
];
