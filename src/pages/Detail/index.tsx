import React from 'react';
import { Card, Text, Chip } from '@rneui/base';
import { useSelector } from 'react-redux';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import type {RootState} from '../../redux/store';

const Detail = () =>{
    const detail =  useSelector((state: RootState)=> state.pokedex.pokemonDetail);
    return (
    <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Image resizeMode="contain" source={{uri: detail?.sprites.other['official-artwork'].front_default}} />
            <Card.Divider/>
            <Text style={Styles.title}>Name: 
                 <Text style={Styles.content}> {detail?.name}</Text>
            </Text>
            <Text style={Styles.title}>Weight: 
                 <Text style={Styles.content}> {(detail?.weight|| 0)/10} Kg</Text>
            </Text>
            <Text style={[Styles.title, {marginBottom: 15}]}>Height: 
                 <Text style={Styles.content}> {(detail?.height|| 0)/10} m</Text>
            </Text>
            <Card.Divider/>
                <Text style={Styles.title}>Abilities</Text>
                <View style={Styles.chipContainer} >
                    {detail?.abilities.map(item=> <Chip  title={item.ability.name} type="outline" /> )}
                </View>
        </Card>
        
    </SafeAreaView>)
}

const Styles = StyleSheet.create(({
    chipContainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    title: {
       fontSize: 15,
       fontWeight: 'bold'
    },
    content: {
        fontWeight: 'normal'
     },

}))
export default Detail;