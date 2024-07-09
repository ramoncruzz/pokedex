import { Button } from '@rneui/base';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import { List } from '../../components'
import usePokemon from '../../hooks/usePokemon';

const Home = () =>{
    const { loadPokemons, wildPokemons } = usePokemon();

    return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <List data={wildPokemons} />
        <Button title="Load Pokemons" onPress={()=>loadPokemons()}/>
    </SafeAreaView>)
}
export default Home;