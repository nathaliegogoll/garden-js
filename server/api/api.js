const axios = require('axios');

const uniqeQuestionChecker = (list, question) => {
    return list.includes(question);
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

module.exports = {
    getRandomQuestions
}
