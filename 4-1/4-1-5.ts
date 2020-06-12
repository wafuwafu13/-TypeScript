type State = {
    readonly id: number
    name: string
}

const state: State = {
    id: 1,
    name: 'Taro'
}

state.name = 'Hanako'
state.id = 2 // Error

type State2 = {
    id: number
    name: string
}

const state2: State = {
    id: 1,
    name: 'Taro'
}

const frozenState = Object.freeze(state2)
frozenState.name = 'Hanako' // Error
frozenState.id = 2 // Error