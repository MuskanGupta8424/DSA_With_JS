const prompt = require("prompt-sync")();

let pr = prompt("Enter number");

let n = Number(pr);

// console.log("right angle triangle");

// *
// * *
// * * *
// * * * *
// * * * * *

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//right angle triangle

// * * * * *
// * * * *
// * * *
// * *
// *
// console.log("inverted right angle triangle");

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

//mirror right angle triangle of the pattern
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// console.log("mirror right angle triangle");

// for(let i=1; i<=n; i++){
//     for(j=1; j<=n-i; j++){
//         process.stdout.write("  ");
//     }
//     for(j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// * * * * * i=1, j=5, space=0 n+i-1 =5-1+1
//   * * * * i=2, j=4, space=1 5-2+1=4 *
//     * * * i=3, j=3, space=2 5-3+1=3
//       * * i=4, j=2, space=3 5-4+1=2
//         * i=5, j=1, space=4 5-5+1=1

// console.log(" inverted right angle triangle");

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i-1; j++){
//         process.stdout.write("  ");
//     }

//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write("* ")
//     }

//     console.log();
// }

//      *
//    * * *
//  * * * * *
//* * * * * * *
// console.log("Trinagle")

// for(let i=1; i<=n; i++){
// for(let j=1; j<=n-i; j++){
//     process.stdout.write("  ");
// }
//     for(j=1; j<=i; j++)
//     {
//         process.stdout.write(" * ");
//     }

//     console.log();
// }

// X pattern

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == (n + 1)) {
//       process.stdout.write("* ");
//     } else process.stdout.write("  ");
//   }
//   console.log();
// }

// V Pattern

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n; j++) {
//     if (i == j || i + j == 2 * n) {
//       process.stdout.write("* ");
//     } else process.stdout.write("  ");
//   }
//   console.log();
// }


// Z pattern

// for(let i=1; i<=n;i++){
//   for(let j=1; j<=n; j++){
//     if(i+j==n+1 || i==1 || i==n){
//       process.stdout.write("* ");
//     }else{
//       process.stdout.write("  ");
//     }
//   }
//     console.log();
// }

// Hollow Square Pattern
// * * * * *
// *       *    
// *       *
// *       *    
// * * * * *


// for(let i=1; i<=n; i++){

//   for(let j=1; j<=n; j++){
//     if(i==1 || i==n || j==1 ||j==n ){
//       process.stdout.write("* ");
//     }else{
//       process.stdout.write("  ")
//     }
//   }
//   console.log();
// }

// Hollow Right Angle Triangle Pattern
// *
// * *
// *   *
// *     *
// * * * * *

// for(let i=1; i<=n; i++){
//   for(let j=1 ; j<=n; j++){
//     if(i==n || i==j || j==1){
//       process.stdout.write("* ");
//     }else{
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

  
// Hollow Mirror Right Angle Triangle Pattern

// for(let i=1; i<=n; i++){
//   // Print leading spaces
//   for(let j=1; j<=n-i+1; j++){
//     process.stdout.write("");
//   }
//   for(let j=1; j<=n; j++){
//     // Print stars on the first row, last row, or the diagonal
//     if(i==n || j==n || j==n-i + 1){
//       process.stdout.write(j + " ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }

//   console.log();
// }


// Pyramid Pattern of Alphabets

// for(let i=1; i<=n; i++){
// let ascii = 65;

//   for(let j=1; j<=i; j++){
//     process.stdout.write(" ")
//   }
//    for(let j=1; j<=n-i+1; j++){
//   process.stdout.write(String.fromCharCode(ascii) + " ");
//   ascii++;
//       // process.stdout.write(j.toString()); // convert number to string

//   }
//   console.log();
// }

//Diamond Pattern of Alphabets


// for(let i=1; i<=n; i++){
//   let ascii = 65;
//   for(let j=1; j<=n-i+1; j++){
//     process.stdout.write(" ")
//   }
//   for(let j=1; j<=i; j++){
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

// for(let i=n-1; i>=1; i--){
//   let ascii = 65;
//   for(let j=1; j<=n-i+1; j++){
//     process.stdout.write(" ")
//   } 
//   for(let j=1; j<=i; j++){
//     process.stdout.write(String.fromCharCode(ascii) + " ");   
//     ascii++;
//   }
//   console.log();
// }

