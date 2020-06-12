type UserA = { gender: 'male', name: string }
type UserB = { gender: 'female', age: number }
type UserE = { gender: 'other', graduate: string }

function jadgeUserType(user: UserA | UserB | UserE) {
    switch(user.gender) {
        case 'male':
            const u0 = user // UserA
            return
        case 'female':
            const u1 = user // UserB
    }
}