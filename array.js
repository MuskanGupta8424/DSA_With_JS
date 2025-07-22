let prompt = require("prompt-sync")();

// let arr =[3,5,1,8, 10, 10, 10];
// let max= Math.max(arr[0], arr[1]);
// let smax= Math.min(arr[0],arr[1]);

// for(let i=2; i<arr.length; i++){
//     if(arr[i]>max){
//         smax = max;
//         max= arr[i];
//     } else if(arr[i]>smax && arr[i] !=max ){
//         smax = arr[i];
//     }
// }

// console.log("smax ", smax, "max ", max);




// let arr = [10,20,30,40, 60,50];

//with extra space

// let temp = new Array(arr.length);

// let j = 0;
// for(let i=arr.length-1; i>=0; i--){
//  temp[j] = arr[i];
//  j++;
// }
// console.log(temp);


// without extra space

// let i = 0, j = arr.length - 1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }

// console.log(arr);



// left rotation by 1 element


let arr=[1,2,3,4,5,6];

let k = Number(prompt("Enter number of rotations: "));    

 k = k % arr.length;

// for(let j=0; j<k; j++ ){
//     let copy = arr[0];

//      for(let i=0; i<arr.length-1;i++){
//     arr[i]= arr[i+1];
// }

// arr[arr.length-1]= copy;

// }

for(let j=0; j<k; j++ ){
    let copy = arr[arr.length-1];
     for(let i=arr.length-1; i>0;i--){
    arr[i]= arr[i-1];
 
}
arr[0]= copy;

}
console.log(arr);

