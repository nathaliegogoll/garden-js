import React, { useEffect } from 'react'
import { fetchQuestions } from '../../redux/slices/questionSlice';
import { useSelector, useDispatch } from 'react-redux';

const Questions = () => {

    const storeQuestions = useSelector((state) => state.questions.questions);
    const { loading, carrots } = useSelector((state) => state.questions);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchQuestions("https://gardenproject-server.herokuapp.com/api/questions"))
        setTimeout(() => {

        }, 2000)
    }, [])

    const handleAnswer = (answer) => {
        const correctAnswer = storeQuestions[0].translations[0].answer;
        //update xp if correct answer
        if (answer.label === correctAnswer) console.log("good answer");
        //move to the next question
        //one less carrot
        //give feedback to the user: correct or wrong answer? should we give an explaination?
    }

    
    return (
        <section className="questionnaire">
        { loading ? (
            <>
                <p>loading questions...</p>
            </>
        ):(
            <>
                <h2 className="questionnaire__question">Question: {storeQuestions[0].translations[0].question}</h2>
                <code className="questionnaire__code">{storeQuestions[0].code}</code>
            {
                storeQuestions[0].translations[0].options.map(answer => {
                    return <button className="questionnaire__button" key={answer.label} onClick={() => {handleAnswer(answer)}}>{answer.label}. {answer.option}</button>
                })
            }
            </>
        )}
        </section>
    )
}

export default Questions;