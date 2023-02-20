import angular from 'angular';
import TransactionCreatingController from '../../feature-transaction-creating/scripts/controller';
import LandingTemplate from '../../feature-transaction-creating/templates/main.html';

class LandingController {
  constructor(LandingService, $mdDialog) {
    this.$mdDialog = $mdDialog;
    this.service = LandingService;
    this.isEditMode = false;
  }

  getTransactions = () => {
    return this.service.getTransactions();
  };

  getTransaction = (index) => {
    return this.service.getTransaction(index);
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
    // do nothing
  };

  updatePrepareDelete = (index, isPrepareDelete) => {
    this.service.updatePrepareDelete(index, isPrepareDelete);
  };

  updateEditMode = (isEditMode) => {
    this.isEditMode = isEditMode;
  };
}

export default LandingController;
