let fns = require('./functions');

test('returnTwo should return 2', () => {
    let result = fns.returnTwo()
    expect(result).toBe(2)
})

test('greeting should return Hello name', () => {
    let result = fns.greeting('Jill')
    expect(result).toEqual('Hello, Jill.')
})
test('greeting should return Hello name', () => {
    let result = fns.greeting('James')
    expect(result).toEqual('Hello, James.')
})

test('add should return the sum of 2 numbers', () => {
    let result = fns.add(1,2)
    expect(result).toBe(3)

})
test('add should return the sum of 2 numbers', () => {
    let result = fns.add(5,9)
    expect(result).toBe(14)

})
test('multiply should return the result of two numbers multiplied', () => {
    let result = fns.multiply(5,9)
    expect(result).toBe(45)

})
test('divide should return the product of two numbers', () => {
    let result = fns.divide(10,2)
    expect(result).toBe(5)

})
test('subtract should return the result of two numbers subtracted', () => {
    let result = fns.subtract(15,9)
    expect(result).toBe(6)

})

