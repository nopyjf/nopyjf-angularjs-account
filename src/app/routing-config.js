const RoutingProvider = ($routeProvider) => {
  $routeProvider
    .when('/', {
      template: '<landing-component></landing-component>'
    })
    .otherwise({
      redirectTo: '/'
    });
};

const RoutingConfig = ['$routeProvider', RoutingProvider];

export default RoutingConfig;
