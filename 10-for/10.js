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

for (let i = 0; i < words.length; i++) {
    let userAnswer = prompt(words[i].original)
    alert(userAnswer === words[i].translation)
    if (userAnswer === words[i].translation) {
        results.correctAnswersCount++
    }
}


const userAnswersCorrectPercent = results.correctAnswersCount / words.length * 100

if (userAnswersCorrectPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSuccess)
} else {
    alert(notificationMessages.result.finishUnsuccess)
}