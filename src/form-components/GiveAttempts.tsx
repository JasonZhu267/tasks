import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setremainingAttempts] = useState<number>(3);

    const [gainAttempt, setGainAttempt] = useState<string>("0");

    const addAttempt = parseInt(gainAttempt) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>

            <Form.Group controlId="attempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    name="attempts"
                    value={gainAttempt}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setGainAttempt(event.target.value);
                    }}
                />
            </Form.Group>

            <Button
                disabled={remainingAttempts <= 0}
                onClick={() => {
                    setremainingAttempts(remainingAttempts - 1);
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setremainingAttempts(remainingAttempts + addAttempt);
                }}
            >
                gain
            </Button>

            <div>Remaining Attempts: {remainingAttempts}</div>
        </div>
    );
}
