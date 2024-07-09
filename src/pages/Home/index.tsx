import { Button } from '@rneui/base';
import React, { useCallback, useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import { List } from '../../components'
import usePokemon from '../../hooks/usePokemon';

const Home = () =>{
    useEffect(()=>{
        loadPokemons();
    },[]);

    const { loadPokemons, wildPokemons } = usePokemon();

    return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <List data={wildPokemons} loadPokemons={loadPokemons} />
    </SafeAreaView>)
}
export default Home;