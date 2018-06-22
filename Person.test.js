let Person = require('./Person');
let axios = require('axios');

describe('All my person tests', () => {
    test('nancy is millennial', () => {
        //arrange
        let nancy = new Person(1984)
        //act
        let result = nancy.isMillennial()
        // assert
        expect(result).toBeTruthy()
    })

    test('Harold is a retiree', () => {
        let harold = new Person(1908)
        let result = harold.isRetiree()
        expect(result).toBeTruthy()
    })
    
    test('async stuff', () => {
        return axios.get('https://joes-autos.herokuapp.com/api/vehicles?color=green').then(res => {
            expect(res.data.length).toBe(3)
        })    
    })
})
