interface ILandingController {
  word: string;
}

class LandingController implements ILandingController {
  word: string;

  constructor() {
    this.word = 'Hello World !';
  }
}

export default LandingController;
