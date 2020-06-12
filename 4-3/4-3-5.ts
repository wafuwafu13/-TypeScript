type UserF = { gender: string, [k: string]: any}
type UserG = UserF & { name: string }
type UserH = UserF & { age: number }

function isUserG(user: UserG | UserF): user is UserG { // 真偽値を返すアノテーション
    return user.name !== undefined
}

function isUserH(user: UserG | UserF): user is UserH {
    return user.age !== undefined
}

function getUserType(user: any) {
    const u0 = user // any
    if (isUserG(user)) {
        const u1 = user // UserG (推論適用)
        return 'G'
    }
    if (isUserH(user)) {
        const u2 = user // UserH
        return 'H'
    }
    return 'unknown'
}

const x3 = getUserType({ name: 'Taro'}) // "G" | "H" | unknown