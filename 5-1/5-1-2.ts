type K0 = keyof {} // never
type K1 = keyof 0 // "toString" | "toFixed" ...

let o1 = { p1: 'test'}
let o2 = { p1: 'test', p2: 0 }
o1 = o2 // NoError
o2 = o1 // Error