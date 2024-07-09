import { configureStore } from '@reduxjs/toolkit'
import pokedexSlice from './slices/pokedex';
import { useDispatch, createSelectorHook } from 'react-redux';
import pokemonSlice from './slices/myPokemons';

export const store = configureStore({
  reducer: {
    pokedex: pokedexSlice,
    pokemons: pokemonSlice, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

