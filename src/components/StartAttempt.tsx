import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [Attempt, setAttempt] = useState<number>(4);
    const [StartAttempt, setStartAttempt] = useState<boolean>(true);

    return (
        <span>
            <Button
                onClick={() => {
                    if (!(StartAttempt || !Attempt)) {
                        setStartAttempt(true);
                        setAttempt(Attempt - 1);
                    }
                }}
            >
                Start Quiz
            </Button>
            Quiz is in progress: {StartAttempt.toString()}. There is {Attempt}{" "}
            remaining attempts. <br />
            <Button
                onClick={() => {
                    if (StartAttempt) {
                        setStartAttempt(false);
                    }
                }}
            >
                Stop Quiz
            </Button>
            Quiz is in progress: {StartAttempt.toString()}. There is {Attempt}{" "}
            remaining attempts. <br />
            <Button
                onClick={() => {
                    if (!StartAttempt) {
                        setAttempt(1 + Attempt);
                    }
                }}
            >
                Mulligan
            </Button>
            There is {Attempt} remaining attempts. <br />
        </span>
    );
}
