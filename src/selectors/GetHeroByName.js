import  { heroes } from "../data/heroes";

export const GetHeroByName = (name = '') => {

    if(name === ''){
        return []
    }
    if(name === 'all'){
        return heroes
    }
    // console.log(heroes);
    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name) || hero.alter_ego.toLowerCase().includes(name))
}