class LandingService {
  transactions = [
    {
      title: 'กระเพราไก่ไข่ดาว',
      type: 'Food',
      price: 10.0,
      isPrepareDelete: false
    }
  ];

  getTransactions = () => {
    return this.transactions;
  };

  getTransaction = (index) => {
    return this.transactions[index];
  };

  addTransaction = (transaction) => {
    this.transactions.push(transaction);
  };

  deleteTransaction = (index) => {
    this.transactions.splice(index, 1);
  };

  updatePrepareDelete = (index, isPrepareDelete) => {
    this.transactions[index] = isPrepareDelete;
  };
}

export default LandingService;
