import LandingController from './controller';
import LandingTemplate from '../templates/main.html';

const LandingComponent = {
  name: 'landingComponent',
  template: {
    templateUrl: LandingTemplate,
    controller: LandingController
  }
};

export default LandingComponent;
