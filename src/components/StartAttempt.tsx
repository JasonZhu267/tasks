import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [Attempt, setAttempt] = useState<number>(4);
    const [StartAttempt, setStartAttempt] = useState<boolean>(false);

    return (
        <span>
            <br />
            <span>Attempts Remaining: {Attempt}</span>
            <Button
                disabled={StartAttempt || !Attempt}
                onClick={() => {
                    setStartAttempt(true);
                    setAttempt(Attempt - 1);
                }}
            >
                Start Quiz
            </Button>
            <br /> <br />
            <Button
                disabled={!StartAttempt}
                onClick={() => {
                    setStartAttempt(false);
                }}
            >
                Stop Quiz
            </Button>
            <br /> <br />
            <Button
                disabled={StartAttempt}
                onClick={() => {
                    setAttempt(Attempt + 1);
                }}
            >
                Mulligan
            </Button>
            <br />
        </span>
    );
}
