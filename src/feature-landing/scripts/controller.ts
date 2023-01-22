import Transaction from './model';

interface ILandingController {
  transactions: Transaction[];
}

class LandingController implements ILandingController {
  transactions: Transaction[];

  constructor() {
    this.transactions = [
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      },
      {
        title: 'กระเพราไก่ไข่ดาว',
        type: 'Food',
        price: 10.0
      }
    ];
  }
}

export default LandingController;
