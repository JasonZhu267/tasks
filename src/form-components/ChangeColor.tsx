import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    let Colors: string[] = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "brown",
        "gray",
    ];
    const [color, setColor] = useState<string>(Colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {Colors.map((Color: string) => (
                    <Form.Check
                        key={Color}
                        inline
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id={`color-check-${Color}`}
                        label={Color}
                        value={Color}
                        checked={color === Color}
                    />
                ))}
            </div>

            <div>
                <div
                    data-testid="colored-box"
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: color,
                        border: `1px solid ${color}`,
                    }}
                >
                    {color}
                </div>
            </div>

            <div>You have chosen {color}.</div>
        </div>
    );
}
