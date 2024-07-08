import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Home, Detail, PokeDex} from '../pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



 const App=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name= "home" component={Home} />
          <Stack.Screen name= "detail" component={Detail}/>
          <Stack.Screen name= "pokedex" component={PokeDex}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;