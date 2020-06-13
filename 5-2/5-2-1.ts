function greet () {} // Error
const greet = 'hello' // Error

interface UserL {
    name: string
}
interface UserL {
    age: number
}

type UserM = { // Error
    name: string
}
type UserM = { // Error
    age: number
}

interface Test {
    value: string
}
namespace Test {
    export interface Properties {
        name: string
    }
}

const test: Test = {
    value: 'value'
}
const test2: Test = {
    name: 'name' // Error
}
const properties: Test.Properties = {
    name: 'Taro'
}