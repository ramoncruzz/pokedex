import React  from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { colors } from "../../../utils/colors"
import { fonts } from "../../../utils/fonts"
import { capitalizerFirstLetter } from '../../../utils/functions';
import { PokemonItem } from '../../../utils/types';
type Props ={
    pokemonInfo: PokemonItem
    isPokemonInPokedex: boolean,
    onViewDetails: (pokemonInfo: PokemonItem) => void,
    onCapture: (pokemonInfo: PokemonItem) => void,
}



const Cell: React.FC<Props> = ({pokemonInfo, isPokemonInPokedex, onCapture, onViewDetails}): React.JSX.Element => {

    return (
        <Card containerStyle={{flex: 1, backgroundColor: colors.backgroundSecondary}} > 
            <View style= {Styles.main}>
                <View style={Styles.titleContainer}>
                    <Text aria-expanded style={Styles.title}>{capitalizerFirstLetter(pokemonInfo.name)}</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <Icon raised size={20}
                          name='remove-red-eye'
                          type='material-icons'
                          color='gray'
                          onPress={()=> onViewDetails(pokemonInfo)} 
                           />
                    <Icon
                        raised
                        disabled={isPokemonInPokedex}
                        size={20}
                        name='catching-pokemon'
                        type='material-icons'
                        color='red'
                        onPress={()=> onCapture(pokemonInfo)} />
                </View>
            </View>
        </Card>
    );
}

const Styles = StyleSheet.create({
    main: {
        flex:4, 
        flexDirection: 'row',
    },
    titleContainer:{
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        fontFamily: fonts.fontFamilyPrimary,
        color: colors.fontColorSecondary,
        letterSpacing: 5 , 
        
    },
    buttonContainer: {
        flex:1,
        flexDirection: 'row'
    }
})
export default React.memo(Cell);    