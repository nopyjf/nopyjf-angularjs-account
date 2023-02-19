import angular from 'angular';
import TransactionCreatingController from '../../feature-transaction-creating/scripts/controller';
import LandingTemplate from '../../feature-transaction-creating/templates/main.html';

class LandingController {
  constructor(LandingService, $mdDialog) {
    this.$mdDialog = $mdDialog;
    this.service = LandingService;
  }

  getTransactions = () => {
    return this.service.getTransactions();
  };

  displayDialog = (ev) => {
    const dialogConfig = {
      controller: TransactionCreatingController,
      templateUrl: LandingTemplate,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: true
    };

    this.$mdDialog
      .show(dialogConfig)
      .then(this.addTransactionComplete, this.closeDialog);
  };

  addTransactionComplete = (transaction) => {
    this.service.addTransaction(transaction);
  };

  closeDialog = () => {
    console.log('ASDasd');
    // do nothing
  };
}

export default LandingController;
