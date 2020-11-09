import React from 'react'
import {AnswerObject} from '../App'
type props = {
    Question: string;
    Answer: string[];
    CallBack: (e:React.MouseEvent<HTMLButtonElement>) =>void;
    UserAnswer: AnswerObject | undefined ;
    QuestionNr: number;
    TotalQuestion: number;

}
export const QuestionCard: React.FC<props> = ({ Question,
    Answer, CallBack,
    UserAnswer,
    QuestionNr, TotalQuestion
}) => {
    return (
        <div>
            <p> 
                Question:{QuestionNr} / {TotalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: Question }} />
            <div>
                {Answer.map((answer,id) => (
                    <div key={id}>
                        <button disabled={UserAnswer ? true : false} value={answer} onClick={CallBack}>
                            <span dangerouslySetInnerHTML={{__html:answer}} />
                          </button>
                        </div>
                ))}
            </div>
        </div>
    )
}
