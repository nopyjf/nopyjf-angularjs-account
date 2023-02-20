// describe('LandingController', () => {
//     let controller, serviceMock, mdDialogMock;

//     beforeEach(() => {
//       // Create a mock instance of LandingService
//       serviceMock = {
//         getTransactions: jasmine.createSpy('getTransactions'),
//         addTransaction: jasmine.createSpy('addTransaction')
//       };

//       // Create a mock instance of $mdDialog
//       mdDialogMock = {
//         show: jasmine.createSpy('show').and.returnValue({
//           then: (addTransactionComplete, closeDialog) => {
//             addTransactionComplete();
//           }
//         })
//       };

//       // Create a new instance of LandingController, passing in the mock dependencies
//       controller = new LandingController(serviceMock, mdDialogMock);
//     });

//     describe('getTransactions', () => {
//       it('should call the service to get transactions', () => {
//         controller.getTransactions();
//         expect(serviceMock.getTransactions).toHaveBeenCalled();
//       });
//     });

//     describe('displayDialog', () => {
//       it('should open a dialog when called', () => {
//         const ev = { some: 'event' };
//         controller.displayDialog(ev);
//         expect(mdDialogMock.show).toHaveBeenCalledWith(jasmine.objectContaining({
//           controller: 'TransactionCreatingController',
//           templateUrl: LandingTemplate,
//           parent: jasmine.any(Object),
//           targetEvent: ev,
//           clickOutsideToClose: true,
//           fullscreen: true
//         }));
//       });
//     });

//     describe('addTransactionComplete', () => {
//       it('should call the service to add the transaction', () => {
//         const transaction = { some: 'transaction' };
//         controller.addTransactionComplete(transaction);
//         expect(serviceMock.addTransaction).toHaveBeenCalledWith(transaction);
//       });
//     });

//     describe('closeDialog', () => {
//       it('should do nothing', () => {
//         spyOn(console, 'log');
//         controller.closeDialog();
//         expect(console.log).toHaveBeenCalledWith('ASDasd');
//       });
//     });
//   });
