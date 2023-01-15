import angular from 'angular';
import { mainModuleName } from '../../constants/module-name-constant';
import { mainControllerName } from '../../constants/controller-name-constant';

const dependencies: string[] = [];

const MainModule = angular
  .module(mainModuleName, dependencies)
  .controller(mainControllerName, function ($scope) {
    $scope.test = 'Hello World!';
  });

export default MainModule;
