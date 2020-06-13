let s1: 'test' = 'test'
let s2: string = s1 // NoError
let s3: string = 'test'
let s4: 'test' = s3 // Error

let un1: unknown = "test"
let un2: string = un1 // Error(型が決定するまでは別の型に代入できない)
let un3: number = un1 as number // NoError