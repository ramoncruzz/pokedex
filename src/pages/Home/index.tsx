
import React, { useCallback, useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import { List } from '../../components'
import usePokemon from '../../hooks/usePokemon';
import { colors } from '../../utils/colors';

const Home = () =>{
    useEffect(()=>{
        loadPokemons();
    },[]);

    const { loadPokemons,onViewDetails,onCapture, wildPokemons, myPokemons } = usePokemon();

    return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.backgroundPrimary}}>
        <List wild={wildPokemons}
                inPokedex={myPokemons}
                loadPokemons={loadPokemons}
                onCapture={onCapture}
                onViewDetails={onViewDetails}
                showSearchBar
        />

     </SafeAreaView>)
}
export default Home;