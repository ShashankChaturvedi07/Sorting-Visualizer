// export function bubbleSort(array) {
//   let animation = [];
//   let tempArray = [...array];

//   for (let i = 0; i < tempArray.length; i++) {
//     for (let j = 0; j < tempArray.length - 1; j++) {
//       if (tempArray[j] > tempArray[j + 1]) {
//         animation.push([j, j + 1, true]);

//         let temp = tempArray[j];
//         tempArray[j] = tempArray[j + 1];
//         tempArray[j + 1] = temp;
//       } else {
//         animation.push([j, j + 1, false]);
//       }
//     }
//   }
//   // console.log(tempArray)
//   // console.log(animation)
//   return animation;
// }



// export function bubbleSort(array) {
//   let animations = [];
//   let tempArray = [...array];

//   for (let i = 0; i < tempArray.length - 1; i++) {
//     for (let j = 0; j < tempArray.length - i - 1; j++) {
//       if (tempArray[j] > tempArray[j + 1]) {
//         animations.push([j, j + 1, true]);
//         [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
//       } else {
//         animations.push([j, j + 1, false]);
//       }
//     }
//   }

//   return animations;
// }


export function bubbleSort(array) {
  let animation = [];
  let tempArray = [...array];

  for (let i = 0; i < tempArray.length - 1; i++) {
    for (let j = 0; j < tempArray.length - 1 - i; j++) {
      if (tempArray[j] > tempArray[j + 1]) {
        animation.push([j, j + 1, true]); // Swap
        let temp = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
      } else {
        animation.push([j, j + 1, false]); // No Swap
      }
    }
  }

  return animation;
}
