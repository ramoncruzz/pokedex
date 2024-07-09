import { Button, Text } from '@rneui/base';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import usePokemon from '../../hooks/usePokemon';

const Home = () =>{
    const { loadPokemons, wildPokemons } = usePokemon();

    return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>quatidade {wildPokemons.length}</Text>
        <Button title="Load Pokemons" onPress={()=>loadPokemons()}/>
    </SafeAreaView>)
}
export default Home;