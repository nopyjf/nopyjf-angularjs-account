const ThemingProvider = ($mdThemingProvider: any) => {
  $mdThemingProvider.theme('default').dark();
};

const ThemingConfig = [
  '$mdThemingProvider',
  ($mdThemingProvider: any) => {
    ThemingProvider($mdThemingProvider);
  }
];

export default ThemingConfig;
