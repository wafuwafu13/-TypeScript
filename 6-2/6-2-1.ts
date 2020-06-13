type isString<T>= T extends string ? true : false
type X = isString<'test'> // type X = true
type Y = isString<0> // type Y = false

interface Properties {
    name: string
    age: number
    flag: boolean
}

type IsType<T, U> = {
    [K in keyof T]: T[K] extends U ? true : false
}

type IsString = IsType<Properties, string> // { name: true, age: false, flag: false }