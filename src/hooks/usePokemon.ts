import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthPokemons, capturePokemon } from '../redux/slices/myPokemons'
import { getDetailPokemon } from '../redux/slices/pokedex'
import type {RootState, AppDispatch} from '../redux/store';
import { PokemonItem } from '../utils/types';
import { useNavigation } from  "@react-navigation/native";


const usePokemon = ()=>{
    const dispacth = useDispatch<AppDispatch>();
    const navigation = useNavigation<any>();

    const wildPokemons = useSelector((state: RootState)=> state.pokemons.pokemons);
    const myPokemons =  useSelector((state: RootState)=> state.pokemons.myPokemons);
    const amount = myPokemons.length;
    
    const loadPokemons = useCallback(()=>{
        dispacth(fecthPokemons({limit: 20, offset: 20}))
    },[]);

   const onViewDetails =useCallback((pokemonInfo: PokemonItem)=>{
    const [_,id] = pokemonInfo.url.split("/").reverse()
        dispacth(getDetailPokemon(Number.parseInt(id)));
        navigation.navigate("detail");
   },[]);

    const onCapture =useCallback((pokemonInfo: PokemonItem)=>{
        dispacth(capturePokemon(pokemonInfo))

    },[dispacth]);
    return {
        loadPokemons,
        onViewDetails,
        onCapture,
        myPokemons,
        amount,
        wildPokemons,
    }
}
export default usePokemon;