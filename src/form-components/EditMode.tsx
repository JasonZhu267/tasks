import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="is-editMode-check"
                label="editMode?"
                checked={editMode}
                onChange={updateEditMode}
            />

            {editMode ?
                <div>
                    <Form.Group controlId="shortAnswer">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={updateUsername}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            :   <div>
                    {username} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
