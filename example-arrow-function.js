// var names = [
//   'Pizza',
//   'Orange',
//   'Lemon'
// ];
//
// // names.forEach(function(name) {
// //   console.log('forEach: ', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('(): ', name);
// // });
// //
// // names.forEach((name) => console.log(name));
//
// // var returnMe = (name) => name + "!";
// // console.log(returnMe("Sepp"));
//
// var person = {
//   name: 'Sepp',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// function add(a, b) {
//    return a + b;
// }
//
var addExpression = (a, b) => a+b;
console.log("Expr: ", addExpression(3,1));

var addStatement = (a, b) => {
  return a+b;
};
console.log("State: ", addStatement(3,-1));
