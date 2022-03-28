import React from 'react'

const Questions = () => {
    const mockQuestion = {
        "id": 43,
        "translations": [
        {
        "options": [
        {
        "label": "A",
        "option": "`[\"L\", \"y\", \"d\", \"i\", \"a\"]`"
        },
        {
        "label": "B",
        "option": "`[\"Lydia\"]`"
        },
        {
        "label": "C",
        "option": "`[[], \"Lydia\"]`"
        },
        {
        "label": "D",
        "option": "`[[\"L\", \"y\", \"d\", \"i\", \"a\"]]`"
        }
        ],
        "question": "What does this return?",
        "answer": "A",
        "explanation": "A string is an iterable. The spread operator maps every character of an iterable to one element."
        }
        ],
        "code": "[...'Lydia'];"
    }

    const question = mockQuestion.translations[0].question;
    const options = mockQuestion.translations[0].options;
    const answer = mockQuestion.translations[0].answer;
    const code = mockQuestion.code;
    return (
        <section className="questionnaire">
            <h2 className="questionnaire__question">Question: {question}</h2>
            <code className="questionnaire__code">{code}</code>
            {
                options.map(answer => {
                    return <button key={answer.label}>{answer.label}. {answer.option}</button>
                })
            }
            

        </section>
    )
}

export default Questions;