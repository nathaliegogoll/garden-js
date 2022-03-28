const { getRandomQuestions } = require('../api/api');

const questions = async (req, res, next) => {
    const questions = await getRandomQuestions();
    res.send(questions);
}

module.exports = {
    questions,
}
