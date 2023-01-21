import { IComponentOptions } from 'angular';
import LandingTemplate from '../templates/main.html';
import LandingController from './controller';

class LandingComponent implements IComponentOptions {
  templateUrl: string;
  controller: typeof LandingController;

  constructor() {
    this.templateUrl = LandingTemplate;
    this.controller = LandingController;
  }
}

export default LandingComponent;
