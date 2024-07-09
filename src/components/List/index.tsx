import React  from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { PokemonItem } from '../../utils/types';
import Cell from './cell'
import { colors } from '../../utils/colors';

type Props ={
    data: Array<PokemonItem>
    loadPokemons: () => void,
}



const ListComponent: React.FC<Props> = ({data, loadPokemons}): React.JSX.Element => {

    return (
    <FlatList style={Styles.main} data={data}
        keyExtractor={({url})=> url } 
        renderItem={({ item })=> <Cell pokemonName={item.name}/> }
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