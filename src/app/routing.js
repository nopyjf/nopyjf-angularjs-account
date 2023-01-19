export const Routing = [
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<landing-component></landing-component>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
];
