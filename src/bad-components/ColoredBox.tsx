import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ColoredBoxProps {
    colors: string[];
    defaultColorIndex: number;
    setIndex: (newIndex: number) => void;
}

function ChangeColor({
    colors,
    defaultColorIndex,
    setIndex,
}: ColoredBoxProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setIndex((1 + defaultColorIndex) % colors.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    colors,
    defaultColorIndex,
}: ColoredBoxProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: colors[defaultColorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const COLORS = ["red", "blue", "green"];
    const [DEFAULT_COLOR_INDEX, setDefaultColorIndex] = useState<number>(0);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    colors={COLORS}
                    defaultColorIndex={DEFAULT_COLOR_INDEX}
                    setIndex={setDefaultColorIndex}
                ></ChangeColor>
                <ColorPreview
                    colors={COLORS}
                    defaultColorIndex={DEFAULT_COLOR_INDEX}
                    setIndex={setDefaultColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
