// 1
const logItems = function (array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`[${i + 1}] - ${array[i]}`)
	}
}

const items = ['яблуко', 'банан', 'вишня']
logItems(items)

// 2
const calculateEngravingPrice = function (message, pricePerWord) {
	const words = message.split(' ')
	const totalPrice = words.length * pricePerWord
	return totalPrice
}

const message = 'JavaScript is fun'
const pricePerWord = 10
console.log(calculateEngravingPrice(message, pricePerWord))

// 3
const findLongestWord = function (string) {
	const words = string.split(' ')
	let longestWord = ''
	for (const word of words) {
		if (word.length > longestWord.length) {
			longestWord = word
		}
	}
	return longestWord
}

const exampleString = 'The quick brown fox jumped over the lazy dog'
console.log(findLongestWord(exampleString))

// 4

const formatString = function (string) {
	if (string.length <= 40) {
		return string
	} else {
		return string.slice(0, 40) + '... '
	}
}

console.log(formatString('This is a short string.'))
console.log(
	formatString(
		'This is a longer string that will be truncated after forty characters.'
	)
)

// 5
const checkForSpam = function (massege) {
	const lowerCaseMessage = massege.toLowerCase()

	if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
		return true
	}
	return false
}

console.log(checkForSpam('Get the best sale offers now!'))
console.log(checkForSpam('This is a regular message.'))
console.log(checkForSpam('Beware of SPAM emails.'))
console.log(checkForSpam('No special offers available.'))

// 6

let input
const numbers = []
let total = 0

while (input !== null) {
	input = prompt('Введіть число (натисніть Cancel для завершення):')

	if (input === null) {
		break
	}

	input = Number(input)

	if (isNaN(input)) {
		alert('Було введено не число, попробуйте ще раз')
	} else {
		numbers.push(input)
	}
}

if (numbers.length > 0) {
	for (const number of numbers) {
		total += number
	}
	console.log(`Загальна сума чисел дорівнює ${total}`)
} else {
	console.log('Масив чисел порожній.')
}
