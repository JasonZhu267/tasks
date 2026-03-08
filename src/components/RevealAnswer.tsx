import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    return (
        <span>
            <br />
            <Button
                onClick={() => {
                    setShowAnswer(!showAnswer);
                }}
            >
                Reveal Answer
            </Button>
            {showAnswer ?
                <span>{"42"}</span>
            :   <span></span>}
            <br />
        </span>
    );
}
