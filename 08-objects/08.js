const word0 = {
     original: 'Engineer',
    translation: 'Инженер'
}

const word1 = {
     original: 'Ice Cream',
    translation: 'Мороженое'
}

const word2 = {
    original: 'Milk',
    translation: 'Молоко'
}

const wordsCount = 3

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

const results ={
    correctAnswersCount: 0
}


// ------------------------------------------------


const userAnswer0 = prompt(word0.original)
alert(userAnswer0 === word0.translation)
if (userAnswer0 === word0.translation) {
    result.correctAnswersCount++
}

const userAnswer1 = prompt(word1.original)
alert(userAnswer1 === word1.translation)
if (userAnswer1 === word1.translation) {
    result.correctAnswersCount++
}

const userAnswer2 = prompt(word2.original)
alert(userAnswer2 === word2.translation)
if (userAnswer2 === word2.translation) {
    result.correctAnswersCount++
}

const userAnswersCorrectPercent = result.correctAnswersCount / wordsCount * 100

if ( userAnswersCorrectPercent > settings.correctAnswersMinPercent) {
    alert(result.finishSuccess)
} else {
    alert(result.finishUnsuccess)
}
