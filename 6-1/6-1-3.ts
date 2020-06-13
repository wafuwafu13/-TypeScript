function pick<T, K extends keyof T>(props: T, key: K) { // K型は、第一引数のプロパティ名称であることが確約される
    return props[key]
}

const obj = {
    name: 'Taro',
    amount: 0,
    flag: false
}

const value1 = pick(obj, 'name') 
const value2 = pick(obj, 'test') // Error