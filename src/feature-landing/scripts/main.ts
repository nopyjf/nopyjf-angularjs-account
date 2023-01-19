import angular from 'angular';
import { LandingModuleName } from '../../constants/module-constant';
import LandingComponent from './component';

const LandingModule = angular
  .module(LandingModuleName, [])
  .component(LandingComponent.name, LandingComponent.template);

export default LandingModule;
