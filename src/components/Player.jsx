import { useState, useRef } from "react";

export default function Player() {

  // Usual way using 2 way binding
  // const [playerName,setPlayerName] = useState("");
  // const [submitted,setSubmitted] = useState(false);

  // const handleNameChange = (event)  => {
  //   setPlayerName(event.target.value);
  //   setSubmitted(false);
  // }

  // const handleSubmit = () => {
  //   setSubmitted(true)
  // }

  // return (
  //   <section id="player">
  //     <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
  //     <p>
  //       <input value={playerName} onChange={(e) => handleNameChange(e)} type="text" />
  //       <button onClick={handleSubmit}>Set Name</button>
  //     </p>
  //   </section>
  // );


  // Using ref instead

  let playerName = useRef();
  const [enteredPlayerNAme , sertEnteredPlayerName] = useState("");


  // const handleNameChange = (event)  => {
  // }

  const handleSubmit = () => {
    // setSubmitted(true)
    sertEnteredPlayerName(playerName.current.value)

  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerNAme ??  "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
