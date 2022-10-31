const listOfCities: string[] = ['Amsterdam', 'Rotterdam', 'Paris', 'Warsaw', 'Amsterdam', 'Amsterdam', 'Chicken']

const setOfCities = new Set(listOfCities);

console.log(setOfCities)
// Set(5) { 'Amsterdam', 'Rotterdam', 'Paris', 'Warsaw', 'Chicken' }

setOfCities.add('Roma')

console.log(setOfCities)
// Set(6) { 'Amsterdam', 'Rotterdam', 'Paris', 'Warsaw', 'Chicken', 'Roma' }

setOfCities.delete('Chicken')

console.log(setOfCities)
// Set(5) { 'Amsterdam', 'Rotterdam', 'Paris', 'Warsaw', 'Roma' }

const hasTheHague = setOfCities.has('The Hague')

console.log({ hasTheHague })
// { hasTheHague: false }

console.log({ size: setOfCities.size })
// { size: 5 }

setOfCities.clear()

console.log({ size: setOfCities.size })
// { size: 0 }

type AllowedCities = 'Amsterdam' | 'Rotterdam' | 'Paris' | 'Warsaw' | 'Roma' | 'The Hague'
const setOfStrictCities = new Set<AllowedCities>()

// @ts-expect-error parameter should be of type AllowedCities
setOfStrictCities.add('Chicken')

const setOfMyCities = new MySet(listOfCities);