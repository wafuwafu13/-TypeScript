namespace Publisher {
    export const name = ''
    interface Appearance {
        color: 'monochrome' | '4colors' | 'fullcolors'
    }
    export interface Book {
        title: string
        appearance: Appearance
    }
}

namespace Publisher {
    export interface CookingBook extends Book {
        category: 'cooking'
        appearance: Appearance // Error(can't find name)
    }
}

namespace Publisher {
    export interface Book {
        lang: 'ja'
    }
    export interface TravelBook extends Book {
        category: 'travel'
    }
}

const cookingBook: Publisher.CookingBook = {} as Publisher.CookingBook // 推論結果に「lang: 'ja'」が含まれている