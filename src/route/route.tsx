import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import type {RootState} from '../redux/store';
import {Home, Detail, PokeDex} from '../pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';

const Stack = createNativeStackNavigator();

 const App=()=> {
  const amount =  useSelector((state: RootState)=> state.pokemons.myPokemons).length;
  const selectedPokemon =  useSelector((state: RootState)=> state.pokedex.pokemonDetail);
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' >
          <Stack.Screen name= "home" component={Home}  options={{header : ()=> <Header title="Pokemon" amount={amount} showPokeDexButton  />}}/>
          <Stack.Screen name= "detail" component={Detail} options={{header : ()=> <Header title={selectedPokemon?.name || "About"} amount={amount}  showBackButton showPokeDexButton />}}/>
          <Stack.Screen name= "pokedex" component={PokeDex} options={{header : ()=> <Header title="PokeDex"  amount={amount} showBackButton />}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;