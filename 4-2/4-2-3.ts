const tuple = [false, 1, '2'] as const  // const tuple: readonly [false, 1, '2]

function increment() {
    return { type: 'INCREMENT'}
}

function decrement() {
    return { type: 'DECREMENT'} as const
}

const x2 = increment()  // const x2: {type: string}
const y2 = decrement()  // const y2: {readonly type: "DECREMENT"}