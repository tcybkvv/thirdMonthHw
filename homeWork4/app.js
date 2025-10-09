// Hw 1
const array = [100, 150, 200, 250, 300, 350]
const toSoms = array.map((money) => money * 87)
console.log(toSoms);

// Hw 2
const grades = [5,4,3,4,5,3,4,3,4,5,5]
const newGrades = grades.map((grade) => {
    if (grade === 5) {
        return 'A'
    } else if (grade === 4) {
        return 'B'
    } else {
        return 'C'
    }
})
console.log(newGrades)

// Hw 3
const numbers = [ "us4155552671", "us2125558392", "us3055551299", "de0301234567", "de0897654321", "de0409876543", "kg312123456", "kg551987654", "kg770456789", "ru4951234567"]
const usNumber = '+1'
const deNumber = '+49'
const kgNumber = '+996'
const ruNumber = '+7'

const newNumbers = numbers.map((number) => {
    const firstTwoNumber = number.slice(0, 2)
    const remaining = number.slice(2);
    if (firstTwoNumber === 'us') {
        return `${usNumber}${remaining}`
    } else if (firstTwoNumber === 'de') {
        return `${deNumber}${remaining}`
    } else if (firstTwoNumber === 'kg') {
        return `${kgNumber}${remaining}`
    } else if (firstTwoNumber === 'ru') {
        return `${ruNumber}${remaining}`
    }
})
console.log(newNumbers)

// Hw 4
const phoneNumbers = ["0700 123 456", "0770 234 567", "0550 345 678", "0551 456 789", "0555 567 890", "0705 678 901", "0707 789 012", "0755 890 123", "0500 901 234", "0505 012 345"]
const filtered = phoneNumbers.filter(number => number[2] === '5')
console.log(filtered)

// Hw 5
const carNumbers = ["01 KG 123 ABC", "02 KG 456 DEF", "03 KG 789 GHI", "01 KG 321 JKL", "05 KG 654 MNO", "06 KG 987 PQR", "07 KG 111 STU", "01 KG 222 VWX", "09 KG 333 YZA", "01 KG 444 BCD"]
const carFiltered = carNumbers.filter(number => number.slice(0, 2) === '01')
console.log(carFiltered)