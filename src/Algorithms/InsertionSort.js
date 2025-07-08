export const insertionSort = (array) => {
  const animations = [];
  const arr = array.slice();

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      animations.push([j + 1, j, true]); // swap animation
      arr[j + 1] = arr[j];
      j--;
    }

    animations.push([j + 1, key, false]); // insert key at right position
    arr[j + 1] = key;
  }

  return animations;
};