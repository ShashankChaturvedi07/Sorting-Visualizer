import React, { useEffect, useState } from 'react';
import './App.css';
import Bar from './Components/Bar';
import Control from './Components/Control';
import InfoPanel from './Components/InfoPanel';
import { bubbleSort } from './Algorithms/BubbleSort';
import { mergeSort } from './Algorithms/MergeSort';
import { selectionSort } from './Algorithms/SelectionSort';
import { quickSort } from './Algorithms/QuickSort';
import { insertionSort } from './Algorithms/InsertionSort';

// ─── Bar visual state helper ───
// Centralises all bar colour/glow changes so animation logic stays clean.
function setBarStyle(bar, state) {
  if (!bar) return;
  switch (state) {
    case 'default':
      bar.style.background = 'linear-gradient(to top, #4facfe, #00f2fe)';
      bar.style.boxShadow = 'none';
      break;
    case 'comparing':
      bar.style.background = '#ffd700';
      bar.style.boxShadow = '0 0 12px rgba(255,200,0,0.8)';
      break;
    case 'swapping':
      bar.style.background = '#ff3366';
      bar.style.boxShadow = '0 0 12px rgba(255,50,50,0.8)';
      break;
    case 'sorted':
      bar.style.background = '#00f260';
      bar.style.boxShadow = '0 0 15px rgba(0,242,96,0.5)';
      break;
    default:
      break;
  }
}

function App() {
  // Core states
  const [array, setArray] = useState([]);
  const [userInuptArray, setUserInuptArray] = useState('');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState('');

  // Step counter states
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  // Parse user input into array
  useEffect(() => {
    const userInput = userInuptArray.split(',');
    const filteredInput = userInput
      .filter((item) => !isNaN(item) && Number.isInteger(parseFloat(item)))
      .map((item) => Number(item) <= 400 && Number(item));
    setArray([...filteredInput]);
  }, [userInuptArray]);

  // ─── Actions ───

  const handleNewArrayGenrate = () => {
    if (isSorting) return;
    const newArray = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 400)
    );
    setArray(newArray);
    setComparisons(0);
    setSwaps(0);
  };

  const reSet = () => {
    if (isSorting) return;
    setArray([]);
    setSelectedSorting('');
    setComparisons(0);
    setSwaps(0);
  };

  // Select algorithm (pill click) — only sets selection, doesn't sort
  const handleSelectAlgorithm = (algo) => {
    if (isSorting) return;
    setSelectedSorting(algo);
    setComparisons(0);
    setSwaps(0);
  };

  // Start sorting with the currently selected algorithm
  const handleStartSort = () => {
    if (isSorting || !selectedSorting || array.length === 0) return;
    setIsSorting(true);
    setComparisons(0);
    setSwaps(0);

    let animationArr = [];

    switch (selectedSorting) {
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

  // ═══════════════════════════════════════
  //  ANIMATION FUNCTIONS
  //  (sorting logic unchanged — only visual
  //   colours updated via setBarStyle helper)
  // ═══════════════════════════════════════

  // ── Bubble Sort ──
  function bubbleAnimation(animation) {
    const barEle = document.getElementsByClassName('bar');
    let runningComparisons = 0;
    let runningSwaps = 0;

    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, bartwoInd, swap] = animation[i];
      let barOne = barEle[barOneInd];
      let barTwo = barEle[bartwoInd];

      setTimeout(() => {
        runningComparisons++;
        setComparisons(runningComparisons);
        if (swap) {
          runningSwaps++;
          setSwaps(runningSwaps);
        }

        setBarStyle(barOne, swap ? 'swapping' : 'comparing');
        setBarStyle(barTwo, swap ? 'swapping' : 'comparing');

        if (swap) {
          const heightTemp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }

        if (i !== animation.length - 1) {
          setTimeout(() => {
            setBarStyle(barOne, 'default');
            setBarStyle(barTwo, 'default');
          }, speed);
        }
      }, i * speed);
    }

    setTimeout(() => {
      for (let j = 0; j < barEle.length; j++) {
        setTimeout(() => {
          setBarStyle(barEle[j], 'sorted');
        }, j * speed);
      }
      setIsSorting(false);
    }, animation.length * speed);
  }

  // ── Merge Sort ──
  const animateMergeSorting = (animations) => {
    const bars = document.getElementsByClassName('bar');
    let runningComparisons = 0;
    let runningSwaps = 0;

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = bars[barOneIdx];
        const barTwo = bars[barTwoIdx];
        const isCompare = i % 3 === 0;

        setTimeout(() => {
          if (isCompare) {
            runningComparisons++;
            setComparisons(runningComparisons);
            setBarStyle(barOne, 'comparing');
            setBarStyle(barTwo, 'comparing');
          } else {
            setBarStyle(barOne, 'default');
            setBarStyle(barTwo, 'default');
          }
        }, i * speed);
      } else {
        setTimeout(() => {
          runningSwaps++;
          setSwaps(runningSwaps);
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`;
          barOne.innerHTML = newHeight;
        }, i * speed);
      }
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          setBarStyle(bars[j], 'sorted');
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  // ── Selection Sort ──
  const animateSelectionSorting = (animations) => {
    const bars = document.getElementsByClassName('bar');
    let runningComparisons = 0;
    let runningSwaps = 0;

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, isSwap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];

      setTimeout(() => {
        if (isSwap) {
          runningSwaps++;
          setSwaps(runningSwaps);
        } else {
          runningComparisons++;
          setComparisons(runningComparisons);
        }

        setBarStyle(barOne, isSwap ? 'swapping' : 'comparing');
        setBarStyle(barTwo, isSwap ? 'swapping' : 'comparing');

        if (isSwap) {
          const tempHeight = barOne.style.height;
          const tempText = barOne.innerText;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempText;
        }

        setTimeout(() => {
          setBarStyle(barOne, 'default');
          setBarStyle(barTwo, 'default');
        }, speed);
      }, i * speed);
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          setBarStyle(bars[j], 'sorted');
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  // ── Quick Sort ──
  const animateQuickSort = (animations) => {
    const bars = document.getElementsByClassName('bar');
    let runningComparisons = 0;
    let runningSwaps = 0;

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];

      setTimeout(() => {
        if (swap) {
          runningSwaps++;
          setSwaps(runningSwaps);
        } else {
          runningComparisons++;
          setComparisons(runningComparisons);
        }

        setBarStyle(barOne, swap ? 'swapping' : 'comparing');
        setBarStyle(barTwo, swap ? 'swapping' : 'comparing');

        if (swap) {
          const heightTemp = barOne.style.height;
          const textTemp = barOne.innerText;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = textTemp;
        }

        setTimeout(() => {
          setBarStyle(barOne, 'default');
          setBarStyle(barTwo, 'default');
        }, speed);
      }, i * speed);
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          setBarStyle(bars[j], 'sorted');
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  // ── Insertion Sort ──
  const animateInsertionSort = (animations) => {
    const bars = document.getElementsByClassName('bar');
    let runningComparisons = 0;
    let runningSwaps = 0;

    for (let i = 0; i < animations.length; i++) {
      const [a, b, swap] = animations[i];

      setTimeout(() => {
        if (swap) {
          runningComparisons++;
          runningSwaps++;
          setComparisons(runningComparisons);
          setSwaps(runningSwaps);

          const barA = bars[a];
          const barB = bars[b];
          setBarStyle(barA, 'swapping');
          setBarStyle(barB, 'swapping');

          const tempHeight = barA.style.height;
          const tempText = barA.innerText;
          barA.style.height = barB.style.height;
          barB.style.height = tempHeight;
          barA.innerText = barB.innerText;
          barB.innerText = tempText;

          setTimeout(() => {
            setBarStyle(barA, 'default');
            setBarStyle(barB, 'default');
          }, speed);
        } else {
          const barA = bars[a];
          barA.style.height = `${b}px`;
          barA.innerText = b;
          setBarStyle(barA, 'comparing');
          setTimeout(() => {
            setBarStyle(barA, 'default');
          }, speed);
        }
      }, i * speed);
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          setBarStyle(bars[j], 'sorted');
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  // ═══════════════════════════════════════
  //  RENDER
  // ═══════════════════════════════════════

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Sorting Visualizer</h1>
        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode((prev) => !prev)}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <Control
        handleNewArrayGenrate={handleNewArrayGenrate}
        handleSelectAlgorithm={handleSelectAlgorithm}
        handleStartSort={handleStartSort}
        userInuptArray={userInuptArray}
        setUserInuptArray={setUserInuptArray}
        setSpeed={setSpeed}
        reSet={reSet}
        isSorting={isSorting}
        speed={speed}
        selectedSorting={selectedSorting}
      />

      <InfoPanel
        selectedSorting={selectedSorting}
        comparisons={comparisons}
        swaps={swaps}
        isSorting={isSorting}
      />

      <Bar array={array} />
    </div>
  );
}

export default App;
