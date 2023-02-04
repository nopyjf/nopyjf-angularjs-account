const ThemingProvider = ($mdThemingProvider) => {
  $mdThemingProvider.theme('default');
};

const ThemingConfig = [
  '$mdThemingProvider',
  ($mdThemingProvider) => {
    ThemingProvider($mdThemingProvider);
  }
];

export default ThemingConfig;
