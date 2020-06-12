type User4 = { gender: string }
type UserC = User4 & { name: string }
type UserD = User4 & { age: number, graduate: string }

function judgeUserType(user: UserC | UserD) {
    if ('gender' in user) {
        const u0 = user
        console.log('user type is UserC | userD')
    }
    if ('name' in user) {
        const u1 = user
        console.log('user type is UserC')
        return
    }
    const u2 = user
    console.log('user type is UserD')
}