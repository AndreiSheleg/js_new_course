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

const resultMessages = {
    finishSuccess: 'Молодец, good results!',
    finishUnsuccess: 'Молодец, но старайся лучше!'
}

const settings = {
    correctAnswersMinPercent: 50,
}

let correctAnswersCount = 0

// ------------------------------------------------


const userAnswer0 = prompt(word0)
alert(userAnswer0 === word0translation)
if (userAnswer0 === word0translation) {
    correctAnswersCount++
}

const userAnswer1 = prompt(word1)
alert(userAnswer1 === word1translation)
if (userAnswer1 === word1translation) {
    correctAnswersCount++
}

const userAnswer2 = prompt(word2)
alert(userAnswer2 === word2translation)
if (userAnswer2 === word2translation) {
    correctAnswersCount++
}

const userAnswersCorrectPercent = correctAnswersCount / wordsCount * 100

if ( userAnswersCorrectPercent > correctAnswersMinPercent) {
    alert(finishSuccessMessage)
} else {
    alert(finishUnsuccessMessage)
}
