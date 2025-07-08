// export const quickSort = (array) => {
//   const animations = [];
//   const arr = array.slice();

//   const partition = (arr, low, high) => {
//     let pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//       animations.push([j, high, false]); // compare
//       if (arr[j] < pivot) {
//         i++;
//         animations.push([i, j, true]); // swap
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//     animations.push([i + 1, high, true]); // final swap
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
//   };

//   const quickSortHelper = (arr, low, high) => {
//     if (low < high) {
//       const pi = partition(arr, low, high);
//       quickSortHelper(arr, low, pi - 1);
//       quickSortHelper(arr, pi + 1, high);
//     }
//   };

//   quickSortHelper(arr, 0, arr.length - 1);
//   return animations;
// };



export const quickSort = (array) => {
  const animations = [];
  const arr = [...array];

  const partition = (low, high) => {
    let pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
      animations.push([j, high, false]); // compare with pivot
      if (arr[j] < pivot) {
        animations.push([i, j, true]); // swap
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    animations.push([i, high, true]); // final swap
    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
  };

  const quickSortHelper = (low, high) => {
    if (low < high) {
      let pi = partition(low, high);
      quickSortHelper(low, pi - 1);
      quickSortHelper(pi + 1, high);
    }
  };

  quickSortHelper(0, arr.length - 1);
  return animations;
};
