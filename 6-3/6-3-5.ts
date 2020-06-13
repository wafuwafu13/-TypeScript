type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never
type T = Unbox<{ a: 'A'; b: 'B'; c: 'C' }> // "A" | "B" | "C"

const map = new Map([[0, 'foo'], [1, 'bar']] as const)
type PickMapKeys<T> = T extends Map<infer K, any> ? K : never
type MapKeys = PickMapKeys<typeof map> // 0 | 1