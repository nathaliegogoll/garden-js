import React, { useEffect, useState } from 'react'
import { answerQuestion, fetchQuestions, endGame } from '../../redux/slices/questionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { modifyUser, handleCorrectAnswer, handleWrongAnswer, addLevel, displayPopup } from '../../redux/slices/userSlice';
import { lvlDisplay } from '../helpers';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import closeIcon from '../../resources/close_icon.png';
import LevelUp from './LevelUp';

const Questions = () => {
    const storeQuestions = useSelector((state) => state.questions.questions);
    const { loading } = useSelector((state) => state.questions);
    const { user, levelup } = useSelector((state) => state.user)
    const [levelUp, setLevelUp] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        Prism.highlightAll();
    }, [storeQuestions, levelUp])
    
    useEffect(() => {
        dispatch(fetchQuestions("https://gardenproject-server.herokuapp.com/api/questions"))
    }, [dispatch])

    const handleAnswer = (answer) => {
        const correctAnswer = storeQuestions[0].translations[0].answer;

        if (user.xp > 0 && user.xp % 3 === 2 && answer.label === correctAnswer) {
            setLevelUp(true)
            dispatch(displayPopup(levelUp))
        }
        if (answer.label === correctAnswer) {
            dispatch(handleCorrectAnswer());
        } else {
            dispatch(handleWrongAnswer());
        }

        setTimeout(() => {     
            dispatch(answerQuestion());
            dispatch(addLevel(lvlDisplay(user.xp)-1))
        }, 500)
    }

    const handleGoBack = () => {
        dispatch(modifyUser(user))
        // setTimeout(() => {
        dispatch(endGame())
        // }, 1000);
    }

    
    return (
        <section className="questionnaire">
        { levelUp ? (
            <>
                <LevelUp setter={setLevelUp} getter={levelUp}/>
            </>
        ) : (
        <>
        { loading ? (
            <>
                <p>loading questions...</p>
            </>
        ):(
            <>
                { user.carrotNumber !== 0 ? (
                    <>
                        <h2 className="questionnaire__question">Question: {storeQuestions[0].translations[0].question}</h2>
                        { storeQuestions[0].code && (
                        <div className="questionnaire__codesnippet">
                        <pre>
                        <code className="language-javascript">{storeQuestions[0].code}</code>
                        </pre>
                        </div>
                        )}
                        {
                        storeQuestions[0].translations[0].options.map(answer => {
                        return <button className="questionnaire__button" key={answer.label} onClick={() => {handleAnswer(answer)}}>{answer.label}. {answer.option.replaceAll('`','')}</button>
                        })
                        }
                        <button className="questionnaire__btn-close" onClick={handleGoBack}><img className="btn--close" src={closeIcon} alt="go back button" /></button>

                    </>
                ) : (
                    <>
                    <p>No more questions for today!</p>
                    <button className="questionnaire__btn-back" onClick={handleGoBack}><img className="btn--close" src={closeIcon} alt="go back button" /></button>
                    </>
                )
                }
            </>
        )}
        </>
        )}
    </section>
    )
}

export default Questions;