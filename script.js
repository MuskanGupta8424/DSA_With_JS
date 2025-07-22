// 145 =1!+4!+5!
// 1! =1
// 4! =4*3*2*1=24
// 5! =5*4*3*2*1=120
// 1!+4!+5!=145 

//Strong number   

// var pr = Number(prompt("Enter the number"));

// if(pr === null){
//     console.log("cancelled"); 
// }
// else{
//     if(isNaN(pr) || pr<0){
//         console.log("Please enter a valid number")
//     }
//     if(pr>0){
//         let copy=pr;
//         let sum =0;
//         while(pr>0){
//             let rem = pr%10;
// let fact=1;
// for(let i=1; i<=rem; i++)
// {
//     fact = fact*i;
// }
// sum = sum +fact;
//             pr=Math.floor(pr/10);

//         }

//         if(copy===sum){
//             console.log("is strong number")
//         }else{
//             console.log("is not strong number")
//         }

//     }
// }


//sum of digits
// var pr = Number(prompt("Enter the number"));



// if(pr === null){
//     console.log("cancelled"); 
// }
// else{
//     if(isNaN(pr) || pr<0){
//         console.log("Please enter a valid number")
//     }
//     if(pr>0){
//         let sum=0;
//         while(pr>0){
//             let rem = pr%10;
//             sum = sum +rem;
//             pr= Math.floor(pr/10)
//         }
//         console.log("sum of digits", sum)
//     }
// }
   

//reverse of the number
// var pr = Number(prompt("Enter the number"));

// if(pr === null){
//     console.log("cancelled"); 
// }
// else{
//     if(isNaN(pr) || pr<0){
//         console.log("Please enter a valid number")
//     }
//     if(pr>0){
//         let rev =0;
//         while(pr>0){
//             let rem = pr%10;
//             rev = rev*10 +rem
//             pr = Math.floor(pr/10);
//         }
//         console.log("reverse of the number", rev)
//     }
// }



//prime number


// var pr = Number(prompt("Enter the number"));

// if(pr === null){
//     console.log("cancelled"); 
// }
// else{
//     if(isNaN(pr) || pr<0){
//         console.log("Please enter a valid number")
//     }
//     if(pr>0){
//         if(isPrime(pr)){
//             console.log("is prime number")
//         }else{
//             console.log("is not prime number")
//         }
//     }
// }



// function isPrime(pr){
//     if (pr===1) return false;
//     if(pr===2) return true;
//     if(pr%2===0) return false;

//     for(let i =3; i<= Math.floor(Math.sqrt(pr)); i+=2){
//         if(pr%i===0) return false;
//         continue;
//     }
//     return true;
// }

//sum of n natural numbers


// var pr = Number(prompt("Enter the number"));

// if(pr === null){
//     console.log("cancelled"); 
// }
// else{
//     if(isNaN(pr) || pr<0){
//         console.log("Please enter a valid number")
//     }
//     if(pr>0){
//         let sum =0;
//         for(let i=1; i<=pr; i++){
//            sum = sum +i;
//         }
//         console.log("sum of the number", sum)
//     }
// }

//factorial of a number

// var pr = Number(prompt("Enter the number"));

// if(pr === null){
//     console.log("cancelled"); 
// }
// else{
//     if(isNaN(pr) || pr<0){
//         console.log("Please enter a valid number")
//     }
//     if(pr>0){
//         let fact =1;
//         for(let i=1; i<=pr; i++){
//             fact =fact*i;
//         }
//         console.log("factorial of the number", fact)
//     }
// }



//factors of a number

// var pr = Number(prompt("Enter the number"));

// if(pr === null){
//     console.log("cancelled"); 
// }
// else{
//     if(isNaN(pr) || pr<0){
//         console.log("Please enter a valid number")
//     }
//     if(pr>0){
//         for(let i=1; i<=Math.floor(pr/2); i++){
//            if(pr%i ===0){
//             console.log(i, "is a factor of", pr);
//            } 
//         }
//         console.log(pr, "is a factor of", pr);
//     }
// }



//Repeat Hello
// var pr = Number(prompt("Enter the number"));

// while(pr!==0){
//     console.log("hello");
//  pr = Number(prompt("Enter the number"));
// }

