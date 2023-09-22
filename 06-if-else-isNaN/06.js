<!--    NaN ломает логику. Чтобы мы не сравнивали с NaN всегда будет FALSE-->
//Даже сравнивая два NaN всё равно будет false
//поэтому необобходима валидация (проверка) вводных данных от пользователя
let balance = 100

document.write('START', '<br>')

const product1PriceString = window.prompt('How much does product cost?')
const product1Price = window.Number(product1PriceString)

if (window.isNaN(product1Price)){
    document.write('Your input incorrect number ')
} else {
    if(balance >= product1Price) {
        document.write('Product purchased')
    } else {
        document.write('Not enought money')
    }
}

document.write('<br>', 'END')