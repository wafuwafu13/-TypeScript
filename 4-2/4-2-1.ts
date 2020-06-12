const defaultTheme = {
    backgroundColor: "orange" as "orange",
    borderColor: "red" as "red"
}

//defaultTheme.backgroundColor = "blue" // Error (ダウンキャスト)

function toNumber(value: string): any {
    return value
}

const fiction: number = toNumber('1000') // NoError
fiction.toFixed() // RunTime Error!  (anyにアップキャストした上でnumberにダウンキャストしているため)