import angular from 'angular';
import LandingComponent from './component';
import { LandingComponentName, LandingModuleName } from './constants';

const LandingModule = angular
  .module(LandingModuleName, [])
  .component(LandingComponentName, new LandingComponent());

export default LandingModule;
