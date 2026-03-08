import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type holiday = "🎇" | "❤️" | "🍀" | "👨‍✈️" | "🎄";

    const Alphabet: Record<holiday, holiday> = {
        "🎄": "🎇",
        "🎇": "🍀",
        "🍀": "❤️",
        "❤️": "👨‍✈️",
        "👨‍✈️": "🎄",
    };

    const Year: Record<holiday, holiday> = {
        "🎄": "🎇",
        "🎇": "❤️",
        "❤️": "🍀",
        "🍀": "👨‍✈️",
        "👨‍✈️": "🎄",
    };

    const [Holiday, setHoliday] = useState<holiday>("🎄");

    return (
        <span>
            <div>
                <span>holiday: {Holiday}</span>
            </div>
            <br />
            <Button
                onClick={() => {
                    setHoliday(Alphabet[Holiday]);
                }}
            >
                Advance by Alphabet
            </Button>{" "}
            <br /> <br />
            <Button
                onClick={() => {
                    setHoliday(Year[Holiday]);
                }}
            >
                Advance by Year
            </Button>
        </span>
    );
}
