function boxed<T>(props: T) {
    return { value: props }
}

const box = boxed<string | null>(null) // string | null

interface Props {
    amount: number
}
function boxed2<T extends Props>(props: T) {
    return { value: props.amount.toFixed(1) }
}

const box3 = boxed2({ amount: 0 })
const box4 = boxed2({ value: 0 }) // Error('value' does not exists in type 'Props')