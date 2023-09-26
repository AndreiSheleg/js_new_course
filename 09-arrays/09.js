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


// ------------------------------------------------

alert(notificationMessages.start.gretting)

const userAnswer0 = prompt(words[0].original)
alert(userAnswer0 === words[0].translation)
if (userAnswer0 === words[0].translation) {
    results.correctAnswersCount++
}

const userAnswer1 = prompt(words[1].original)
alert(userAnswer1 === words[1].translation)
if (userAnswer1 === words[1].translation) {
    results.correctAnswersCount++
}

const userAnswer2 = prompt(words[2].original)
alert(userAnswer2 === words[2].translation)
if (userAnswer2 === words[2].translation) {
    results.correctAnswersCount++
}

const userAnswersCorrectPercent = results.correctAnswersCount / words.length * 100

if (userAnswersCorrectPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSuccess)
} else {
    alert(notificationMessages.result.finishUnsuccess)
}