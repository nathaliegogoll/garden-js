const axios = require('axios');
const Level = require('../models/Level')

const uniqeQuestionChecker = (list, question) => {
    return list.includes(question);
}

const clearedKatas = async (levelInfo, question) => {
    if (levelInfo.completedKatas.includes(question.id)){
        return false;
    }
    return true;
}

const getRandomQuestions = async () => {
    const questionList = [];
    const numberOfQuestions = 5;

    while(questionList.length < numberOfQuestions ){
        await axios.get('https://javascript-questions-api.herokuapp.com/quizzes/1/random').then(resp => {
            if(!uniqeQuestionChecker(questionList, resp.data[0])){

                questionList.push(resp.data[0]);
            }
        });
    }
    return questionList;
}
const getRandomQuestionsWithId = async (id) => {
    const questionList = [];
    const numberOfQuestions = 5;
    const levelInfo = await Level.findOne({ uuid: id});

    while(questionList.length < numberOfQuestions ){
        await axios.get('https://javascript-questions-api.herokuapp.com/quizzes/1/random').then(resp => {
            if(!uniqeQuestionChecker(questionList, resp.data[0])){
                if (clearedKatas(levelInfo, resp.data[0])){
                     //levelInfo.completedKatas.push(resp.data[0].id);
                     questionList.push(resp.data[0]);
                };
            }
        });
    }
    //return levelInfo;
    return questionList;
}
module.exports = {
    getRandomQuestions,
    getRandomQuestionsWithId
}
