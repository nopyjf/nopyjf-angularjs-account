const ThemingProvider = ($mdThemingProvider: any) => {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
};

const ThemingConfig = [
  '$mdThemingProvider',
  ($mdThemingProvider: any) => {
    ThemingProvider($mdThemingProvider);
  }
];

export default ThemingConfig;
