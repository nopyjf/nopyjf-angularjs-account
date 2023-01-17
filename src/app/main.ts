import angular from 'angular';
import { AppModuleName, NgRouteName } from '../constants/module-constant';
import { Routing } from './routing';
import LandingModule from '../feature-landing/scripts/main';

const dependencies = [NgRouteName, LandingModule.name];

const AppModule = angular.module(AppModuleName, dependencies).config(Routing);

export default AppModule;
