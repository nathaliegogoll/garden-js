import React, { useEffect, useState } from 'react'
import { answerQuestion, fetchQuestions, endGame } from '../../redux/slices/questionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { modifyUser, handleCorrectAnswer, handleWrongAnswer, addLevel } from '../../redux/slices/userSlice';
import { lvlDisplay } from '../helpers';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";


const Questions = () => {
    const storeQuestions = useSelector((state) => state.questions.questions);
    const { loading } = useSelector((state) => state.questions);
    const { user } = useSelector((state) => state.user)

    const dispatch = useDispatch();

    useEffect(() => {
        Prism.highlightAll();
    }, [storeQuestions])
    
    useEffect(() => {
        dispatch(fetchQuestions("https://gardenproject-server.herokuapp.com/api/questions"))
    }, [dispatch])

    const handleAnswer = (answer) => {
        const correctAnswer = storeQuestions[0].translations[0].answer;
        if (answer.label === correctAnswer) {
            dispatch(handleCorrectAnswer());
        } else {
            dispatch(handleWrongAnswer());
        }

        setTimeout(() => {
            dispatch(answerQuestion());
            dispatch(addLevel(lvlDisplay(user.xp)-1))
        }, 500)
        //give feedback to the user: correct or wrong answer? should we give an explaination?
    }

    const handleGoBack = () => {
        dispatch(modifyUser(user))
        setTimeout(() => {
            dispatch(endGame())
        }, 1000);
    }

    
    return (
        <section className="questionnaire">
        { loading ? (
            <>
                <p>loading questions...</p>
            </>
        ):(
            <>
                { user.carrotNumber !== 0 ? (
                    <>
                        <h2 className="questionnaire__question">Question: {storeQuestions[0].translations[0].question}</h2>
                        <div className="questionnaire__codesnippet">
                        <pre>
                        <code className="language-javascript">{storeQuestions[0].code}</code>
                        </pre>
                        </div>
                        {
                        storeQuestions[0].translations[0].options.map(answer => {
                        return <button className="questionnaire__button" key={answer.label} onClick={() => {handleAnswer(answer)}}>{answer.label}. {answer.option.replaceAll('`','')}</button>
                        })
                        }
                        <button className="questionnaire__btn-close" onClick={handleGoBack}>X</button>

                    </>
                ) : (
                    <>
                    <p>No more questions for today!</p>
                    <button className="questionnaire__btn-back" onClick={handleGoBack}>Go back</button>
                    </>
                )
                }
            </>
        )}
        </section>
    )
}

export default Questions;