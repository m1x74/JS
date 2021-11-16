// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let a=[2,17,13,6,22,31,45,66,100,-18];
// 1.
// i=0;
// while (i<a.length){
//     console.log(a[i])
//     i++
// }
// 1.reverse
// i=a.length-1;
// while (i>=0){
//     console.log(a[i])
//     i--
//
// }



// 2.
// for (let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// // 2.reverse
// for (let i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }

// 3.
// i=0;
 // while (i<a.length){
 //     if (i%2 !==0){
 //         console.log(a[i])
 //     }
 //     i++
 // }
// 3.reverse
// i=a.length-1;
//  while (i>=0){
//      if (i%2 !==0){
//          console.log(a[i])
//      }
//      i--
//  }

// .4
// for (let i=0;i<a.length;i++){
//     if (i%2!==0){
//         console.log(a[i])
//     }
// }
// .4reverse
// for (let i=a.length-1;i>=0;i--){
//     if (i%2!==0){
//         console.log(a[i])
//     }
// }

// 5.
// i=0;
//  while (i<a.length){
//      if (i%2 ===0){
//          console.log(a[i])
//      }
//      i++
//  }
// 5.reverse
// i=a.length-1;
//  while (i>=0){
//      if (i%2 ===0){
//          console.log(a[i])
//      }
//      i--
//  }

// .6
// for (let i=0;i<a.length;i++){
//     if (i%2===0){
//         console.log(a[i])
//     }
// }
// .6reverse
// for (let i=a.length-1;i>=0;i--){
//     if (i%2===0){
//         console.log(a[i])
//     }
// }

// .7
//  for (let i=0;i<a.length;i++){
//      if (a[i]%3===0){
//          a[i]='Okten';
//          console.log(a[i])
//      }
//  }
// console.log(a)
// .7reverse
//  for (let i=a.length-1;i>=0;i--){
//      if (a[i]%3===0){
//          a[i]='Okten';
//      }
//      console.log(a[i])
//  }
// console.log(a)


// .8
// for (let i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }