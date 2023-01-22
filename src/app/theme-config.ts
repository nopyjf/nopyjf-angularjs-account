const ThemingProvider = ($mdThemingProvider: any) => {
  $mdThemingProvider.theme('default').primaryPalette('red');
};

const ThemingConfig = [
  '$mdThemingProvider',
  ($mdThemingProvider: any) => {
    ThemingProvider($mdThemingProvider);
  }
];

export default ThemingConfig;
