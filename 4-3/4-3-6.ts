type UserI = { name: string }
type UserJ = UserI & { gender: 'male' | 'female' | 'other'}
type UserK = UserI & { graduate: string }

const users: (UserJ | UserK)[] = [
    { name: 'Taro', gender: 'male' },
    { name: 'Hanako', graduate: 'Tokyo' }
]

const filteredUsers = users.filter(user => 'graduate' in user) // (UserJ | UserK)[]

const filteredUsers2 = users.filter(
    (user: UserJ | UserK): user is UserK => 'graduate' in user // ユーザー定義type guards
) // UserK[]