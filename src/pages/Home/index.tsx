import { Text } from '@rneui/base';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import { search } from '../../services/poke.api'

const Home = () =>{
   

    return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
    </SafeAreaView>)
}
export default Home;