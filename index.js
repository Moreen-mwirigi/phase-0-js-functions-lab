function calculateTax(amount){
    const taxRate = 0.10
    return amount*taxRate
}
function convertToUpperCase(text){
    return text.toUpperCase()
}
function findMaximum(num1, num2){
    return num1 > num2 ? num1 : num2
}
function isPalindrome (word){
    const cleanWord = word.toLowerCase().replace (/\s/g, '')
    return cleanWord === cleanWord.split('').reverse().join('')
}
function calculateDiscountedPrice(originalPrice, discountPercentage){
    return originalPrice - (originalPrice*discountPercentage/100)
}
console.log(calculateTax(200))
console.log(convertToUpperCase("moreen"))
console.log(findMaximum(15, 7))
console.log(isPalindrome("Racecar"))
console.log(calculateDiscountedPrice(100, 20))

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };