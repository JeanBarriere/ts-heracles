import { MySet } from "./set"

// 0. A Set is an array with unique set of values inside of it

// 1. You can instantiate a new Set
// 2. You can instantiate a new Set with no values
// 3. You can instantiate a new Set with values
// 4. You can use the size getter to retrieve the size of the set
// 5. The set is holding unique values
// 6. You can use the has() method to check if a value is contained in a set

// 7. You can use the add() method to insert a value in the set

// 8. You can use the delete() method to remove a value from the set
// 9. You can use the clear() method to clear all values from the set
// 10. You can have any type as a value in a Set

describe("a Set", () => {
    it("is instantiated", () => {
        // prepare
        let futureSet = null

        // execute
        futureSet = new MySet()

        // assert
        expect(futureSet).not.toBeNull()
        expect(futureSet).toBeInstanceOf(MySet)
    })

    it("is instantiated with values", () => {
        // prepare
        let mySet = null
        const initialValues = [1, 2, 3]

        // execute
        mySet = new MySet(initialValues)

        // assert
        expect(mySet).toBeInstanceOf(MySet)
    })

    it("returns the size of my set", () => {
        // prepare
        const initialValues = [1, 2, 3]
        const size = initialValues.length

        // execute
        const mySet = new MySet(initialValues)

        // assert
        expect(mySet.size).toEqual(size)
    })

    it("has a unique set of values", () => {
        // prepare
        const initialValues = [1, 1, 1, 2, 2, 2, 3, 3, 3]
        const expectedSize = 3

        // execute
        const mySet = new MySet(initialValues)

        // assert
        expect(mySet.size).toEqual(expectedSize)
    })

    it("checks if value is contained in a set", () => {
        // prepare
        const initialValues = [1, 2, 3]
        const expectedValue = 3
        const expectedResult = true

        // execute
        const mySet = new MySet(initialValues)
        const result = mySet.has(expectedValue)

        // assert
        expect(result).toEqual(expectedResult)
    })
})