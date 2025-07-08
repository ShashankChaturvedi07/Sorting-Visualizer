// import React from 'react'

// const Control = ({GenerateNewArray, handleSorting, userInputArray, setUserInputArray}) => {
//   return (
//     <div className='controls-container'>

//         <div className='input-wrapper'>
//           <input type='text' value={userInputArray} onChange={(e) => setUserInputArray(e.target.value)} className='neumorphic-input' placeholder='Enter Your Array between 1-400' />
//           <div className='info-icon-wrapper'>
//             <i className='info-icon'>i</i>
//             <span className='tooltip-text'>Enter Your Array by separated by comma (e.g. 10,20,30..)</span>
//           </div>
//         </div>
        

//         <button className='neu-button' onClick={GenerateNewArray}>Generate New Array</button>
//         <select className='neumorphism-dropdown' onChange={handleSorting}>
//             <option value=''>Select Sorting Algorithms</option>
//             <option value='bubbleSort' >Bubble Sort</option>
//             <option value='mergeSort'>Merge Sort</option>
//             <option value='selectionSort'>Selection Sort</option>
//         </select>
//         <label>
//           Speed:
//             <input
//               type="range"
//               min="10"
//               max="200"
//               className="speedControl"
//               onChange={(e) => setSpeed(200 - e.target.value)}
//               disabled={isSorting}
//               />
//         </label>

//     </div>
//   )
// }

// export default Control


import React from 'react'

function Control({ handleNewArrayGenrate, setSpeed, isSorting, handleSorting, userInuptArray, setUserInuptArray, reSet, selectedSorting }) {
    return (
        <div className='controls-container'>
            <div className="input-wrapper">
                <input type="text" value={userInuptArray} onChange={(e) => setUserInuptArray(e.target.value)} className="neumorphic-input" placeholder="Enter your Array between 1-400" />
                <div className="info-icon-wrapper">
                    <i className="info-icon">i</i>
                    <span className="tooltip-text">Enter your Array separated by comma(e.g. 10,20,30...)</span>
                </div>
            </div>
            <button className='neu-button' onClick={handleNewArrayGenrate}>Generate New Array</button>
            <button className="neu-button" onClick={reSet} >
                Reset
            </button>
            <select className='neumorphism-dropdown' value={selectedSorting} onChange={handleSorting}>
                <option value=''>Select Sorting</option>
                <option value='bubbleSort'>Bubble Sorting</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="selectionSort">SelectionSort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="insertionSort">Insertion Sort</option>
            </select>
            <label>
                Speed:
                <input
                    type="range"
                    min="10"
                    max="200"
                    className="speedControl"
                    onChange={(e) => setSpeed(200 - e.target.value)}
                    disabled={isSorting}
                />
            </label>
        </div>
    )
}

export default Control