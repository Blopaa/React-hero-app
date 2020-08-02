import { heroes } from"../data/heroes";

export const GetHeroByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no existe o no es correcto`)
    }

    return heroes.filter(hero => hero.publisher === publisher)

}