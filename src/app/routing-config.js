import LandingTemplate from '../feature-landing/templates/main.html';

const RoutingProvider = ($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: LandingTemplate
    })
    .otherwise({
      redirectTo: '/'
    });
};

const RoutingConfig = ['$routeProvider', RoutingProvider];

export default RoutingConfig;
