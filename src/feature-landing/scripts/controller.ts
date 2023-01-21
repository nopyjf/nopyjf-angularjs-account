interface LandingController {
  word: string;
}

class LandingController implements LandingController {
  constructor() {
    this.word = 'Hello World !';
  }
}

export default LandingController;
