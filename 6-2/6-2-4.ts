function greet() {
    return 'Hello'
}

type Return<T> = T extends (...arg: any[]) => infer U ? U  : never
type R = Return<typeof greet> // string

function greet2(name: string, age: number) {
    return `Hello! I'm ${name}. ${age} years old.`
}

type A1<T> = T extends (...arg: [infer U, ...any[]]) => any ? U : never // 関数型かつ第一引数がある条件に一致した場合、第一引数の型を返す
type A2<T> = T extends (...arg: infer U) => any ? U : never // 関数型だったら引数をtuple型で返す

type Y2 = A1<typeof greet2> // string
type Z = A2<typeof greet2> // [string, number]

async function greet3() {
    return 'Hello'
}

type ResolveArg<T> = T extends () => Promise<infer U> ? U : never
type X3 = typeof greet3 // () => Promise<string>
type Y3 = ResolveArg<typeof greet3> // string