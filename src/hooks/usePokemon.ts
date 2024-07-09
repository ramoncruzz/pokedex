import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthPokemons, capturePokemon } from '../redux/slices/myPokemons'
import { getDetailPokemon } from '../redux/slices/pokedex'
import type {RootState, AppDispatch} from '../redux/store';


const usePokemon = ()=>{
    const dispacth = useDispatch<AppDispatch>();
    const wildPokemons = useSelector((state: RootState)=> state.pokemons.pokemons);
    
    const loadPokemons = useCallback(()=>{
        dispacth(fecthPokemons({limit: 20, offset: 20}))
    },[]);
    return {
        loadPokemons,
        wildPokemons,
    }
}
export default usePokemon;