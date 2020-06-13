interface Part {
    id: number
    name: string
    subparts: Part[]
    updatePart(newName: string): void
}

type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>> // Pickによりkey, valueを持ってくる

type X4 = FunctionPropertyNames<Part> // updatePart
type Y4 = FunctionProperties<Part> // updatePart(newName: string): void

