interface Properties {
    name: string
    age: number
    walk: () => void
    jump: () => Promise<void>
}
type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never
}[keyof T] // プロパティ名称を取得

type StringKeys = Filter<Properties, string> // "name"
type FunctionKeys = Filter<Properties, Function> // "walk" | "jump"

type StringKeys2<T> = Filter<T, string>
type Strings = Pick<Properties, StringKeys2<Properties>> // { name: string }