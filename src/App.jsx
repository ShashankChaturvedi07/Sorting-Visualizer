import React, { useEffect, useState } from 'react'
import Bar from  './Components/Bar'
import Control from './Components/Control'
import { bubbleSort } from './Algorithms/BubbleSort'
import { mergeSort } from './Algorithms/MergeSort';
import { selectionSort } from './Algorithms/SelectionSort';
import { quickSort } from './Algorithms/QuickSort';
import { insertionSort } from './Algorithms/InsertionSort';

function App() {
  // States for array, user input, speed control, sorting control
  const [array, setArray] = useState([]);
  const [userInuptArray, setUserInuptArray] = useState('');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState('');

  // Whenever user input changes, parse it and update the array
  useEffect(() => {
    const userInput = userInuptArray.split(',');
    const filteredInput = userInput
      .filter(item => !isNaN(item) && Number.isInteger(parseFloat(item))) // Only numbers
      .map(item => Number(item) <= 400 && Number(item)); // Limit max value to 400
    setArray([...filteredInput]);
  }, [userInuptArray]);

  // Generate new random array
  const handleNewArrayGenrate = () => {
    const newArray = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 400)
    );
    setArray(newArray);
  };

  // Reset everything
  const reSet = () => {
    setArray([]);
    setSelectedSorting('');
  };

  // Trigger sorting based on selected method
  const handleSorting = (e) => {
    const sortingMethod = e.target.value;
    setSelectedSorting(sortingMethod);
    setIsSorting(true);

    let animationArr = [];

    switch (sortingMethod) {
      case 'bubbleSort':
        animationArr = bubbleSort(array);
        bubbleAnimation(animationArr);
        break;

      case 'mergeSort':
        animationArr = mergeSort(array);
        animateMergeSorting(animationArr);
        break;

      case 'selectionSort':
        animationArr = selectionSort(array);
        animateSelectionSorting(animationArr);
        break;

      case 'quickSort':
        animationArr = quickSort(array);
        animateQuickSort(animationArr);
        break;

      case 'insertionSort':
        animationArr = insertionSort(array);
        animateInsertionSort(animationArr);
        break;

      default:
        break;
    }
  };

  //  Bubble Sort Animation
  function bubbleAnimation(animation) {
  const barEle = document.getElementsByClassName('bar');

  for (let i = 0; i < animation.length; i++) {
    let [barOneInd, bartwoInd, swap] = animation[i];
    let barOne = barEle[barOneInd];
    let barTwo = barEle[bartwoInd];

    setTimeout(() => {
      // Highlight compared bars
      barOne.style.backgroundColor = swap ? 'red' : 'yellow';
      barTwo.style.backgroundColor = swap ? 'red' : 'yellow';

      // Perform swap if required
      if (swap) {
        const heightTemp = barOne.style.height;
        barOne.style.height = barTwo.style.height;
        barTwo.style.height = heightTemp;

        const content = barOne.innerText;
        barOne.innerText = barTwo.innerText;
        barTwo.innerText = content;
      }

      // Reset color only if not the last animation
      if (i !== animation.length - 1) {
        setTimeout(() => {
          barOne.style.backgroundColor = 'blue';
          barTwo.style.backgroundColor = 'blue';
        }, speed);
      }
    }, i * speed);
  }

  // At the end, make all bars green to show sorting complete
  setTimeout(() => {
    for (let j = 0; j < barEle.length; j++) {
      setTimeout(() => {
        barEle[j].style.backgroundColor = 'green';
      }, j * speed);
    }
    setIsSorting(false);
    }, animation.length * speed);
  }


  //  Merge Sort Animation
  const animateMergeSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = bars[barOneIdx];
        const barTwo = bars[barTwoIdx];
        const color = i % 3 === 0 ? "yellow" : "blue";

        setTimeout(() => {
          barOne.style.backgroundColor = color;
          barTwo.style.backgroundColor = color;
        }, i * speed);
      } else {
        // Actual height update
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`;
          barOne.innerHTML = newHeight;
        }, i * speed);
      }
    }

    // Final green coloring
    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  //  Selection Sort Animation
  const animateSelectionSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, isSwap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];

      setTimeout(() => {
        barOne.style.backgroundColor = isSwap ? "red" : "yellow";
        barTwo.style.backgroundColor = isSwap ? "red" : "yellow";

        if (isSwap) {
          // Swap bar heights and texts
          const tempHeight = barOne.style.height;
          const tempText = barOne.innerText;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempText;
        }

        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, speed);

      }, i * speed);
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  // Quick Sort Animation
  const animateQuickSort = (animations) => {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];

      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";

        if (swap) {
          const heightTemp = barOne.style.height;
          const textTemp = barOne.innerText;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = textTemp;
        }

        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, speed);
      }, i * speed);
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  //  Insertion Sort Animation
  const animateInsertionSort = (animations) => {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
      const [a, b, swap] = animations[i];

      setTimeout(() => {
        if (swap) {
          const barA = bars[a];
          const barB = bars[b];
          barA.style.backgroundColor = "red";
          barB.style.backgroundColor = "red";

          const tempHeight = barA.style.height;
          const tempText = barA.innerText;
          barA.style.height = barB.style.height;
          barB.style.height = tempHeight;
          barA.innerText = barB.innerText;
          barB.innerText = tempText;

          setTimeout(() => {
            barA.style.backgroundColor = "blue";
            barB.style.backgroundColor = "blue";
          }, speed);
        } else {
          // Direct key insert visualization
          const barA = bars[a];
          barA.style.height = `${b}px`;
          barA.innerText = b;
          barA.style.backgroundColor = "yellow";
          setTimeout(() => {
            barA.style.backgroundColor = "blue";
          }, speed);
        }
      }, i * speed);
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  //  UI Components: Title + Control Panel + Bar Display
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Sorting Visualization Tool</h1>
      <Control
        handleNewArrayGenrate={handleNewArrayGenrate}
        handleSorting={handleSorting}
        userInuptArray={userInuptArray}
        setUserInuptArray={setUserInuptArray}
        setSpeed={setSpeed}
        reSet={reSet}
        isSorting={isSorting}
        speed={speed}
        selectedSorting={selectedSorting}
      />
      <Bar array={array} />
    </div>
  );
}

export default App;
