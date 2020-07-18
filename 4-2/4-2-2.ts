type User2 = {
    name: string,
    [k: string]: number | string // インデックスシグネチャのnumber型とnameのstring型に互換性が必要
}

const userA: User = {
    name: 'Taro',
    age: 26
}

type Question = 'exercise_habits' | 'time_of_sleeping'
type Answer = 'mighty' | 'lot' | 'few' | 'entirely'
type User3 = {
    name: string,
    enquete: { [K in Question]?: Answer }
}

// compilerOptions.noImplicityAny が true

const userB: User3 = {
    name: 'Taro',
    enquete: {
        exercise_habits: 'entirely',
        time_of_sleeping: 'few'
    }
}

const x = userB.enquete['exercise_habits']
const y = userB.enquete['steps_per_day'] // Error

interface ReturnPromises {
    [k: string]: () => Promise<any>
}

const returnPromises: ReturnPromises = {
    name: 'Taro',
    walk: () => {},
    talk: async () => {} // No Error
}
