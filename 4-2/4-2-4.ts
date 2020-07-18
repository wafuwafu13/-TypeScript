function greet(name?: string) {
    console.log(`Hello ${name!.toLocaleUpperCase}`)
}

greet() // RunTime Error (Non-null assertion)

function greet2(name?: string) {
    console.log(`Hello ${name!.toLocaleUpperCase}`)
}
// !(Non-null assertion)は「nullおよびundefinedではないという」状況が余程信頼できない限り利用すべきではない

greet2() // Hello undefined

const myName = 0 as any as string
console.log(myName.toLocaleUpperCase()) // NoError (double assertion)
