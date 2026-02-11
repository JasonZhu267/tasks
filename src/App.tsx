import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Beagle</h1>
            <p style={{ backgroundColor: "red" }}>
                <span style={{ color: "green" }}>
                    <div style={{ border: "2px solid red", padding: "4px" }}>
                        Edit Hello World into <code>src/App.tsx</code> and save.
                        This page will automatically reload.
                    </div>
                </span>
            </p>
            <img
                src="https://www.google.com/imgres?q=dog&imgurl=https%3A%2F%2Fcdn.britannica.com%2F16%2F234216-050-C66F8665%2Fbeagle-hound-dog.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fbeagle-dog&docid=gJ0ou-8nWSsfKM&tbnid=TxZas2ani8v5yM&vet=12ahUKEwiZzNfxi9KSAxVaLFkFHQ9eDOcQnPAOegQIExAB..i&w=1600&h=1057&hcb=2&ved=2ahUKEwiZzNfxi9KSAxVaLFkFHQ9eDOcQnPAOegQIExAB"
                alt="A picture of a beagle"
            />
            Unordered List:
            <ul>
                <li>Dog Food</li>
                <li>Dog Toy</li>
                <li>Dog Wear</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
