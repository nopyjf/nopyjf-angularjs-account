import angular from 'angular';
import {
  LandingControllerName,
  LandingModuleName,
  LandingServiceName
} from './constants';
import LandingController from './controller';
import LandingService from './service';

const LandingModule = angular
  .module(LandingModuleName, [])
  .controller(LandingControllerName, LandingController)
  .factory(LandingServiceName, LandingService);

export default LandingModule;
