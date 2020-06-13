class Person<T extends string> {
    name: T
    constructor (name: T) {
        this.name = name
    }
}

const person = new Person('Taro')
const personName = person.name // "Taro"

interface PersonProps {
    name: string
    age: number
    gender: 'male' | 'famale' | 'other'
}

class Person2<T extends PersonProps> {
    name: T['name']
    age: T['age']
    gender: T['gender']

    constructor (props: T) {
        this.name = props.name
        this.age = props.age
        this.gender = props.gender
    }
}

const person2 = new Person2({
    name: 'Taro',
    age: 28,
    gender: 'male'
})