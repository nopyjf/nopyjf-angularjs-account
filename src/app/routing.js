export const Routing = [
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: require('../feature-landing/index.html')
      })
      .otherwise('/');
  }
];
