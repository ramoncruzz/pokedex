import React, { useCallback }  from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { PokemonItem } from '../../utils/types';
import Cell from './cell'
import { colors } from '../../utils/colors';

type Props ={
    wild: Array<PokemonItem>,
    inPokedex: Array<PokemonItem>,
    loadPokemons: () => void,
    onViewDetails: (pokemonInfo: PokemonItem) => void,
    onCapture: (pokemonInfo: PokemonItem) => void,
    showMyPokemons?: boolean,
}


const ListComponent: React.FC<Props> = ({wild, inPokedex,showMyPokemons=false,loadPokemons, onViewDetails, onCapture}): React.JSX.Element => {

    const findPokemonInPokedex = useCallback((pokemonInfo: PokemonItem)=>{
        const isCaptured = inPokedex.some(item => item.name === pokemonInfo.name && item.url === pokemonInfo.url);
        return isCaptured;
    },[inPokedex])

    return (
    <FlatList style={Styles.main} data={showMyPokemons? inPokedex: wild}
        keyExtractor={({url})=> url } 
        renderItem={({ item })=> 
            <Cell pokemonInfo={item}
                  isPokemonInPokedex={findPokemonInPokedex(item)}
                  onCapture={onCapture}
                  onViewDetails={onViewDetails}/> 
                }
        onEndReachedThreshold={.7}
        onEndReached={loadPokemons}
    />
    );
}

const Styles = StyleSheet.create({
    main: {
        flex:1, 
        width: '100%',
        margin: 15,
        backgroundColor: colors.backgroundPrimary
    }
})
export default ListComponent;