import angular from 'angular';
import { LandingComponentName, LandingModuleName } from './constants';
import LandingComponent from './component';

const LandingModule = angular
  .module(LandingModuleName, [])
  .component(LandingComponentName, LandingComponent);

export default LandingModule;
