class Creature {
    breath() {}
}

class Animal extends Creature {
    shakeTail() {}
}

class Human extends Creature {
    greet() {}
}

function action(creature: Animal | Human | Creature) {
    const c0 = creature
    c0.breath() // NoError
    if (creature instanceof Animal) {
        const c1 = creature
        c1.greet() // Error
        return c1.shakeTail()
    }
}