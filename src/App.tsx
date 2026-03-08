import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <RevealAnswer></RevealAnswer>
            <ChangeType></ChangeType>
            <StartAttempt></StartAttempt>
            <hr />
            {/* <ChangeType></ChangeType> */}
        </div>
    );
}

export default App;
