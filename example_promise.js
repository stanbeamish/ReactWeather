// function addPromise(a, b) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//        if(typeof a === 'number' && typeof b === 'number') {
//          resolve(a+b);
//        } else {
//          reject('One or both arguments are not a number!');
//        }
//     }, 500);
//   });
// }
//
// addPromise(4,5).then(function(sum) {
//   console.log("Promise success: ", sum);
// }, function(error) {
//   console.log("Promise error: ", error);
// });
//
// addPromise('Hallo',5).then(function(sum) {
//   console.log("Promise success: ", sum);
// }, function(error) {
//   console.log("Promise error: ", error);
// });
