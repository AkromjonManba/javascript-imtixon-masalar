// function maxPrice(arr) {
//   var count = 0;
//   var str = "";
//   for (num of arr) {
//     if (num.price > count) {
//       count = num.price
//       str = num.name
//     }
//   }
//   return str;
// }     -------------------- for of bilan--------------------------

// function maxPrice(arr) {
//   var count = 0;
//   var str = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].price > count) {
//       count = arr[i].price
//       str = arr[i].name
//     }
//   }
//   return str;
// } -------------------- for i bilan--------------------------

  console.log(maxPrice([
    {name:"ali", price: 4},
    {name:"umid", price: 6},
    {name:"muhammad", price: 4}
  ]));