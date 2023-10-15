//-------------functions
function showHelloMessage(_notificationMessages) {
    return alert(notificationMessages.start.gretting)
}
function startTraining(_words, _results) {
    for (let i = 0; i < _words.length; i++) {
        let userAnswer = prompt(_words[i].original)
        alert(userAnswer === _words[i].translation)
        if (userAnswer === _words[i].translation) {
            _results.correctAnswersCount++
        }
    }
}
function getPercentage(_results, _words) {
    return _results.correctAnswersCount / _words.length * 100
}
function showResult(_results, _words, _settings, _notificationMessages) {
    const userAnswersCorrectPercent = getPercentage(_results, _words)

    if (userAnswersCorrectPercent > _settings.correctAnswersMinPercent) {
        alert(_notificationMessages.result.finishSuccess)
    } else {
        alert(_notificationMessages.result.finishUnsuccess)
    }
}

//-------------data
const words = [
    {
        original: 'Engineer',
        translation: 'Инженер'
    },
    {
        original: 'Ice Cream',
        translation: 'Мороженое'
    },
    {
        original: 'Milk',
        translation: 'Молоко'
    },
]

const notificationMessages = {
    start: {
        gretting: 'Hello, man. You could learn English. Good Luck!'
    },
    result: {
        finishSuccess: 'Молодец, good results!',
        finishUnsuccess: 'Молодец, но старайся лучше!'
    }

}

const settings = {
    correctAnswersMinPercent: 50,
}

const results = {
    correctAnswersCount: 0
}

//-------------main

showHelloMessage(notificationMessages)

startTraining(words, results)

showResult(results, words, settings, notificationMessages);