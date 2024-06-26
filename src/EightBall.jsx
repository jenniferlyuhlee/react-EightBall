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
    }

    const [result, setResult] = useState({msg:"Think of a Question.",
                                        color: "black"})

    return (
        <>
            <div className='EightBall' 
                 style={{backgroundColor:`${result.color}`}}
                 onClick = {() => setResult(answers[genRandom()])}
            >
                <p>{result.msg}</p>
            </div>

            <button className='reset' onClick = {reset}>Reset</button>
        </>
    )
}

export default EightBall;