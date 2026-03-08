import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    return (
        <span>
            <br />
            <Button
                onClick={() => {
                    questionType === "short_answer_question" ?
                        setQuestionType("multiple_choice_question")
                    :   setQuestionType("short_answer_question");
                }}
            >
                Change Type
            </Button>
            <div>
                {questionType === "short_answer_question" ?
                    <span>Short Answer</span>
                :   <span>Multiple Choice</span>}
            </div>
            <br />
        </span>
    );
}
