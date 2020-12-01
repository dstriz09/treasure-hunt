import React, { useContext } from "react";
import { CardContext, NewExpeditionDeck } from "./CardContext";

export default function Expedition() {
  const [state, setState] = useContext(CardContext);

  function handleRoundChange() {
    console.log(state.roundSubmits);
    if (state.roundSubmits != state.numPlayers || state.numPlayers == null) {
      return;
    }
    if (state.currentRound < 7) {
      state.roundSubmits = 0;
      setState((state) => ({ ...state, currentRound: state.currentRound + 1 }));
    } else if (state.currentPhase === 4) {
      // The game is over
      endGame();
    } else {
      // generate new expedition deck, increase phase, and reset round to 1
      state.currentPhase = ++state.currentPhase;
      state.roundSubmits = 0;
      setState((state) => ({
        ...state,
        currentRound: 1,
        // curentPhase: ++state.currentPhase,
        expeditionDeck: NewExpeditionDeck(),
      }));
    }
  }

  const endGame = () => {
    // To do: Eventually this should figure out who has the highest score
    // and congratulate that player
    const finalScores = [
      {
        name: "Player One",
        score: state.playerOne.score().score,
      },
      {
        name: "Player Two",
        score: state.playerTwo.score().score,
      },
      {
        name: "Player Three",
        score: state.playerThree.score().score,
      },
      {
        name: "Player Four",
        score: state.playerFour.score().score,
      },
    ];

    let winningText = "";
    for (let i = 0; i < state.numPlayers; i++) {
      winningText += `${finalScores[i].name}: ${finalScores[i].score}`;
      if (i + 1 < state.numPlayers) winningText += "\n";
    }

    alert("Game over! Final scores:\n" + winningText);
  };

  return (
    <div>
      <div>
        <div>Phase #{state.currentPhase}/4</div>
        <div>Expedition card: #{state.currentRound}/7</div>
        Current expedition card:{" "}
        <b>{state.expeditionDeck[state.currentRound].name}</b>
        <img
          style={{
            height: "50px",
            display: "block",
            alightText: "center",
            margin: "10px 30px",
          }}
          src={state.expeditionDeck[state.currentRound].rawShape}
        />
      </div>
      <button onClick={() => handleRoundChange()}>Next expedition card</button>
    </div>
  );
}
