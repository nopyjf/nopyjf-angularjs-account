import { IComponentOptions } from 'angular';
import LandingTemplate from '../templates/main.html';
import LandingController from './controller';

const LandingComponent: IComponentOptions = {
  templateUrl: LandingTemplate,
  controller: LandingController
};

export default LandingComponent;
