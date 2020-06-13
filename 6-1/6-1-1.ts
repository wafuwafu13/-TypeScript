interface Box<T = string> {
    value: T
}

const box0: Box = { value: 'test' }
const box1: Box = { value: 2 } // Error

interface Box2<T extends string | number> {
    value: T
}

const box2: Box2<number> = { value: 3 }