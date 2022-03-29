import React, { useEffect} from 'react'
import { answerQuestion, fetchQuestions, endGame } from '../../redux/slices/questionSlice';
import { useSelector, useDispatch } from 'react-redux';

const Questions = () => {
    const storeQuestions = useSelector((state) => state.questions.questions);
    const { loading } = useSelector((state) => state.questions);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchQuestions("https://gardenproject-server.herokuapp.com/api/questions"))
        setTimeout(() => {

        }, 2000)
    }, [dispatch])

    const handleAnswer = (answer) => {
        const correctAnswer = storeQuestions[0].translations[0].answer;
        if (answer.label === correctAnswer) console.log("good answer");
        //move to the next question
        setTimeout(() => {
            dispatch(answerQuestion());
        }, 1000)
        //give feedback to the user: correct or wrong answer? should we give an explaination?
    }

    const handleGoBack = () => {
        dispatch(endGame())
    }

    
    return (
        <section className="questionnaire">
        { loading ? (
            <>
                <p>loading questions...</p>
            </>
        ):(
            <>
                <button onClick={handleGoBack}>x</button>
                { storeQuestions.length !== 0 ? (
                    <>
                        <h2 className="questionnaire__question">Question: {storeQuestions[0].translations[0].question}</h2>
                        <code className="questionnaire__code">{storeQuestions[0].code}</code>
                        {
                        storeQuestions[0].translations[0].options.map(answer => {
                        return <button className="questionnaire__button" key={answer.label} onClick={() => {handleAnswer(answer)}}>{answer.label}. {answer.option.replaceAll('`','')}</button>
                        })
                        }
                    </>
                ) : (
                    <>
                    <p>No more questions for today!</p>
                    <button onClick={handleGoBack}>Go back</button>
                    </>
                )
                }
            </>
        )}
        </section>
    )
}

export default Questions;