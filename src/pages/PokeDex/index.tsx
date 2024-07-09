import { Text } from '@rneui/base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import { colors } from '../../utils/colors';
import usePokemon from '../../hooks/usePokemon';
import { List } from '../../components'

const PokeDex = () =>{
    const { loadPokemons,onViewDetails,onCapture, wildPokemons, myPokemons } = usePokemon();
    return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.backgroundPrimary}}>
       <List wild={wildPokemons}
                inPokedex={myPokemons}
                loadPokemons={loadPokemons}
                onCapture={onCapture}
                onViewDetails={onViewDetails}
                showMyPokemons
        />
    </SafeAreaView>)
}
export default PokeDex;