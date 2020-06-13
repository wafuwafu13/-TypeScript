class Animal2 {
    feet: number = 4
    constructor(name: string, numFeet: number) { }
}

class Human2 {
    feet: number = 2
    hands: number = 2
    constructor(name: string, gender: string) { }
}

let animal: Animal2 = new Animal2('dog', 4)
let human: Human2 = new Human2('Taro', 'male')

human = animal // Error(Property 'hands' is missing type in Animal2 but required in type Human2)
animal = human // NoError