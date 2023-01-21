const RoutingProvider = ($routeProvider: any) => {
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
