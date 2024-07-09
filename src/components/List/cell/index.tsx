import React  from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { colors } from "../../../utils/colors"
import { fonts } from "../../../utils/fonts"
import { capitalizerFirstLetter } from '../../../utils/functions';
type Props ={
    pokemonName: string
    
}



const Cell: React.FC<Props> = ({pokemonName}): React.JSX.Element => {

    return (
        <Card containerStyle={{flex: 1, backgroundColor: colors.backgroundSecondary}} > 
            <View style= {Styles.main}>
                <View style={Styles.titleContainer}>
                    <Text aria-expanded style={Styles.title}>{capitalizerFirstLetter(pokemonName)}</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <Icon raised size={20}
                          name='remove-red-eye'
                          type='material-icons'
                          color='gray' />
                    <Icon
                        raised
                        size={20}
                        name='catching-pokemon'
                        type='material-icons'
                        color='red'
                        onPress={() => console.log('hello')} />
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
        fontSize: 30,
        fontFamily: fonts.fontFamilyPrimary,
        color: colors.fontColorPrimary,
        letterSpacing: 5 , 
        
    },
    buttonContainer: {
        flex:1,
        flexDirection: 'row'
    }
})
export default Cell;    