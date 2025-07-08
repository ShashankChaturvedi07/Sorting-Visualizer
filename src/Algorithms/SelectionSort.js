// export const selectionSort = (array) => {
//   const animations = [];
//   const auxiliaryArray = array.slice();
//   for (let i = 0; i < auxiliaryArray.length; i++) {
//     let minIdx = i;
//     for (let j = i + 1; j < auxiliaryArray.length; j++) {
//       animations.push([i, j, false]);
//       if (auxiliaryArray[j] < auxiliaryArray[minIdx]) {
//         minIdx = j;
//       }
//     }
//     if (minIdx !== i) {
//       animations.push([i, minIdx, true]);
//       swap(auxiliaryArray, i, minIdx);
//     }
//   }
//   return animations;
// };
// const swap = (array, idx1, idx2) => {
//   let temp = array[idx1];
//   array[idx1] = array[idx2];
//   array[idx2] = temp;
// };


// export const selectionSort = (array) => {
//   const animations = [];
//   const arr = [...array];

//   for (let i = 0; i < arr.length; i++) {
//     let minIdx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       animations.push([minIdx, j, false]); // comparing
//       if (arr[j] < arr[minIdx]) {
//         minIdx = j;
//       }
//     }
//     if (minIdx !== i) {
//       animations.push([i, minIdx, true]); // swap
//       [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//     }
//   }

//   return animations;
// };




// export const selectionSort = (array) => {
//     const animations = [];
//     const auxiliaryArray = array.slice();
//     for (let i = 0; i < auxiliaryArray.length; i++) {
//         let minIdx = i;
//         for (let j = i + 1; j < auxiliaryArray.length; j++) {
//             animations.push([i, j, false]);
//             if (auxiliaryArray[j] < auxiliaryArray[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         if (minIdx !== i) {
//             animations.push([i, minIdx, true]);
//             swap(auxiliaryArray, i, minIdx);
//         }
//     }
//     return animations;
// };
// const swap = (array, idx1, idx2) => {
//     let temp = array[idx1];
//     array[idx1] = array[idx2];
//     array[idx2] = temp;
// };





// export const selectionSort = (array) => {
//   const animations = [];
//   const auxiliaryArray = array.slice();

//   for (let i = 0; i < auxiliaryArray.length; i++) {
//     let minIdx = i;
//     for (let j = i + 1; j < auxiliaryArray.length; j++) {
//       animations.push([i, j, false]); // comparison
//       if (auxiliaryArray[j] < auxiliaryArray[minIdx]) {
//         minIdx = j;
//       }
//     }

//     if (minIdx !== i) {
//       animations.push([i, minIdx, true]); // swap animation
//       [auxiliaryArray[i], auxiliaryArray[minIdx]] = [auxiliaryArray[minIdx], auxiliaryArray[i]];
//     }
//   }

//   return animations;
// };

// export const selectionSort = (array) => {
//   const animations = [];
//   const arr = [...array];

//   for (let i = 0; i < arr.length; i++) {
//     let minIdx = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       animations.push([minIdx, j, false]); // Compare minIdx with j
//       if (arr[j] < arr[minIdx]) {
//         minIdx = j;
//       }
//     }

//     if (minIdx !== i) {
//       animations.push([i, minIdx, true]); // Swap i with minIdx
//       [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//     }
//   }

//   return animations;
// };


export const selectionSort = (array) => {
  const animations = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      // Always push comparison
      animations.push([minIdx, j, false]);

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      // Push swap animation
      animations.push([i, minIdx, true]);
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return animations;
};
