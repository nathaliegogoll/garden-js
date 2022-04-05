const { getRandomQuestions, getRandomQuestionsWithId } = require('../api/api');

const questions = async (req, res, next) => {
    // const { id } = req.params;
    const questions = await getRandomQuestions();
    res.send(questions);
}
const questionsWithId = async (req, res, next) => {
    const { id } = req.params;
    const questions = await getRandomQuestionsWithId(id);
    res.send(questions);
}
module.exports = {
    questions,
    questionsWithId,
}
