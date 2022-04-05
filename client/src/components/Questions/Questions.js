import React, { useEffect, useState } from 'react'
import { answerQuestion, fetchQuestions, endGame } from '../../redux/slices/questionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { modifyUser, handleCorrectAnswer, handleWrongAnswer, addLevel, displayPopup } from '../../redux/slices/userSlice';
import { lvlDisplay } from '../helpers';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import closeIcon from '../../resources/close_icon.png';
import LevelUp from './LevelUp';
import MaxLevel from './MaxLevel';

const Questions = () => {
    const storeQuestions = useSelector((state) => state.questions.questions);
    const { loading } = useSelector((state) => state.questions);
    const { user } = useSelector((state) => state.user)
    const [levelUp, setLevelUp] = useState(false)
    const [toggleClass, setToggleClass] = useState([])


    const dispatch = useDispatch();

    useEffect(() => {
        Prism.highlightAll();
    }, [storeQuestions, levelUp])
    
    useEffect(() => {
           dispatch(fetchQuestions())
    }, [dispatch])

    const handleAnswer = (answer, index) => {
        const correctAnswer = storeQuestions[0].translations[0].answer;
        const newArr = [toggleClass];
        newArr[index] = true;
        setToggleClass(newArr);

        setTimeout(() => {    

        if (user.xp > 0 && user.xp % 3 === 2 && answer.label === correctAnswer) {
            setLevelUp(true)
            dispatch(displayPopup(levelUp))
        }
        if (answer.label === correctAnswer) {
            dispatch(handleCorrectAnswer(storeQuestions[0].id));
        } else {
            dispatch(handleWrongAnswer());
        }

            dispatch(answerQuestion());
            dispatch(addLevel(lvlDisplay(user.xp)-1))
            setToggleClass([]);
        }, 700)
    }

    const handleGoBack = async () => {
        try {
            await dispatch(modifyUser(user)).unwrap()
            dispatch(endGame())
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <section className="questionnaire">
        { levelUp ? (
            <>
                <LevelUp setter={setLevelUp} getter={levelUp}/>
            </>
        ) : (
        <>
        { (user.level === 30) ? (
            <>
                <MaxLevel />
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
                        storeQuestions[0].translations[0].options.map((answer, index) => {
                            return (
                                <>
                                    {(answer.label === storeQuestions[0].translations[0].answer) ? 
                                    (<button className={(toggleClass[index] === true) ? 'questionnaire__button--clicked': 'questionnaire__button'}  id="correct" tabIndex="0" key={answer.label} onClick={() => {handleAnswer(answer, index)}}>{answer.label}. {answer.option.replaceAll('`','')}</button>)
                                    : 
                                    (<button className={(toggleClass[index] === true) ? 'questionnaire__button--clicked': 'questionnaire__button'} id="incorrect" tabIndex="0" key={answer.label} onClick={() => {handleAnswer(answer, index)}}>{answer.label}. {answer.option.replaceAll('`','')}</button>)
                                    }
                                </>
                            )
                        })
                        }
                        <button className="questionnaire__btn-close" onClick={handleGoBack}><img className="btn--close" src={closeIcon} alt="go back button" /></button>

                    </>
                ) : (
                    <div className="nomorequestions__container">
                    <p>No more questions for today! Come back tomorrow to get new carrots and more katas to solve!</p>
                    <button className="questionnaire__btn-back" onClick={handleGoBack}><img className="btn--close" src={closeIcon} alt="go back button" /></button>
                    </div>
                )
                }
            </>
        )}
        </>
        )}
        </>
        )}
    </section>
    )
}

export default Questions;