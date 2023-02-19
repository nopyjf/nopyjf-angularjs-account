class TransactionCreatingController {
  constructor($scope, $mdDialog) {
    this.$scope = $scope;
    this.$mdDialog = $mdDialog;

    this.$scope.transaction = {
      title: null,
      type: null,
      price: null
    };

    this.$scope.cancel = () => {
      this.$mdDialog.cancel();
    };

    this.$scope.addTransaction = () => {
      this.$mdDialog.hide(this.$scope.transaction);
    };
  }
}

export default TransactionCreatingController;
