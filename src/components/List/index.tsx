import React  from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { PokemonItem } from '../../utils/types';
import Cell from './cell'

type Props ={
    data: Array<PokemonItem>
    
}



const ListComponent: React.FC<Props> = ({data}): React.JSX.Element => {

    return (
    <FlatList style={Styles.main} data={data}
        keyExtractor={({url})=> url } 
        renderItem={({ item })=> <Cell pokemonName={item.name}/> }/>
    );
}

const Styles = StyleSheet.create({
    main: {
        flex:1, 
        width: '100%',
        margin: 15
    }
})
export default ListComponent;