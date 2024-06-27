import React, {useState} from 'react';

/** Component Eightball: renders random answer and color when clicked
 * Props: answers, array of {msg, color}
 * State: answer, {msg, color} of current answer
 */
const EightBall = ({answers}) => {
    const genRandom = () => Math.floor(Math.random()* answers.length)
    const reset = () => {
        setResult({msg:"Think of a Question.",
                    color: "black"})
        setColorCount({red:0, green:0, goldenrod:0});
    }

    const getAnswer = () => {
        // grab new result and update state
        const newResult = answers[genRandom()]
        setResult(newResult)

        // update state for color counter
        // when passing in callback, have access to previous state 
        setColorCount((prevCounts) => {
            // Create shallow copy of previous counter state
            const newCounts = {...prevCounts}
            // Grabs current count and increments by 1 based on newResult's color
            const currentCount = newCounts[newResult.color];
            newCounts[newResult.color] = currentCount + 1;
            // Returns updated counter
            return newCounts; 
        })
    }

    const [result, setResult] = useState({msg:"Think of a Question.",
                                        color: "black"})
    const [colorCount, setColorCount] = useState({red:0, green:0, goldenrod:0})
    
    return (
        <>
            <div className='ColorCount'>
                <span className='ColorCount-red'>Red: {colorCount.red}</span>
                <span className='ColorCount-green'>Green: {colorCount.green}</span>
                <span className='ColorCount-goldenrod'>Yellow: {colorCount.goldenrod}</span>
            </div>
            <div className='EightBall' 
                 style={{backgroundColor:`${result.color}`}}
                 onClick = {getAnswer}>
                <p>{result.msg}</p>
            </div>
            <button className='reset' onClick = {reset}>Reset</button>
        </>
    )
}

// ORIGINAL ANSWER:
// const EightBall = ({answers}) => {
//     const genRandom = () => Math.floor(Math.random()* answers.length)
//     const reset = () => {
//         setResult({msg:"Think of a Question.",
//                     color: "black"})
//         setRedCount(0)
//         setGreenCount(0)
//         setGoldenrodCount(0)
//     }

//     const getAnswer = () => {
//         const newResult = answers[genRandom()]
//         setResult(newResult)
//         if (newResult.color === 'red'){
//             setRedCount(redCount + 1);
//         }
//         else if (newResult.color === 'green'){
//             setGreenCount(greenCount + 1);
//         }
//         else if (newResult.color === 'goldenrod'){
//             setGoldenrodCount(goldenrodCount + 1);
//         }
//     }

//     const [result, setResult] = useState({msg:"Think of a Question.",
//                                         color: "black"})

//     const [redCount, setRedCount] = useState(0)
//     const [greenCount, setGreenCount] = useState(0)
//     const [goldenrodCount, setGoldenrodCount] = useState(0)
    
//     return (
//         <>
//             <div className='ColorCount'>
//                 <p className='ColorCount-red'>Red: {redCount}</p>
//                 <p className='ColorCount-green'>Green: {greenCount}</p>
//                 <p className='ColorCount-goldenrod'>Yellow: {goldenrodCount}</p>
//             </div>
//             <div className='EightBall' 
//                  style={{backgroundColor:`${result.color}`}}
//                  onClick = {getAnswer}
//             >
//                 <p>{result.msg}</p>
//             </div>

//             <button className='reset' onClick = {reset}>Reset</button>
//         </>
//     )
// }

export default EightBall;