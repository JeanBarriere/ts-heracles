import { add } from '.'

describe("index tests", () => {
    it("adds 2 + 3 and returns 5", () => {
        // prepare
        const left = 2
        const right = 3
        const expectedResult = 5

        // execute
        const result = add(left, right)

        // assert
        expect(result).toEqual(expectedResult)
    })
})