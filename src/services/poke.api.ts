import service from './poke.service';
import {PokemonResponseApi, PokemonRequestParams, Pokemon} from '../utils/types';


export const search = (params?: PokemonRequestParams): Promise <PokemonResponseApi> => new Promise ((resolve, reject) => {
    service.get<PokemonResponseApi>("pokemon",{params})
        .then(response=>resolve(response.data))
        .catch(error=> reject(error))
});

export const detail = (id: number): Promise <Pokemon> => new Promise ((resolve, reject) => {
    service.get<Pokemon>("pokemon",{params: {id} } )
        .then(response=>resolve(response.data))
        .catch(error=> reject(error))
});
