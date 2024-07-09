import React  from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Card, Icon } from '@rneui/themed';

type Props ={
    pokemonName: string
    
}



const Cell: React.FC<Props> = ({pokemonName}): React.JSX.Element => {

    return (
        <Card containerStyle={{flex: 1}} > 
            <View style= {Styles.main}>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.title}>{pokemonName}</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <Icon raised size={20} name='rowing' />
                    <Icon
                        raised
                        size={20}
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
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
        backgroundColor: 'tomato',
    },
    titleContainer:{
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'Pokemon Solid'
    },
    buttonContainer: {
        flex:1,
        flexDirection: 'row'
    }
})
export default Cell;    