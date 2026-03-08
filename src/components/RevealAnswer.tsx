import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<number>();

    return (
        <span>
            <Button
                onClick={() => {
                    setShowAnswer(42);
                }}
            >
                Reveal Answer
            </Button>
            to {showAnswer}. <br />
        </span>
    );
}
