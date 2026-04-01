import React from 'react';
import './InfoPanel.css';

const COMPLEXITY_DATA = {
  bubbleSort: {
    name: 'Bubble Sort',
    best: 'O(n)',
    average: 'O(n²)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'Yes',
  },
  mergeSort: {
    name: 'Merge Sort',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
    space: 'O(n)',
    stable: 'Yes',
  },
  selectionSort: {
    name: 'Selection Sort',
    best: 'O(n²)',
    average: 'O(n²)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'No',
  },
  quickSort: {
    name: 'Quick Sort',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n²)',
    space: 'O(log n)',
    stable: 'No',
  },
  insertionSort: {
    name: 'Insertion Sort',
    best: 'O(n)',
    average: 'O(n²)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'Yes',
  },
};

const InfoPanel = ({ selectedSorting, comparisons, swaps, isSorting }) => {
  const data = COMPLEXITY_DATA[selectedSorting];

  if (!data) return null;

  return (
    <div className="info-panel-wrapper">
      {/* Complexity Card */}
      <div className="info-card complexity-card">
        <div className="info-card-header">
          <span className="info-card-icon">⚡</span>
          <h3>{data.name}</h3>
        </div>
        <div className="complexity-grid">
          <div className="complexity-item">
            <span className="complexity-label">Best</span>
            <span className="complexity-value best">{data.best}</span>
          </div>
          <div className="complexity-item">
            <span className="complexity-label">Average</span>
            <span className="complexity-value average">{data.average}</span>
          </div>
          <div className="complexity-item">
            <span className="complexity-label">Worst</span>
            <span className="complexity-value worst">{data.worst}</span>
          </div>
          <div className="complexity-item">
            <span className="complexity-label">Space</span>
            <span className="complexity-value space">{data.space}</span>
          </div>
          <div className="complexity-item">
            <span className="complexity-label">Stable</span>
            <span
              className={`complexity-value ${
                data.stable === 'Yes' ? 'stable-yes' : 'stable-no'
              }`}
            >
              {data.stable}
            </span>
          </div>
        </div>
      </div>

      {/* Step Counter Card */}
      <div className="info-card counter-card">
        <div className="info-card-header">
          <span className="info-card-icon">📊</span>
          <h3>Step Counter</h3>
        </div>
        <div className="counters-row">
          <div className="counter-box">
            <span className="counter-number comparisons-num">{comparisons}</span>
            <span className="counter-label">Comparisons</span>
            {isSorting && <span className="counter-pulse" />}
          </div>
          <div className="counter-divider" />
          <div className="counter-box">
            <span className="counter-number swaps-num">{swaps}</span>
            <span className="counter-label">Swaps</span>
            {isSorting && <span className="counter-pulse" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
