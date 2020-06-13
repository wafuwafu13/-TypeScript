let fn1 = (a: number) => 0
let fn2 = (b: number, c: string) => 0
fn2 = fn1 // NoError
fn1 = fn2 // Error