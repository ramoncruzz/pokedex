import React, { useCallback, useEffect, useState }  from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';
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
    showSearchBar?: boolean
}


const ListComponent: React.FC<Props> = ({wild, inPokedex,showMyPokemons=false, showSearchBar=false,loadPokemons, onViewDetails, onCapture}): React.JSX.Element => {
    const [searchText , setSearchText] = useState<string>();
    const [cache] = useState(showMyPokemons? inPokedex: wild);
    const [filtered, setFiltered] = useState<PokemonItem[]>([])

    const findPokemonInPokedex = useCallback((pokemonInfo: PokemonItem)=>{
        const isCaptured = inPokedex.some(item => item.name === pokemonInfo.name && item.url === pokemonInfo.url);
        return isCaptured;
    },[inPokedex])

    useEffect(()=>{
        if(searchText){
            const _filtered = cache.filter(item=> RegExp(searchText,"gi").test(item.name))
            setFiltered(_filtered)
        }
    },[searchText]);


    return (
    <FlatList style={Styles.main} data={searchText ? filtered :  showMyPokemons?  inPokedex : wild}
        ListHeaderComponent={showSearchBar ? <SearchBar lightTheme  value={searchText} placeholder="Type the pokemon's name here" onChangeText={setSearchText} /> :undefined}
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
        marginBottom: 15,
        backgroundColor: colors.backgroundPrimary
    }
})
export default ListComponent;