import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

interface ChooseTeamProps {
    AllOptions: string[];
    Team: string[];
    SetTeam: (newTeam: string[]) => void;
    SetAllOptions: (newOptions: string[]) => void;
}

export function ChooseTeam({
    Team,
    SetTeam,
    AllOptions,
}: ChooseTeamProps): React.JSX.Element {
    function chooseMember(newMember: string) {
        if (!Team.includes(newMember)) {
            SetTeam([...Team, newMember]);
        }
    }

    function clearTeam() {
        SetTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {AllOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {Team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
