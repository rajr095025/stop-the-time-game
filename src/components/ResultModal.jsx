import {forwardRef, useImperativeHandle , useRef} from "react"
import { createPortal } from "react-dom";

const ResultModal =  forwardRef(function ({targetTime , remainingTime, resetTimer} , ref) {

    const dialogRef = useRef();

    let userLost = remainingTime <= 0; 

    let readableFormat = (remainingTime / 1000).toFixed(2);

    let score = Math.round((1 - remainingTime/(targetTime * 1000)) * 100) ;


    useImperativeHandle(ref , () => {
        return {
        open() {
            // alert("open called")
            dialogRef.current.showModal();
        }
        }
    })



    let jsxElement =  createPortal(<dialog ref={dialogRef} className="result-modal" onClose={resetTimer}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Score : {score}</h2>}
        <p>
            The target time was <strong>{targetTime} seconds</strong>.
        </p>
        <p>
            you stopped the timer with <strong>{readableFormat} Seconds left</strong>
        </p>
        <form method="dialog" onSubmit={resetTimer}>
            <button >
                Close
            </button>
        </form>
    </dialog>, document.getElementById("modal"))

    console.log("jsxElement" , jsxElement);

    return jsxElement;

}) 


export default ResultModal;