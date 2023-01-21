import angular from 'angular';
import LandingModule from '../feature-landing/scripts/main';
import { AppModuleName, NgMaterial, NgRouteName } from './constants';
import RoutingConfig from './routing-config';
import ThemingConfig from './theme-config';

const dependencies = [NgRouteName, NgMaterial, LandingModule.name];

const AppModule = angular
  .module(AppModuleName, dependencies)
  .config(RoutingConfig)
  .config(ThemingConfig);

export default AppModule;
