import React, { useEffect } from 'react'
import { fetchQuestions } from '../../redux/slices/questionSlice';
import { useSelector, useDispatch } from 'react-redux';

const Questions = () => {

    const storeQuestions = useSelector((state) => state.questions.questions);
    const { loading, carrots } = useSelector((state) => state.questions);

    console.log(loading);
    console.log(storeQuestions);
    console.log(carrots);

    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('useeffect')
        dispatch(fetchQuestions("https://gardenproject-server.herokuapp.com/api/questions"))
    }, [])

    /* return (
        <>
        {storeQuestions.map((question) => {
            return (
                <>
                <p>{question.id}</p>
                <p>{question.translations[0].question}</p>
                </>
            )
        } )}
        </>
    ) */

 const question = storeQuestions.translations[0].question;
    const options = storeQuestions.translations[0].options;
    const answer = storeQuestions.translations[0].answer;
    const code = storeQuestions.code;
    return (
        <section className="questionnaire">
        { loading ? (
            <>
                <p>loading questions...</p>
            </>
        ):(
            <>
            <h2 className="questionnaire__question">Question: {question}</h2>
            <code className="questionnaire__code">{code}</code>
            {
                options.map(answer => {
                    return <button key={answer.label}>{answer.label}. {answer.option}</button>
                })
            }
            </>
        )}

        </section>
    )
}

export default Questions;