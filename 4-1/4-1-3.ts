function getFormattedValue2(value: number, unit: string | null = null) {
    const _value = value.toFixed(1)
    if (unit == null) return `${_value}`
    return `${_value} ${unit.toUpperCase()}`
}

console.log(getFormattedValue2(100))
console.log(getFormattedValue2(100, 'kg'))