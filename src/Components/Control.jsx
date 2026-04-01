import React from 'react';
import './Control.css';

const ALGORITHMS = [
  { key: 'bubbleSort', label: 'Bubble' },
  { key: 'selectionSort', label: 'Selection' },
  { key: 'insertionSort', label: 'Insertion' },
  { key: 'quickSort', label: 'Quick' },
  { key: 'mergeSort', label: 'Merge' },
];

function Control({
  handleNewArrayGenrate,
  handleSelectAlgorithm,
  handleStartSort,
  setSpeed,
  isSorting,
  userInuptArray,
  setUserInuptArray,
  reSet,
  selectedSorting,
}) {
  return (
    <div className="controls-card">
      {/* Top Row: Input + Action Buttons */}
      <div className="controls-top-row">
        <div className="input-wrapper">
          <input
            type="text"
            value={userInuptArray}
            onChange={(e) => setUserInuptArray(e.target.value)}
            className="control-input"
            placeholder="Enter array (1–400)"
            disabled={isSorting}
          />
          <div className="info-icon-wrapper">
            <i className="info-icon">i</i>
            <span className="tooltip-text">
              Enter numbers separated by commas (e.g. 10,20,30…)
            </span>
          </div>
        </div>

        <button
          className="gradient-btn"
          onClick={handleNewArrayGenrate}
          disabled={isSorting}
        >
          Generate Array
        </button>

        <button
          className="gradient-btn sort-btn"
          onClick={handleStartSort}
          disabled={isSorting || !selectedSorting}
        >
          ▶ Sort
        </button>

        <button
          className="gradient-btn reset-btn"
          onClick={reSet}
          disabled={isSorting}
        >
          Reset
        </button>
      </div>

      {/* Algorithm Pills */}
      <div className="algo-section">
        <p className="algo-section-label">Choose Algorithm</p>
        <div className="algo-pills">
          {ALGORITHMS.map(({ key, label }) => (
            <button
              key={key}
              className={`pill-btn ${selectedSorting === key ? 'active' : ''}`}
              onClick={() => handleSelectAlgorithm(key)}
              disabled={isSorting}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Speed + Sort */}
      <div className="bottom-row">
        <div className="speed-control">
          <span className="speed-label">Speed</span>
          <input
            type="range"
            min="10"
            max="200"
            className="speed-slider"
            onChange={(e) => setSpeed(200 - Number(e.target.value))}
            disabled={isSorting}
          />
          <div className="speed-ticks">
            <span>Slow</span>
            <span>Medium</span>
            <span>Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control;