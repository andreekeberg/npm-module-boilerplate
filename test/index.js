import { assert, expect } from 'chai'
import example from '../src/index'

describe('example', () => {
    it('should return a number', () => {
        expect(example(1, 1)).to.be.a('number')
    })

    it('should add values of a and b', () => {
        expect(example(1, 2)).to.equal(3)
    })
})
