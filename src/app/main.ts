import angular from 'angular';
import { Routing } from './routing';
import LandingModule from '../feature-landing/scripts/main';
import { AppModuleName, NgRouteName } from './constants';

const dependencies = [NgRouteName, LandingModule.name];

const AppModule = angular.module(AppModuleName, dependencies).config(Routing);

export default AppModule;
