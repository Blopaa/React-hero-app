import { heroes } from '../data/heroes'

export const GetHeroByID = (id) => {
    return heroes.find(hero => hero.id === id)
}
