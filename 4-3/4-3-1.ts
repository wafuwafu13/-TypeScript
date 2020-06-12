function reset(value: number | string | boolean) {
    const v0 = value // string | number | boolean
    if (typeof value == 'number') {
        const v1 = value // number
        return 0
    }
    const v2 = value // string || boolean
    if (typeof value == 'string') {
        const v3 = value // string
        return ''
    }
    const v4 = value // boolean
    return false
}

console.log(reset(1))
console.log(reset('1'))
console.log(reset(true))