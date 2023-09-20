const word0 = 'Engineer'
const word0translation = 'Инженер'

const word1 = 'Ice Cream'
const word1translation = 'Мороженое'

const word2 = 'Milk'
const word2translation = 'Молоко'

const wordsCount = 3

const finishMessage = 'Молодец, конец игры'

let correctAnswersCount = 0

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

alert(finishMessage)