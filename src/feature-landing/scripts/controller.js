class LandingController {
  constructor(LandingService) {
    this.service = LandingService;
  }

  getTransactions = () => {
    return this.service.getTransactions();
  };
}

export default LandingController;
